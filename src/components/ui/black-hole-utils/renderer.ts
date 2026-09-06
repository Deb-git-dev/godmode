/**
 * black-hole-utils/renderer.ts
 *
 * WebGL renderer backing `components/ui/black-hole.tsx`.
 *
 * Public API (consumed by the component):
 *   createRenderer({ canvas }) => { ready: Promise<void>; dispose(): void }
 *
 * Implementation: a single-pass fragment-shader ray tracer that approximates
 * null geodesics around a Schwarzschild black hole (rs = 1):
 *   - gravitational lensing (bending term  a = -1.5 * h2 * p / r^5)
 *   - turbulent accretion disk with differential (Keplerian) rotation
 *   - relativistic Doppler beaming + color shift on the disk
 *   - photon-ring / shadow emerges naturally from the geodesic integration
 *   - lensed starfield background (sampled with the bent ray direction)
 *   - pointer parallax camera + idle auto-orbit
 */

export interface CreateRendererOptions {
  canvas: HTMLCanvasElement;
}

export interface BlackHoleRenderer {
  ready: Promise<void>;
  dispose: () => void;
}

const VERT_SRC = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uResolution;
uniform float uTime;
uniform vec2  uMouse;   // smoothed, -1..1
uniform int   uSteps;

#define RS   1.0
#define RIN  2.25
#define ROUT 7.4

float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float s = 0.0;
  float a = 0.52;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p *= 2.07;
    a *= 0.5;
  }
  return s;
}

// Sparse star layer on a direction grid. Star sits at the cell center;
// radius kept small so edge clipping is invisible.
float starLayer(vec3 rd, float scale, float thresh, float tw) {
  vec3 p = rd * scale;
  vec3 id = floor(p);
  float h = hash13(id);
  if (h < thresh) return 0.0;
  vec3 f = fract(p) - 0.5;
  float d = length(f);
  float mag = (h - thresh) / (1.0 - thresh);
  float core = smoothstep(0.34, 0.0, d);
  float twinkle = 0.72 + 0.28 * sin(uTime * (1.4 + mag * 3.0) + h * 91.0);
  return core * core * mag * tw * twinkle;
}

vec3 background(vec3 rd) {
  float s1 = starLayer(rd,  44.0, 0.865, 1.25);
  float s2 = starLayer(rd,  78.0, 0.895, 0.85);
  float s3 = starLayer(rd, 132.0, 0.925, 0.55);
  vec3 col = vec3(0.95, 0.93, 0.90) * s1
           + vec3(0.85, 0.82, 0.80) * s2
           + vec3(0.75, 0.72, 0.72) * s3;

  // faint warm dust band, keeps the sky from feeling empty
  float band = exp(-abs(dot(rd, normalize(vec3(0.28, 1.0, 0.18)))) * 5.2);
  float dust = fbm(rd * 3.4) * fbm(rd * 7.1);
  col += vec3(0.30, 0.20, 0.13) * band * dust * 0.55;
  col += vec3(0.05, 0.035, 0.03) * dust * 0.6;
  return col;
}

