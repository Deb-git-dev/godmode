import React from "react";
import { cn } from "../../lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  speed?: number;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  speed = 1,
}) => {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-slate-800/80 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={{
          ["--duration" as any]: `${calculatedDuration}s`,
          ["--radius" as any]: `${radius}px`,
          ["--delay" as any]: `-${delay}s`,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:var(--delay)]",
          reverse ? "[animation-direction:reverse]" : "",
          className
        )}
      >
        <div className="absolute flex items-center justify-center" style={{ transform: `translateY(-${radius}px)` }}>
          {children}
        </div>
      </div>
    </>
  );
};
