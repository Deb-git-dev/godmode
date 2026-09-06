import React from "react";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp } from "../components/portfolio/reveal";
import { OrbitingCircles } from "../components/ui/orbiting-circles";
import { profile } from "../lib/profile";

const experience = [
  { years: "2024 — Present", role: "AI Systems Architect & Founder", place: "GODMODE & Tribeni Minati Foundation, Kolkata" },
  { years: "2022 — 2024", role: "Principal Cloud Engineer", place: "Autonomous LLM Gateway & Distributed Systems, Remote" },
  { years: "2020 — 2022", role: "Lead Full-Stack Developer", place: "Enterprise Data & Non-Profit Telemetry Systems" },
  { years: "2018 — 2020", role: "Creative Technologist", place: "WebGL Shaders, Interactive Labs & Design Engineering" },
];

const recognition = [
  { year: "2026", title: "GODMODE Cloud Harness — 100% Zero-Local-Compute Verified" },
  { year: "2025", title: "12,000+ Beneficiaries Empowered — Tribeni Minati Foundation NGO" },
  { year: "2025", title: "GitReverse Prompt Vault — 500+ Elite Repos Deconstructed" },
  { year: "2024", title: "OmniRoute Unified Gateway — Sub-Second Multi-Model Fallback" },
  { year: "2024", title: "Creative WebGL & Awwwards Special Mentions for Interaction Craft" },
];

const principles = [
  {
    n: "01",
    title: "Grounding is non-negotiable",
    body: "No hallucinations, no invented metrics. Every architectural claim, statutory certificate, and data point is traceable back to verified facts and deterministic logs.",
  },
  {
    n: "02",
    title: "Warmth is a feature",
    body: "Cold interfaces get used; warm ones get loved. Every palette I ship has a pulse — museum editorial bone, umber, and copper warmth — never sterile template black.",
  },
  {
    n: "03",
    title: "Code and aesthetic are one discipline",
    body: "The best engineering decisions happen when architectural rigor meets typographic precision. I build systems where high-scale backend logic and 60fps micro-interactions coexist seamlessly.",
  },
];

export const AboutPage: React.FC = () => {
  return (
    <PortfolioShell>
      {/* hero */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-16 pt-32 md:px-10 md:pt-44">
        <FadeUp y={12} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]">
          <span>About</span>
          <span>{profile.location}</span>
        </FadeUp>

        <h1 className="mt-6 font-display text-[13.5vw] leading-[0.98] text-ink md:text-[9.5rem]">
          <WordReveal text="The person behind" delay={0.1} />
          <br />
          <WordReveal text="the *systems.*" delay={0.35} />
        </h1>
      </section>

      {/* portrait + intro */}
      <section className="mx-auto grid w-full max-w-[100rem] gap-10 px-5 pb-20 md:grid-cols-[5fr_7fr] md:gap-16 md:px-10">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl bg-sand shadow-sm">
            <div className="relative aspect-[3/4]">
              <img
                src="/avatar.jpg"
                alt={`${profile.firstName} ${profile.lastName}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="absolute bottom-4 left-4 rounded-full bg-umber/70 px-3 py-1 font-label text-[9px] uppercase tracking-[0.22em] text-bone backdrop-blur-sm">
              {profile.firstName} ({profile.nickname}) — 7+ years of engineering
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col justify-center gap-8">
          <FadeUp delay={0.1}>
            <p className="font-display text-3xl leading-snug text-ink md:text-[2.6rem]">
              I&apos;m {profile.firstName} — an {profile.role.toLowerCase()} based in{" "}
              {profile.location}. I engineer cloud AI systems, author open-source harnesses, and direct social impact via the{" "}
              <span className="italic text-copper">Tribeni Minati Foundation</span>.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink/70 md:text-base">
              My engineering sits at the junction of distributed cloud infrastructure and meticulous interface craft. I build multi-model agent systems that operate without local GPU constraints, deploy low-latency routers across Anthropic and NVIDIA NIM, and craft bespoke WebGL shaders with geodesic ray-tracing.
            </p>
          </FadeUp>
          <FadeUp delay={0.28}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink/70 md:text-base">
              As founder of the Tribeni Minati Foundation NGO, I lead initiatives providing rural healthcare access, education, and audited non-profit transparency throughout West Bengal. Every system I build is grounded in verifiable provenance, zero fluff, and enduring social purpose.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* orbit + principles bento */}
      <section className="border-y border-ink/10 bg-bone-deep px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[100rem]">
          <FadeUp>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Core philosophy</p>
            <h2 className="mt-3 font-display text-5xl leading-none text-ink md:text-7xl">
              Three <span className="italic text-copper">invariants</span>
            </h2>
          </FadeUp>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* orbit card */}
            <FadeUp className="lg:row-span-3">
              <div className="relative flex h-full min-h-[26rem] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-linen">
                <span className="z-10 rounded-full border border-copper/50 bg-bone px-6 py-2.5 font-label text-[10px] uppercase tracking-[0.25em] text-copper shadow-sm">
                  {profile.initials} — Stack
                </span>
                <div className="absolute inset-0">
                  <OrbitingCircles radius={110} duration={20}>
                    {["TypeScript", "Python", "FastAPI", "React"].map((t) => (
                      <span key={t} className="rounded-full border border-ink/12 bg-bone px-3 py-1 font-label text-[9px] uppercase tracking-[0.15em] text-ink/70 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </OrbitingCircles>
                  <OrbitingCircles radius={165} duration={32} reverse>
                    {["WebGL", "Three.js", "GSAP", "Tailwind", "Postgres"].map((t) => (
                      <span key={t} className="rounded-full border border-ink/12 bg-sand/70 px-3 py-1 font-label text-[9px] uppercase tracking-[0.15em] text-ink/70 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </OrbitingCircles>
                </div>
              </div>
            </FadeUp>

            {principles.map((p, i) => (
              <FadeUp key={p.n} delay={0.06 * (i + 1)}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-linen p-7 transition-colors duration-500 hover:border-copper/40 md:p-9">
                  <span className="font-label text-[10px] tracking-[0.25em] text-taupe transition-colors group-hover:text-copper">
                    ({p.n})
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-ink md:text-4xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe md:text-[15px]">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* experience + recognition */}
      <section className="mx-auto grid w-full max-w-[100rem] gap-16 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
        <div>
          <FadeUp>
            <h2 className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Track record</h2>
          </FadeUp>
          <div className="mt-8">
            {experience.map((e, i) => (
              <FadeUp key={e.role} delay={i * 0.05}>
                <div className="group border-t border-ink/12 py-6 last:border-b">
                  <p className="font-label text-[9px] uppercase tracking-[0.22em] text-taupe">{e.years}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-copper md:text-3xl">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm text-taupe">{e.place}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <div>
          <FadeUp>
            <h2 className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Recognition & Impact</h2>
          </FadeUp>
          <div className="mt-8">
            {recognition.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.05}>
                <div className="group flex items-baseline justify-between gap-6 border-t border-ink/12 py-5 last:border-b">
                  <h3 className="text-[15px] leading-snug text-ink transition-colors group-hover:text-copper md:text-base">
                    {r.title}
                  </h3>
                  <span className="shrink-0 font-label text-[9px] uppercase tracking-[0.2em] text-taupe">
                    {r.year}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PortfolioShell>
  );
};

export default AboutPage;