// Accretion disk emission sampled at a plane-crossing point.
// rgb = premultiplied emission, a = opacity
vec4 diskSample(vec3 hit, vec3 rd) {
  float r = length(hit.xz);
  if (r < RIN || r > ROUT) return vec4(0.0);

  float t = (r - RIN) / (ROUT - RIN);
  float fade = smoothstep(0.0, 0.06, t) * (1.0 - smoothstep(0.42, 1.0, t));
  if (fade <= 0.001) return vec4(0.0);

  // differential rotation: inner material orbits faster
  float omega = 2.1 / pow(r * 0.42, 1.5);
  float ang = uTime * omega;
  float ca = cos(ang);
  float sa = sin(ang);
  vec2 xz = mat2(ca, -sa, sa, ca) * hit.xz;

  float n = fbm(vec3(xz * 1.05, r * 1.55));
  float streak = 0.42 + 1.55 * max(n * 1.45 - 0.28, 0.0);

  // radial temperature: white-hot inside, deep orange outside
  float hot = pow(RIN / r, 2.1);
  vec3 cInner = vec3(1.00, 0.96, 0.88);
  vec3 cMid   = vec3(1.00, 0.62, 0.21);
  vec3 cOuter = vec3(0.78, 0.24, 0.06);
  vec3 base = mix(cOuter, cMid, smoothstep(0.0, 0.55, 1.0 - t));
  base = mix(base, cInner, smoothstep(0.35, 1.0, hot));

  // relativistic Doppler beaming (orbit is CCW seen from +y)
  vec3 vel = normalize(vec3(-hit.z, 0.0, hit.x));
  float beta = clamp(sqrt(0.5 / r), 0.0, 0.62);
  float mu = dot(vel, rd);            // rd points camera -> disk
  float gam = inversesqrt(max(1.0 - beta * beta, 1e-4));
  float dopp = clamp(pow(1.0 / (gam * (1.0 + beta * mu)), 3.0), 0.18, 3.4);
  // approaching side shifts white-hot, receding side deep red
  float shift = clamp((dopp - 1.0) * 0.55, -0.4, 0.55);
  base = mix(base, vec3(1.0, 0.94, 0.82), max(shift, 0.0));
  base = mix(base, vec3(0.45, 0.10, 0.03), max(-shift, 0.0) * 0.8);

  // gravitational redshift dimming near the ISCO
  float gz = sqrt(max(1.0 - RS / r, 0.0));
  float emit = fade * streak * (0.30 + 1.35 * hot) * dopp * (0.55 + 0.45 * gz);

  float alpha = clamp(emit * 0.85, 0.0, 0.92);
  return vec4(base * emit, alpha);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y;

  // camera: slow idle drift + pointer parallax
  float yaw   = uMouse.x * 0.55;
  float pitch = clamp(uMouse.y, -1.0, 1.0) * 0.30 + 0.16;
  float cd    = 10.2;
  vec3 ro = vec3(sin(yaw) * cos(pitch), sin(pitch), cos(yaw) * cos(pitch)) * cd;
  vec3 ww = normalize(-ro);
  vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
  vec3 vv = cross(ww, uu);
  vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.85 * ww);

  // conserved squared angular momentum of the photon
  vec3 c = cross(ro, rd);
  float h2 = dot(c, c);

  vec3 p = ro;
  vec3 v = rd;

  vec3 col = vec3(0.0);
  float T = 1.0;
  bool captured = false;
  float glow = 0.0;

  for (int i = 0; i < 170; i++) {
    if (i >= uSteps) break;
    float r2 = dot(p, p);
    float r = sqrt(r2);

    if (r < RS * 1.02) { captured = true; break; }
    if (r2 > 1250.0 && dot(p, v) > 0.0) break;

    // soft ambient halo around the hole
    glow += exp(-r * 1.35) * 0.011;

    float dt = clamp(0.24 * (r - 0.82), 0.045, 0.52);
    vec3 a = (-1.5 * h2 / (r2 * r2 * r)) * p;
    v += a * dt;
    vec3 np = p + v * dt;

    // equatorial plane crossing -> disk
    if (p.y * np.y < 0.0) {
      float f = p.y / (p.y - np.y);
      vec3 hit = mix(p, np, f);
      vec4 dsk = diskSample(hit, normalize(v));
      col += dsk.rgb * dsk.a * T;
      T *= (1.0 - dsk.a);
      if (T < 0.03) break;
    }
    p = np;
  }

  if (!captured && T > 0.03) {
    col += background(normalize(v)) * T;
  }

  col += vec3(0.95, 0.48, 0.18) * glow * T * 0.85;

  // tone map + gamma + subtle vignette
  col = 1.0 - exp(-col * 1.30);
  vec2 q = gl_FragCoord.xy / uResolution;
  float vig = 0.32 + 0.68 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.28);
  col *= vig;
  col = pow(max(col, vec3(0.0)), vec3(0.4545));

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  src: string
): WebGLShader | null {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn(
      "[black-hole] shader compile failed:",
      gl.getShaderInfoLog(sh)
    );
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function createRenderer({ canvas }: CreateRendererOptions): BlackHoleRenderer {
  let disposed = false;
  let rafId = 0;
  let program: WebGLProgram | null = null;
  let gl: WebGLRenderingContext | null = null;
  let resizeObserver: ResizeObserver | null = null;
  let resolveReady!: () => void;

  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const pointer = { x: 0, y: 0 };
  const smooth = { x: 0, y: 0 };
  let lastInput = -1e9;
  let firstFrameDone = false;

  const ready = new Promise<void>((resolve) => {
    resolveReady = resolve;
  });

  const attrs: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
    preserveDrawingBuffer: false,
  };

  gl = (canvas.getContext("webgl2", attrs) ||
    canvas.getContext("webgl", attrs) ||
    canvas.getContext("experimental-webgl", attrs)) as WebGLRenderingContext | null;

  if (!gl) {
    console.warn("[black-hole] WebGL is not available; rendering skipped.");
    resolveReady?.();
    return { ready, dispose: () => {} };
  }

  const onContextLost = (e: Event) => {
    e.preventDefault();
    console.warn("[black-hole] WebGL context lost.");
  };
  canvas.addEventListener("webglcontextlost", onContextLost, false);

  const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
  if (vs && fs) {
    program = gl.createProgram();
    gl.attachShader(program!, vs);
    gl.attachShader(program!, fs);
    gl.linkProgram(program!);
    if (!gl.getProgramParameter(program!, gl.LINK_STATUS)) {
      console.warn(
        "[black-hole] program link failed:",
        gl.getProgramInfoLog(program!)
      );
      program = null;
    }
  }

  if (program) {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(program);

    uniforms.resolution = gl.getUniformLocation(program, "uResolution");
    uniforms.time = gl.getUniformLocation(program, "uTime");
    uniforms.mouse = gl.getUniformLocation(program, "uMouse");
    uniforms.steps = gl.getUniformLocation(program, "uSteps");
  }

  const isCoarse = window.matchMedia?.("(pointer: coarse)").matches ?? false;
  const steps =
    isCoarse || Math.min(window.innerWidth, window.innerHeight) < 640 ? 104 : 150;

  const resize = () => {
    if (disposed || !gl) return;
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (isCoarse) dpr = Math.min(dpr, 1.5);
    // cap total pixels for fill-rate safety
    while (w * h * dpr * dpr > 3600000 && dpr > 0.75) dpr -= 0.25;
    const pw = Math.max(1, Math.floor(w * dpr));
    const ph = Math.max(1, Math.floor(h * dpr));
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
      gl.viewport(0, 0, pw, ph);
    }
  };

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const onPointer = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);
    lastInput = performance.now();
  };
  canvas.addEventListener("pointermove", onPointer, { passive: true });
  canvas.addEventListener("pointerdown", onPointer, { passive: true });

  const start = performance.now();

  const frame = () => {
    if (disposed || !gl || !program) return;

    resize();

    // idle auto-orbit: slow drift when the pointer is resting
    const now = performance.now();
    const elapsed = (now - start) / 1000;
    let tx = pointer.x;
    let ty = pointer.y;
    if (now - lastInput > 4000) {
      tx = Math.sin(elapsed * 0.16) * 0.55;
      ty = Math.sin(elapsed * 0.11 + 1.2) * 0.22;
    }
    smooth.x += (tx - smooth.x) * 0.045;
    smooth.y += (ty - smooth.y) * 0.045;

    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, elapsed);
    gl.uniform2f(uniforms.mouse, smooth.x, smooth.y);
    gl.uniform1i(uniforms.steps, steps);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    if (!firstFrameDone) {
      firstFrameDone = true;
      resolveReady?.();
    }

    rafId = requestAnimationFrame(frame);
  };

  if (program) {
    rafId = requestAnimationFrame(frame);
  } else {
    resolveReady?.();
  }

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
    resizeObserver = null;
    canvas.removeEventListener("pointermove", onPointer);
    canvas.removeEventListener("pointerdown", onPointer);
    canvas.removeEventListener("webglcontextlost", onContextLost);
    if (gl) {
      const ext = gl.getExtension("WEBGL_lose_context");
      ext?.loseContext();
    }
    gl = null;
    program = null;
  };

  return { ready, dispose };
}
