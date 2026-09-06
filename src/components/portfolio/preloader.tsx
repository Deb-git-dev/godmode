"use client";

/**
 * Preloader — once-per-session intro: copper counter 0→100, wordmark,
 * then a warm curtain lift. (jackelder loading-counter pattern.)
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/profile";

const KEY = "am-preloader-seen";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = requestAnimationFrame(() => {
      if (sessionStorage.getItem(KEY)) return;
      setDone(false);
      document.documentElement.style.overflow = "hidden";
      const t0 = performance.now();
      const DUR = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / DUR);
        // ease-out for satisfying deceleration
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          sessionStorage.setItem(KEY, "1");
          setTimeout(() => {
            setDone(true);
            document.documentElement.style.overflow = "";
          }, 250);
        }
      };
      raf = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-umber text-bone"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle, rgba(192,90,46,0.25) 0%, transparent 60%)" }} />
          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-bone/50">
            {profile.wordmark.roman} {profile.wordmark.italic} — Portfolio
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-[22vw] leading-none text-bone md:text-[10rem]">
              {count}
            </span>
            <span className="font-label text-xl text-copper">%</span>
          </div>
          <div className="mt-8 h-px w-48 overflow-hidden bg-bone/15">
            <div
              className="h-full bg-copper transition-[width] duration-100 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
