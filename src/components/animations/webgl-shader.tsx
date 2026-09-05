import React, { useEffect, useRef } from "react";

interface WebGLShaderProps {
  className?: string;
  speed?: number;
}

export const WebGLShader: React.FC<WebGLShaderProps> = ({ className = "", speed = 1.0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    let animId: number;
    let startTime = performance.now();

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(uv);
        vec3 col = vec3(0.0);

        for (float i = 1.0; i < 4.0; i++) {
          uv.x += 0.3 / i * sin(i * 3.0 * uv.y + time);
          uv.y += 0.3 / i * cos(i * 3.0 * uv.x + time);
        }

        col.r = sin(uv.x * 2.0 + time) * 0.5 + 0.5;
        col.g = sin(uv.y * 2.0 + time * 1.5) * 0.4 + 0.3;
        col.b = cos(d * 4.0 - time) * 0.5 + 0.6;

        col *= (1.2 - d * 0.6);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "resolution");
    const timeLoc = gl.getUniformLocation(program, "time");

    const render = () => {
      if (!canvas) return;
      const width = (canvas.width = canvas.offsetWidth);
      const height = (canvas.height = canvas.offsetHeight);
      gl.viewport(0, 0, width, height);

      gl.uniform2f(resLoc, width, height);
      gl.uniform1f(timeLoc, ((performance.now() - startTime) * 0.001) * speed);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, [speed]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
};
