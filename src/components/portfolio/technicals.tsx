"use client";

/**
 * technicals.tsx — reverse-engineered techniques from the 8 reference portfolios.
 *
 * ScrambleText   — timq.xyz decode effect (mono labels resolving char by char)
 * ParallaxFrame  — jackelder.design image scroll-parallax (scale 1.1 + translateY in frame)
 * PixelDissolve  — jackelder.design pixel-block section transition
 * DirectionsCard — timq.xyz "DIRECTIONS:" numbered instruction card
 * ContactRows    — jackelder.design bordered rows (mono label | huge value)
 * NextCasePills  — thibaut.cool prev/next bordered pill navigation
 *
 * Palette law: bone/sand/ink/umber/copper/taupe. Zero green. Zero pure black.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "./Link";
import { motion, useScroll, useTransform } from "framer-motion";

function useInView(ref: React.RefObject<Element>, options?: { once?: boolean; margin?: string }) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options?.once) obs.disconnect();
      } else if (!options?.once) {
        setInView(false);
      }
    }, { rootMargin: options?.margin });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options?.once, options?.margin]);
  return inView;
}
import { projects as nextPrevList, type Project } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── ScrambleText ──────────────────────────────────────────────────────── */

const GLYPHS = "01<>/\\|=+*#·:";

export function ScrambleText({
  text,
  className = "",
  duration = 900,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const settled = Math.floor(p * text.length);
      let next = text.slice(0, settled);
      for (let i = settled; i < text.length; i++) {
        const ch = text[i];
        next += ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(next);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}

/* ── ParallaxFrame ─────────────────────────────────────────────────────── */

export function ParallaxFrame({
  src,
  alt,
  ratio = "aspect-[16/9]",
  className = "",
  rounded = "rounded-2xl",
  priority = false,
  children,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // jackelder recipe: image scaled 1.1+ inside a cropped frame, translated by scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sand ${rounded} ${className}`}>
      <div className={`relative ${ratio}`}>
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          style={{ y, scale: 1.16 }}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        {children}
      </div>
    </div>
  );
}

/* ── PixelDissolve ─────────────────────────────────────────────────────── */

export function PixelDissolve({ rows = 5, cols = 32 }: { rows?: number; cols?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const cells = Array.from({ length: rows * cols });
  // deterministic pseudo-random so SSR/client markup match
  const rand = (i: number) => {
    const x = Math.sin(i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };

  return (
    <div
      ref={ref}
      className="relative flex h-[16vw] max-h-44 min-h-24 w-full items-center overflow-hidden bg-umber md:h-40"
      aria-hidden="true"
    >
      <div
        className="grid h-full w-full"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {cells.map((_, i) => {
          const r = rand(i);
          const color = r > 0.82 ? "bg-copper" : r > 0.5 ? "bg-bone" : "bg-sand";
          const delay = rand(i + 777) * 0.55;
          return (
            <motion.span
              key={i}
              className={color}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={inView ? { opacity: [0, 1, 1, 0.92], scale: 1 } : {}}
              transition={{ duration: 0.9, delay, ease: EASE, times: [0, 0.4, 0.8, 1] }}
              style={{ opacity: 0 }}
            />
          );
        })}
      </div>
      <p className="absolute inset-x-0 text-center font-pixel text-[10px] uppercase tracking-[0.5em] text-copper md:text-xs">
        pixel dissolve — adapted from jackelder.design
      </p>
    </div>
  );
}

/* ── DirectionsCard ────────────────────────────────────────────────────── */

export function DirectionsCard({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-ink/15 bg-linen/80 p-6 backdrop-blur-sm">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Directions:</p>
      <ol className="mt-4 flex flex-col gap-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/85">
            <span className="font-label text-[10px] tracking-[0.15em] text-copper">
              {String(i + 1).padStart(2, "0")}.
            </span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── ContactRows ───────────────────────────────────────────────────────── */

export function ContactRows({
  rows,
}: {
  rows: { label: string; value: string; href?: string; copy?: boolean }[];
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex flex-col">
      {rows.map((r) =>
        r.href ? (
          <a
            key={r.label}
            href={r.href}
            target={r.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 border-t border-ink/15 py-6 transition-colors last:border-b hover:bg-sand/30 md:grid-cols-[9rem_1fr_auto] md:py-8"
          >
            <RowInner r={r} copied={copied} onCopy={copy} />
          </a>
        ) : (
          <div
            key={r.label}
            className="group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 border-t border-ink/15 py-6 transition-colors last:border-b hover:bg-sand/30 md:grid-cols-[9rem_1fr_auto] md:py-8"
          >
            <RowInner r={r} copied={copied} onCopy={copy} />
          </div>
        )
      )}
    </div>
  );
}

function RowInner({
  r,
  copied,
  onCopy,
}: {
  r: { label: string; value: string; href?: string; copy?: boolean };
  copied: string | null;
  onCopy: (v: string) => void;
}) {
  return (
    <>
      <span className="font-label text-[9px] uppercase tracking-[0.28em] text-taupe md:text-[10px]">
        {r.label}
      </span>
      <span className="text-right font-display text-[clamp(1.4rem,4.5vw,3.4rem)] leading-none text-ink transition-colors duration-300 group-hover:text-copper">
        {r.value}
      </span>
      {r.copy ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCopy(r.value);
          }}
          aria-label={`Copy ${r.label.toLowerCase()}`}
          className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-copper hover:text-copper"
        >
          {copied === r.value ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-copper">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 012-2h10" strokeLinecap="round" />
            </svg>
          )}
        </button>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-taupe transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-copper">
          <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
}

/* ── NextCasePills ─────────────────────────────────────────────────────── */

export function NextCasePills({ current }: { current: Project }) {
  const all = nextPrevList;
  const i = all.findIndex((p) => p.slug === current.slug);
  const prev = all[(i - 1 + all.length) % all.length];
  const next = all[(i + 1) % all.length];

  const pill =
    "group inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 font-label text-[10px] uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:border-copper hover:bg-copper hover:text-linen";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <Link href={`/work/${prev.slug}`} className={pill}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-1">
          <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {prev.title}
      </Link>
      <span className="font-label text-[9px] uppercase tracking-[0.3em] text-taupe">
        Case {current.index} — {current.title}
      </span>
      <Link href={`/work/${next.slug}`} className={pill}>
        Next project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}

/* ── (end technicals) ──────────────────────────────────────────────────── */
