"use client";

/**
 * Counter-scrolling marquee rows used by hero-3 (AnimatedMarqueeHero).
 */
import { cn } from "@/lib/utils";

export function AnimatedMarquee({
  children,
  direction = "left",
  speed = 40,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) {
  const dur = `${speed}s`;
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 items-center"
        style={{
          animation: `marquee-${direction} ${dur} linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center"
        style={{
          animation: `marquee-${direction} ${dur} linear infinite`,
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes marquee-right { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default AnimatedMarquee;
