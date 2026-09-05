import React, { useEffect, useRef } from "react";

interface LiquidMetalProps {
  className?: string;
  tint?: string;
}

export const LiquidMetal: React.FC<LiquidMetalProps> = ({ className = "", tint = "#06b6d4" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      t += 0.02;
      ctx.fillStyle = "#0A0D14";
      ctx.fillRect(0, 0, width, height);

      const numBands = 8;
      for (let i = 0; i < numBands; i++) {
        ctx.beginPath();
        const yBase = (height / (numBands + 1)) * (i + 1);
        ctx.moveTo(0, yBase);

        for (let x = 0; x < width; x += 10) {
          const y = yBase + Math.sin(x * 0.008 + t + i * 0.8) * 35 + Math.cos(x * 0.004 - t * 0.5) * 20;
          ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "rgba(255,255,255,0.05)");
        grad.addColorStop(0.5, tint + "44");
        grad.addColorStop(1, "rgba(255,255,255,0.05)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 4 + i * 1.2;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [tint]);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
};
