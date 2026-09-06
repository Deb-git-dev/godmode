"use client";

/**
 * Reveal — shared scroll-reveal primitives.
 * - WordReveal: per-word mask reveal (hero headlines), roman/italic serif mixing
 * - FadeUp: generic fade + rise on first viewport entry
 * - LineGrow: hairline that draws itself
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Splits a headline into words; words wrapped in *asterisks* render italic serif.
 *  The observer lives on the (visible) root; masked children inherit via variants —
 *  putting whileInView on a clipped child never fires (IO sees 0 visible area). */
export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      aria-label={text.replace(/\*/g, "")}
    >
      {words.map((raw, i) => {
        const italic = raw.startsWith("*") && raw.endsWith("*");
        const word = italic ? raw.slice(1, -1) : raw;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block will-change-transform ${
                italic ? "font-display italic text-copper" : ""
              }`}
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.9, ease: EASE, delay: delay + i * stagger },
                },
              }}
              aria-hidden="true"
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function LineGrow({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-px bg-ink/15 ${className}`}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      aria-hidden="true"
    />
  );
}

/** Circular rotating badge — "SCROLL • SELECTED WORK •" (orbiting text). */
export function OrbitBadge({ href = "#work", label = "SCROLL" }: { href?: string; label?: string }) {
  const items = `${label} — SELECTED WORK — `;
  return (
    <a
      href={href}
      className="group relative block size-28 md:size-32"
      aria-label="Scroll to selected work"
    >
      <svg viewBox="0 0 100 100" className="size-full animate-[spin_14s_linear_infinite]">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-label text-[8.2px] uppercase tracking-[0.24em]">
          <textPath href="#circlePath">{items.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full border border-ink/15 bg-bone/60 backdrop-blur-sm transition-colors duration-300 group-hover:bg-copper group-hover:border-copper">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink transition-colors group-hover:text-bone">
          <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/**
 * HeroChipLine — second display line of the home hero:
 * "people [inline image chip] feel(highlight pill) it."
 * Two-tone words + inline media chip + copper highlight pill
 * (guglieri.com technique). Client component so it can use motion.
 */
export function HeroChipLine({ chipSrc }: { chipSrc: string }) {
  const line = (children: ReactNode, delay: number, key: number) => (
    <span key={key} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
      <motion.span
        className="inline-block will-change-transform"
        variants={{
          hidden: { y: "110%" },
          show: { y: "0%", transition: { duration: 0.9, ease: EASE, delay } },
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <motion.span
      className="inline"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      aria-label="people feel it."
    >
      {line(<span className="text-ink/45">people&nbsp;</span>, 0.4, 0)}
      {line(
        <>
          <span className="mr-[0.12em] inline-block h-[0.62em] w-[1.5em] overflow-hidden rounded-full align-[-0.06em]">
            <img src={chipSrc} alt="" className="h-full w-full object-cover" loading="eager" />
          </span>
          <span className="relative inline-block -rotate-2 rounded-[0.35em] bg-copper px-[0.22em] pb-[0.04em] text-linen italic">
            feel
          </span>
        </>,
        0.5,
        1
      )}
      {line(<span className="text-ink">&nbsp;it.</span>, 0.62, 2)}
    </motion.span>
  );
}
