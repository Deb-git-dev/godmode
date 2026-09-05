import React, { useEffect, useRef } from "react";

interface NeuralNoiseProps {
  className?: string;
  color?: string;
  density?: number;
  speed?: number;
}

export const NeuralNoise: React.FC<NeuralNoiseProps> = ({
  className = "",
  color = "#6366F1",
  density = 40,
  speed = 0.002,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      time += speed;
      ctx.fillStyle = "rgba(11, 15, 25, 0.2)";
      ctx.fillRect(0, 0, width, height);

      const step = Math.max(15, Math.floor(width / density));
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;

      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        for (let y = 0; y < height; y += step) {
          const angle = (Math.sin(x * 0.005 + time) + Math.cos(y * 0.005 + time)) * Math.PI;
          const len = 12;
          const x2 = x + Math.cos(angle) * len;
          const y2 = y + Math.sin(angle) * len;
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, density, speed]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
};
