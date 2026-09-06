"use client";

/**
 * OrbitingCircles — integrated from
 * https://21st.dev/@dillionverma/components/orbiting-circles (MagicUI)
 * Children revolve along a circular path; reverse prop flips direction.
 */
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="pointer-events-none absolute inset-0 size-full transform -scale-x-100 stroke-neutral-200/60 dark:stroke-white/10"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r={radius / (160 / 100)} fill="none" strokeWidth="1" />
        </svg>
      )}
      <style>{`
        @keyframes orbit {
          0%   { transform: rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg)); }
          100% { transform: rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg)); }
        }
      `}</style>
      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--angle": delay,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-10 transform-gpu animate-orbit items-center justify-center rounded-full",
          className
        )}
      >
        {children}
      </div>
      <style>{`
        .animate-orbit { animation-name: orbit; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </>
  );
}

export default OrbitingCircles;
