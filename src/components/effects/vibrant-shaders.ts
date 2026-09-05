/**
 * Vibrant Chromatic WebGL Fragment Shaders
 * Grounded in authentic 21st.dev and Awwwards color signatures.
 * Strictly zero monochrome / desaturated gray slop.
 */

export const VIBRANT_NEURAL_NOISE = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){
  vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){
  float v=0.0; float a=0.5;
  for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.04; a*=0.5; }
  return v;
}
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  float t = uTime * 0.16;
  vec2 q = uv * 2.5 + vec2(uMouse.x-0.5, uMouse.y-0.5)*0.5;
  float n = fbm(q + fbm(q*1.8 + t) + t*0.8);
  float n2 = fbm(q*2.6 - n + t*0.4);
  float veins = smoothstep(0.40, 0.70, n2) * (1.0 - smoothstep(0.75, 0.98, n2));
  
  // Vivid chromatic palettes: Deep obsidian blue -> Electric Ultraviolet -> Glowing Neon Cyan
  vec3 deepSpace = vec3(0.02, 0.04, 0.09);
  vec3 electricViolet = vec3(0.55, 0.12, 0.92);
  vec3 neonCyan = vec3(0.00, 0.95, 1.00);
  vec3 laserMagenta = vec3(1.00, 0.10, 0.65);
  
  vec3 col = mix(deepSpace, electricViolet, n * 1.2);
  col = mix(col, neonCyan, veins * 0.95);
  col += laserMagenta * pow(n2, 3.5) * 0.75;
  col += neonCyan * pow(veins, 2.0) * 0.6;
  
  // Subtle radial vignette
  col *= 1.0 - 0.3 * dot(uv, uv);
  gl_FragColor = vec4(col, 1.0);
}
`;

export const VIBRANT_FLOW_FIELD = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  float t = uTime * 0.35;
  vec3 col = vec3(0.02, 0.03, 0.08);
  
  for(float i=1.0; i<6.0; i++){
    p.x += 0.14 / i * sin(i*2.6*p.y + t + uMouse.x*2.0);
    p.y += 0.12 / i * cos(i*2.0*p.x + t*0.9 + uMouse.y*2.0);
    
    // Intense glowing cyan and vivid violet energy rays
    col += vec3(
      0.14 / abs(p.x + sin(p.y*2.0+t)*0.25) * 0.35,
      0.22 / abs(p.y + cos(p.x*2.0+t)*0.25) * 0.55,
      0.30 / length(p) * 0.40
    ) * (0.05 + 0.02*sin(t + i));
  }
  
  vec3 baseGlow = mix(vec3(0.01, 0.03, 0.08), vec3(0.12, 0.04, 0.28), uv.y);
  col = mix(baseGlow, col, 0.95);
  col = tanh(col * 1.3);
  
  // Neon edge accent
  col += vec3(0.0, 0.3, 0.6) * pow(1.0 - length(p)*0.8, 4.0) * 0.4;
  gl_FragColor = vec4(col, 1.0);
}
`;

export const VIBRANT_NEON_ORBS = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

