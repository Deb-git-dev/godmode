import React, { useState } from "react";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp } from "../components/portfolio/reveal";
import { Magnetic } from "../components/portfolio/magnetic";
import { WarmAurora } from "../components/portfolio/warm-aurora";
import { ContactRows, DirectionsCard } from "../components/portfolio/technicals";
import { Guestbook } from "../components/portfolio/interactive";
import { profile } from "../lib/profile";

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PortfolioShell>
      <WarmAurora className="min-h-[100svh]">
        <section className="mx-auto w-full max-w-[100rem] px-5 pb-16 pt-32 md:px-10 md:pt-44">
          <FadeUp y={12} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]">
            <span>Contact & Inquiries</span>
            <span className="flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-copper" />
              </span>
              {profile.availability} — {profile.availabilityWindow}
            </span>
          </FadeUp>

          <h1 className="mt-6 font-display text-[14vw] leading-[0.96] text-ink md:text-[10rem]">
            <WordReveal text="Let's make" delay={0.1} />
            <br />
            <WordReveal text="it *memorable.*" delay={0.35} />
          </h1>

          <FadeUp delay={0.55} className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            Tell me about the architecture, the timeline, or impact initiative.
            I reply within <span className="text-copper">48 hours</span> with grounded technical recommendations or initial scopes.
          </FadeUp>

          {/* email row */}
          <FadeUp delay={0.65} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] text-bone transition-colors duration-300 hover:bg-copper"
              >
                {profile.email}
              </a>
            </Magnetic>
            <button
              onClick={copyEmail}
              aria-live="polite"
              className="rounded-full border border-ink/20 px-6 py-4 font-label text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-copper hover:text-copper"
            >
              {copied ? "Copied to clipboard!" : "Copy email"}
            </button>
          </FadeUp>

          {/* bordered contact rows */}
          <FadeUp delay={0.7} className="mt-12">
            <ContactRows
              rows={[
                { label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
                { label: "Based", value: profile.city },
                { label: "Status", value: "Available for Q1/Q2 2026 Advisory & Builds" },
              ]}
            />
          </FadeUp>

          {/* grid: form + socials */}
          <div className="mt-16 grid gap-10 pb-24 md:mt-24 md:grid-cols-[7fr_5fr] md:pb-32">
            {/* form */}
            <FadeUp delay={0.1}>
              {sent ? (
                <div className="flex h-full min-h-[22rem] flex-col items-start justify-center rounded-2xl border border-copper/30 bg-linen/70 p-8 backdrop-blur-sm md:p-12">
                  <span className="flex size-14 items-center justify-center rounded-full bg-copper text-linen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
                    Message <span className="italic text-copper">received.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 md:text-base">
                    Thanks, {form.name || "friend"} — your inquiry is logged.
                    I&apos;ll reply directly to {form.email || "your inbox"} from {profile.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="rounded-2xl border border-ink/10 bg-linen/70 p-7 backdrop-blur-sm md:p-10">
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Direct Inquiry</p>
                  <div className="mt-8 grid gap-7">
                    <label className="block">
                      <span className="font-label text-[9px] uppercase tracking-[0.25em] text-taupe">Your name *</span>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Debapriya Bhattacharyya"
                        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-copper"
                      />
                    </label>
                    <label className="block">
                      <span className="font-label text-[9px] uppercase tracking-[0.25em] text-taupe">Email *</span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-copper"
                      />
                    </label>
                    <label className="block">
                      <span className="font-label text-[9px] uppercase tracking-[0.25em] text-taupe">About the initiative *</span>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="We're architecting an autonomous pipeline or foundation program…"
                        className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-copper"
                      />
                    </label>
                    <button
                      type="submit"
                      className="group inline-flex w-fit items-center gap-3 rounded-full bg-copper px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] text-linen transition-colors duration-300 hover:bg-ink"
                    >
                      Send inquiry
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </FadeUp>

            {/* socials + directions */}
            <div className="flex flex-col gap-4">
              <FadeUp delay={0.15}>
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Channels & Foundations</p>
                <div className="mt-5 flex flex-col">
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-t border-ink/12 py-4 last:border-b"
                    >
                      <span className="font-display text-2xl text-ink transition-all duration-300 group-hover:translate-x-2 group-hover:text-copper md:text-3xl">
                        {s.label}
                      </span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-taupe transition-colors group-hover:text-copper">
                        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={0.22}>
                <DirectionsCard
                  steps={[
                    "Share an architectural specification, repo, or CSR concept.",
                    "Expect a direct technical reply and initial scope within 48 hours.",
                    "We start every project with a focused discovery session.",
                  ]}
                />
              </FadeUp>
              <FadeUp delay={0.28}>
                <div className="rounded-2xl border border-ink/10 bg-linen/70 p-6 backdrop-blur-sm">
                  <p className="font-label text-[9px] uppercase tracking-[0.25em] text-taupe">Location</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {profile.location}
                    <br />
                    Working worldwide, distributed-first.
                  </p>
                  <p className="mt-4 font-label text-[9px] uppercase tracking-[0.25em] text-taupe">Specializations</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    Autonomous AI Systems · Non-Profit Telemetry · Cloud Gateways · WebGL Creative Dev
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* message wall */}
        <section className="mx-auto w-full max-w-[100rem] px-5 pb-28 md:px-10 md:pb-36">
          <FadeUp>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Community Wall</p>
          </FadeUp>
          <FadeUp delay={0.08} className="mt-8 max-w-3xl">
            <Guestbook />
          </FadeUp>
        </section>
      </WarmAurora>
    </PortfolioShell>
  );
};

export default ContactPage;
