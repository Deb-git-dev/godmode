"use client";

/**
 * interactive.tsx — interaction techniques reverse-engineered from the references.
 *
 * HoverPreviewList   — jackelder/thibaut editorial index list; a cover image
 *                      follows the cursor with spring physics (desktop only)
 * TestimonialSlides  — sergestudios full-bleed colour slides + two-tone quotes
 *                      + avatar-rail switcher + guglieri progress dashes
 * Guestbook          — guglieri "share a message on the site" wall (localStorage)
 * PixelMarquee       — rohithmanikkoth pixel-font marquee band
 */
import { useEffect, useRef, useState } from "react";
import Link from "./Link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { AnimatedMarquee } from "@/components/ui/marquee-helper";
import type { Project } from "@/lib/projects";
import { assetUrl } from "@/lib/assets";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── HoverPreviewList ──────────────────────────────────────────────────── */

export function HoverPreviewList({ items }: { items: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const [fine, setFine] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 260, damping: 26, mass: 0.7 });
  const zone = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zone.current) return;
    const rect = zone.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={zone}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          data-cursor-label="VIEW"
          onMouseEnter={() => setActive(p)}
          className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-ink/15 py-6 transition-colors duration-300 last:border-b hover:bg-sand/40 md:grid-cols-[3.5rem_1fr_10rem_4rem_2rem] md:gap-x-8 md:py-8"
        >
          <span className="font-label text-[10px] tracking-[0.2em] text-taupe transition-colors group-hover:text-copper">
            {p.index}
          </span>
          <h3 className="font-display text-3xl leading-none text-ink transition-all duration-500 group-hover:translate-x-3 group-hover:text-copper md:text-5xl">
            {p.title}
          </h3>
          <span className="col-span-3 font-label text-[9px] uppercase tracking-[0.22em] text-taupe md:col-span-1 md:text-[10px]">
            {p.category}
          </span>
          <span className="hidden font-label text-[10px] tracking-[0.2em] text-taupe md:block">
            {p.year}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="hidden text-ink transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-copper md:block"
          >
            <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ))}

      {/* cursor-following cover preview */}
      {fine && (
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.slug}
              className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
              style={{ x: sx, y: sy }}
              initial={{ opacity: 0, scale: 0.82, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.86, rotate: 2 }}
              transition={{ duration: 0.35, ease: EASE }}
              aria-hidden="true"
            >
              <div className="relative -ml-32 -mt-24 h-48 w-72 overflow-hidden rounded-xl border border-ink/10 shadow-2xl shadow-umber/30 lg:h-56 lg:w-84">
                <img
                  src={assetUrl(active.cover)}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-umber/70 px-3 py-1 font-label text-[8px] uppercase tracking-[0.25em] text-bone backdrop-blur-sm">
                  {active.title} — {active.year}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ── TestimonialSlides ─────────────────────────────────────────────────── */

interface Slide {
  id: string;
  bg: string;
  text?: string;
  fg: string;
  muted: string;
  segments: { t: string; em?: boolean }[];
  name: string;
  role: string;
  avatar: string;
  companyNote: string;
}

const slides: Slide[] = [
  {
    id: "s1",
    bg: "#c05a2e",
    fg: "#faf7f0",
    muted: "rgba(250,247,240,0.55)",
    segments: [
      { t: "“Deb turned a " },
      { t: "fuzzy ambition", em: true },
      { t: " into a brand our investors quote back to us. The site " },
      { t: "closed our seed round", em: true },
      { t: " before the deck did.”" },
    ],
    name: "Kavya R.",
    role: "Founder, Meridian Labs",
    avatar: assetUrl("/work/portrait.png"),
    companyNote: "Backed by Blume & First Cheque",
  },
  {
    id: "s2",
    bg: "#e4dbc8",
    fg: "#1b1710",
    muted: "rgba(27,23,16,0.45)",
    segments: [
      { t: "“Working with Deb feels like hiring " },
      { t: "a studio, an engineer and an editor", em: true },
      { t: " in one person. He shipped " },
      { t: "three weeks early", em: true },
      { t: " — then kept polishing.”" },
    ],
    name: "Daniel O.",
    role: "CPO, Obsidian Private",
    avatar: assetUrl("/work/portrait.png"),
    companyNote: "Previously at Stripe & Wise",
  },
  {
    id: "s3",
    bg: "#211b12",
    fg: "#f3efe7",
    muted: "rgba(243,239,231,0.5)",
    segments: [
      { t: "“The WebGL work is " },
      { t: "genuinely art", em: true },
      { t: ". Our album premiere became " },
      { t: "the label's biggest weekend", em: true },
      { t: " — and the code is open source now.”" },
    ],
    name: "Mira S.",
    role: "Founder, Nocturne Records",
    avatar: assetUrl("/work/portrait.png"),
    companyNote: "Independent, Berlin",
  },
];

export function TestimonialSlides() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const s = slides[idx];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.section
        key={s.id}
        className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden px-5 py-20 md:px-10"
        initial={{ backgroundColor: slides[(idx + slides.length - 1) % slides.length].bg }}
        animate={{ backgroundColor: s.bg }}
        transition={{ duration: 0.7, ease: EASE }}
        aria-live="polite"
      >
        <div className="mx-auto grid w-full max-w-[100rem] gap-10 md:grid-cols-[8rem_1fr]">
          {/* avatar rail (serge switcher) */}
          <div className="flex flex-row gap-3 md:flex-col md:gap-4">
            {slides.map((sl, i) => (
              <button
                key={sl.id}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial from ${sl.name}`}
                aria-pressed={i === idx}
                className={`relative size-14 shrink-0 overflow-hidden rounded-full transition-all duration-500 md:size-16 ${
                  i === idx
                    ? "ring-2 ring-copper ring-offset-4 ring-offset-transparent scale-105"
                    : "opacity-45 hover:opacity-80"
                }`}
              >
                <img src={sl.avatar} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {/* quote */}
          <div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={s.id}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <p
                  className="max-w-5xl font-display text-[clamp(1.9rem,5vw,4.2rem)] leading-[1.08]"
                  style={{ color: s.fg }}
                >
                  {s.segments.map((seg, i) =>
                    seg.em ? (
                      <strong key={i} className="font-semibold" style={{ color: s.fg }}>
                        {seg.t}
                      </strong>
                    ) : (
                      <span key={i} style={{ color: s.muted }}>
                        {seg.t}
                      </span>
                    )
                  )}
                </p>
                <footer className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="font-label text-[11px] uppercase tracking-[0.25em]" style={{ color: s.fg }}>
                    {s.name}
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em]" style={{ color: s.muted }}>
                    {s.role}
                  </span>
                  <span className="font-label text-[10px] tracking-[0.14em]" style={{ color: s.muted }}>
                    {s.companyNote}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* progress dashes (guglieri) */}
            <div className="mt-12 flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {slides.map((sl, i) => (
                <button
                  key={sl.id}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
                  style={{
                    width: i === idx ? 64 : 28,
                    backgroundColor: i === idx ? s.fg : s.muted,
                  }}
                >
                  {i === idx && !paused && (
                    <motion.span
                      key={`bar-${idx}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-copper"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
              <span className="ml-3 font-label text-[9px] uppercase tracking-[0.3em]" style={{ color: s.muted }}>
                {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

/* ── Guestbook ─────────────────────────────────────────────────────────── */

interface Note {
  name: string;
  msg: string;
  at: number;
}
const GB_KEY = "am-guestbook-v1";

export function Guestbook() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [justPosted, setJustPosted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try {
        const raw = localStorage.getItem(GB_KEY);
        if (raw) setNotes(JSON.parse(raw) as Note[]);
      } catch {
        /* storage unavailable */
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const post = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 40) || "Anonymous";
    const cleanMsg = msg.trim().slice(0, 200);
    if (!cleanMsg) return;
    const next = [{ name: cleanName, msg: cleanMsg, at: Date.now() }, ...notes].slice(0, 8);
    setNotes(next);
    setName("");
    setMsg("");
    setJustPosted(true);
    setTimeout(() => setJustPosted(false), 2200);
    try {
      localStorage.setItem(GB_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <div className="rounded-2xl border border-ink/10 bg-linen/80 p-6 backdrop-blur-sm md:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Leave a note</p>
        <span className="font-label text-[9px] tracking-[0.1em] text-taupe">
          lives in your browser
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">
        Say hi, leave a comma, tell me my kerning is off. Be nice — notes stay on
        this site, in your browser, just for fun.
      </p>

      <form onSubmit={post} className="mt-5 flex flex-col gap-3">
        <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            maxLength={40}
            aria-label="Your name"
            className="rounded-xl border border-ink/15 bg-bone px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-copper"
          />
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message"
            maxLength={200}
            required
            aria-label="Message"
            className="rounded-xl border border-ink/15 bg-bone px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-copper"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-label text-[10px] uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:bg-copper"
        >
          {justPosted ? "Pinned!" : "Pin to the wall"}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>

      {notes.length > 0 && (
        <ul className="mt-6 flex max-h-72 flex-col gap-3 overflow-y-auto pr-1 [scrollbar-width:thin]">
          <AnimatePresence initial={false}>
            {notes.map((n) => (
              <motion.li
                key={n.at}
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="rounded-xl border border-ink/10 bg-bone px-4 py-3"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-label text-[10px] uppercase tracking-[0.18em] text-copper">
                    {n.name}
                  </span>
                  <span className="font-label text-[8px] text-taupe">
                    {new Date(n.at).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink/85">{n.msg}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}

/* ── PixelMarquee ──────────────────────────────────────────────────────── */

export function PixelMarquee({
  items,
  bg = "bg-ink",
  fg = "text-bone",
}: {
  items: string[];
  bg?: string;
  fg?: string;
}) {
  return (
    <section className={`border-y border-ink/10 py-4 ${bg} ${fg}`} aria-hidden="true">
      <AnimatedMarquee speed={36}>
        {items.map((t) => (
          <span key={t} className="mx-7 flex items-center gap-7 font-pixel text-xs tracking-[0.3em] uppercase md:text-sm">
            {t}
            <span className="font-pixel text-copper">+</span>
          </span>
        ))}
      </AnimatedMarquee>
    </section>
  );
}
