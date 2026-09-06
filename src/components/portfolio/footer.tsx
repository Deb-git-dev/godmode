"use client";

/**
 * Footer — dark warm umber section: huge serif CTA with magnetic button,
 * email copy-on-click with "Copied!" flash, socials, local time, marquee,
 * credits row. Sticky-bottom safe (mt-auto handled by shell).
 */
import { useEffect, useState } from "react";
import Link from "./Link";
import { motion } from "framer-motion";
import { profile } from "@/lib/profile";
import { Magnetic } from "./magnetic";
import { AnimatedMarquee } from "@/components/ui/marquee-helper";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timezone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const time = useLocalTime();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer className="relative mt-auto overflow-hidden bg-umber text-bone">
      {/* warm glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 45% at 78% 88%, rgba(192,90,46,0.28), transparent 65%), radial-gradient(40% 35% at 8% 6%, rgba(192,90,46,0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* marquee band */}
      <div className="relative border-b border-bone/10 py-4">
        <AnimatedMarquee speed={36}>
          {["Brand Systems", "WebGL Experiences", "Art Direction", "Creative Development", "Motion Design", "Product Design"].map(
            (t) => (
              <span key={t} className="mx-6 flex items-center gap-6 font-label text-[11px] uppercase tracking-[0.3em] text-bone/50">
                {t}
                <span className="inline-block size-1 rounded-full bg-copper" aria-hidden="true" />
              </span>
            )
          )}
        </AnimatedMarquee>
      </div>

      <div className="relative mx-auto max-w-[100rem] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">
          {new Date().getFullYear()} — Open for collaborations
        </p>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl font-display text-[13vw] leading-[0.95] md:text-[7.5rem]">
            Let&apos;s make
            <br />
            it <span className="italic text-copper">memorable.</span>
          </h2>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-copper px-9 py-5 font-label text-[11px] uppercase tracking-[0.25em] text-linen transition-colors duration-300 hover:bg-bone hover:text-ink"
              >
                Start a project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:rotate-45">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Magnetic>

            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 font-label text-xs tracking-[0.12em] text-bone/70 transition-colors hover:text-bone"
              aria-live="polite"
            >
              <span className="border-b border-dotted border-bone/40 pb-0.5 group-hover:border-copper">
                {copied ? "Copied!" : profile.email}
              </span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                {copied ? (
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <>
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-16 flex flex-col gap-6 border-t border-bone/10 pt-8 md:mt-24 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {profile.socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative font-label text-[10px] uppercase tracking-[0.22em] text-bone/60 transition-colors hover:text-bone"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-8 font-label text-[10px] uppercase tracking-[0.22em] text-bone/40">
            <span>
              {profile.city} — <span className="text-bone/70">{time || "··:··"}</span>
            </span>
            <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="uppercase tracking-[0.22em] text-bone/60 transition-colors hover:text-copper"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
