"use client";

/**
 * Cursor — small copper dot + trailing ring; grows over links/buttons.
 * Elements can declare `data-cursor-label="VIEW"` — the ring then expands
 * into a copper pill carrying the label (guglieri-style playful cursor states).
 * Desktop (fine pointer) only via pure CSS; never blocks clicks.
 */
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 250, damping: 24, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 250, damping: 24, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest?.("a, button, [data-cursor='hover']"));
      const labelled = t.closest?.("[data-cursor-label]") as HTMLElement | null;
      setLabel(labelled?.dataset.cursorLabel ?? null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const expanded = label !== null;

  return (
    <div className="hidden [@media(pointer:fine)]:block">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] size-2 rounded-full bg-copper"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: expanded ? 0 : 1 }}
        aria-hidden="true"
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full border ${
          expanded ? "border-copper bg-copper" : "border-copper/60"
        }`}
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: expanded ? 76 : hovering ? 52 : 30,
          height: expanded ? 76 : hovering ? 52 : 30,
          opacity: hovering || expanded ? 1 : 0.55,
          backgroundColor: expanded ? "#c05a2e" : hovering ? "rgba(192,90,46,0.08)" : "rgba(192,90,46,0)",
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            className="font-label text-[9px] uppercase tracking-[0.22em] text-linen"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

export default Cursor;