vec3 orb(vec2 uv, vec2 c, float r, vec3 hue){
  float d = length(uv - c);
  float core = smoothstep(r, r*0.12, d);
  float halo = r*r / (d*d + 0.0015);
  return hue * (core*1.2 + halo*0.35);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  float t = uTime * 1.2;
  vec3 col = vec3(0.015, 0.02, 0.04);
  vec2 m = (uMouse - 0.5) * vec2(uRes.x/uRes.y, 1.0);

  // 4 Radiant, high-voltage saturated neon bodies
  // 1: Laser Cyan (#00f0ff)
  col += orb(uv, vec2(sin(t*0.45)*0.48, cos(t*0.35)*0.25) + m*0.12, 0.17, vec3(0.0, 0.95, 1.0));
  // 2: Hot Neon Magenta (#ff007f)
  col += orb(uv, vec2(cos(t*0.32)*-0.42, sin(t*0.40)*0.32), 0.15, vec3(1.0, 0.05, 0.65));
  // 3: Radioactive Emerald (#00ff66)
  col += orb(uv, vec2(sin(t*0.25+1.4)*0.24, cos(t*0.45)*-0.35), 0.13, vec3(0.0, 1.0, 0.55));
  // 4: Golden Solar Amber (#ffb703) with pointer tracking
  col += orb(uv, vec2(0.0) + m*0.45, 0.12, vec3(1.0, 0.75, 0.05));

  // Soft tone curve with high vibrancy
  col = col / (0.8 + col * 0.7);
  col *= 1.0 - 0.22*dot(uv, uv);
  gl_FragColor = vec4(col, 1.0);
}
`;

export const VIBRANT_LIQUID_CHROME = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);
}
float sph(vec3 p, float r){ return length(p)-r; }

float map(vec3 p, float t, vec2 m){
  float d = sph(p - vec3(sin(t*0.75)*0.40, cos(t*0.55)*0.22, 0.0), 0.58);
  d = smin(d, sph(p - vec3(cos(t*0.45)*-0.45, sin(t*0.65)*0.25, 0.14), 0.42), 0.32);
  d = smin(d, sph(p - vec3(m.x*1.5-0.75, m.y*1.1-0.55, 0.08), 0.36), 0.35);
  d = smin(d, sph(p - vec3(0.0, -0.60, 0.0), 0.46), 0.42);
  return d;
}

vec3 nrm(vec3 p, float t, vec2 m){
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    map(p+e.xyy,t,m)-map(p-e.xyy,t,m),
    map(p+e.yxy,t,m)-map(p-e.yxy,t,m),
    map(p+e.yyx,t,m)-map(p-e.yyx,t,m)
  ));
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
  float t = uTime;
  vec2 m = uMouse;
  vec3 ro = vec3(0.0, 0.05, 2.5);
  vec3 rd = normalize(vec3(uv, -1.6));
  float dist = 0.0;
  float hit = 0.0;
  vec3 p;
  for(int i=0; i<64; i++){
    p = ro + rd * dist;
    float d = map(p, t, m);
    if(d < 0.002){ hit = 1.0; break; }
    dist += d;
    if(dist > 8.0) break;
  }
  
  // Rich cosmic blue/indigo gradient backdrop
  vec3 bg = mix(vec3(0.02, 0.03, 0.08), vec3(0.08, 0.02, 0.16), uv.y*0.5+0.5);
  if(hit < 0.5){
    gl_FragColor = vec4(bg, 1.0);
    return;
  }
  
  vec3 n = nrm(p, t, m);
  vec3 l = normalize(vec3(0.5, 0.8, 0.6));
  float diff = max(dot(n, l), 0.0);
  float spec = pow(max(dot(reflect(-l, n), -rd), 0.0), 40.0);
  
  // Full-spectrum iridescent rainbow chromatic dispersion based on surface normals
  vec3 rainbow = vec3(
    sin(n.x * 4.0 + t*0.5) * 0.5 + 0.5,
    sin(n.y * 4.0 + 2.09 + t*0.5) * 0.5 + 0.5,
    sin((n.x + n.y) * 4.0 + 4.18 + t*0.5) * 0.5 + 0.5
  );
  
  vec3 chromeEnv = mix(vec3(0.1, 0.25, 0.6), rainbow, 0.85);
  vec3 col = chromeEnv * (0.35 + 0.65*diff) + vec3(1.0, 1.0, 1.0)*spec*1.2;
  
  // Glowing cyan rim light
  float rim = 1.0 - max(dot(-rd, n), 0.0);
  col += vec3(0.0, 0.9, 1.0) * pow(rim, 3.0) * 0.8;
  
  col = mix(bg, col, hit);
  gl_FragColor = vec4(col, 1.0);
}
`;

export const VIBRANT_OCEANIC_CAUSTICS = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){
  vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float t = uTime * 0.25;
  vec2 m = uMouse * 0.2;
  
  float n = noise(uv*3.5 + t*0.8 + m);
  float n2 = noise(uv*7.0 - t*0.9 + n);
  float n3 = noise(uv*14.0 + t*1.2);
  
  // Saturated Caribbean Turquoise, Bioluminescent Cyan, and Deep Sapphire
  vec3 deepSea = vec3(0.01, 0.08, 0.22);
  vec3 turquoise = vec3(0.00, 0.82, 0.78);
  vec3 bioCyan = vec3(0.05, 0.95, 1.00);
  vec3 seafoam = vec3(0.85, 1.00, 0.95);
  
  vec3 col = mix(deepSea, turquoise, n*1.1);
  col = mix(col, bioCyan, pow(n2, 2.5)*0.8);
  
  // Sharp sparkling caustics
  float caustic = pow(n2 * n3, 2.0) * 2.2;
  col += seafoam * caustic * 0.9;
  
  // Sunlight dispersion from top
  col += vec3(0.0, 0.35, 0.55) * smoothstep(0.3, 1.0, uv.y) * 0.4;
  gl_FragColor = vec4(col, 1.0);
}
`;
