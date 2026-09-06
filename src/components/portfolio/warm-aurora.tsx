"use client";

/**
 * WarmAurora — copper/rose/sand conic aurora (the original aurora-background
 * component recolored for the portfolio palette; zero green, zero blue).
 * Same keyframe choreography as the integrated AuroraBackground.
 */
import { cn } from "@/lib/utils";
import React from "react";

export function WarmAurora({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative overflow-hidden bg-bone", className)} {...props}>
      <style>{`
        @keyframes warm-aurora-move { 0%,100% { transform: translate(0,0) scale(1);} 50% { transform: translate(6%,-4%) scale(1.15);} }
        @keyframes warm-aurora-beam-1 { 0%,100% { transform: rotate(-8deg) scaleY(1); opacity:.75 } 50% { transform: rotate(-2deg) scaleY(1.25); opacity:1 } }
        @keyframes warm-aurora-beam-2 { 0%,100% { transform: rotate(10deg) scaleY(1.1); opacity:.6 } 50% { transform: rotate(3deg) scaleY(.95); opacity:.9 } }
        @keyframes warm-aurora-beam-3 { 0%,100% { transform: translateX(0) } 50% { transform: translateX(7%) } }
      `}</style>
      <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className="absolute h-[40rem] w-[46rem] opacity-70 blur-3xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #c05a2e22 0deg, #d98e5f22 90deg, #b0443a22 180deg, #e4b07822 270deg, #c05a2e22 360deg)",
            animation: "warm-aurora-beam-1 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute h-[34rem] w-[38rem] opacity-60 blur-3xl"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #d98e5f33 0deg, #c05a2e33 120deg, #e8d9be33 240deg, #d98e5f33 360deg)",
            animation: "warm-aurora-beam-2 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute h-[26rem] w-[80rem] opacity-50 blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, #e4b07844 30%, #c05a2e44 60%, transparent)",
            animation: "warm-aurora-beam-3 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute h-[60rem] w-[60rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #faf7f0cc, #f3e2cc88 55%, transparent)",
            animation: "warm-aurora-move 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      {children}
    </div>
  );
}

export default WarmAurora;
