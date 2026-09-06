import React from "react";
import Link from "../components/portfolio/Link";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp, OrbitBadge, HeroChipLine } from "../components/portfolio/reveal";
import { ProjectCard } from "../components/portfolio/project-card";
import { ScrambleText, PixelDissolve } from "../components/portfolio/technicals";
import { TestimonialSlides, PixelMarquee } from "../components/portfolio/interactive";
import { AnimatedMarquee } from "../components/ui/marquee-helper";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { OrbitingCircles } from "../components/ui/orbiting-circles";
import BlackHoleCanvas from "../components/ui/black-hole";
import HomeHeroLandingScrollAnimation from "../components/ui/home-hero-landing-scroll-animation";
import { profile } from "../lib/profile";
import { projects } from "../lib/projects";
import { labItems } from "../lib/lab-items";
import { assetUrl } from "../lib/assets";
import debPhoto from "../assets/deb.jpg";

const featured = projects.filter((p) => p.featured).slice(0, 4);

const services = [
  {
    n: "01",
    name: "Autonomous AI Architecture",
    desc: "Multi-model cloud routing, agent harnesses, deterministic audit logging, and resilient failover pipelines.",
  },
  {
    n: "02",
    name: "Full-Stack Platforms",
    desc: "High-integrity web platforms, statutory non-profit portals, and low-latency API gateways built to last.",
  },
  {
    n: "03",
    name: "Creative Development",
    desc: "Custom WebGL shaders, Three.js geodesic ray-tracing, and GSAP scroll choreography that ship pixel-true and fast.",
  },
  {
    n: "04",
    name: "UI/UX & Design Systems",
    desc: "Museum Editorial typography, anti-slop design token governance, and accessible tactile micro-interactions.",
  },
];

const tools = ["TypeScript", "React", "Python", "FastAPI", "WebGL", "Three.js", "GSAP", "Tailwind"];

function BlackHoleHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-bone">
      {/* Geodesic Ray-traced Black Hole Canvas */}
      <div className="absolute inset-0 z-0">
        <BlackHoleCanvas />
      </div>

      {/* Vignette and gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#050506] via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,6,0.85)_100%)]" />

      {/* Top bar overlay */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-bone/60">
          Geodesic Ray Tracer · 460 Steps
        </span>
        <span className="flex items-center gap-2 rounded-full border border-bone/20 bg-black/40 px-3 py-1 font-label text-[9px] uppercase tracking-[0.25em] text-copper backdrop-blur-md">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-copper" />
          </span>
          Live Shader
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-end pb-20 text-center px-4">
        <FadeUp y={16} className="max-w-4xl">
          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-copper md:text-[11px]">
            {profile.firstName} {profile.lastName} — Portfolio 2026
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-bone sm:text-7xl md:text-8xl lg:text-9xl">
            Architecting <span className="italic text-copper">Intelligence</span> & Craft.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-bone/75 sm:text-base md:text-lg">
            {profile.tagline}
          </p>
        </FadeUp>

        <FadeUp delay={0.2} y={16} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#editorial-hero"
            className="inline-flex items-center gap-3 rounded-full bg-copper px-8 py-3.5 font-label text-[11px] uppercase tracking-[0.25em] text-linen transition-all duration-300 hover:bg-bone hover:text-ink hover:scale-105"
          >
            Enter Practice ↓
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 rounded-full border border-bone/25 bg-white/5 px-8 py-3.5 font-label text-[11px] uppercase tracking-[0.25em] text-bone backdrop-blur-sm transition-all duration-300 hover:border-copper hover:text-copper"
          >
            Selected Work ({String(projects.length).padStart(2, "0")})
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

function ScrollHeroPinnedSection() {
  return (
    <section className="relative w-full border-t border-ink/10 bg-bone">
      <div className="pt-8 pb-4 text-center">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">
          Interactive Scroll Choreography
        </p>
      </div>
      <HomeHeroLandingScrollAnimation />
    </section>
  );
}

function HeroEditorialSection() {
  return (
    <section id="editorial-hero" className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-8 pt-24 md:px-10 md:pt-32">
      {/* warm radial wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 40% at 82% 12%, rgba(192,90,46,0.13), transparent 62%), radial-gradient(45% 35% at 6% 88%, rgba(228,219,200,0.9), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* corner metadata */}
      <FadeUp className="relative flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]" y={12}>
        <ScrambleText text="Portfolio — 2026 Edition" />
        <span className="hidden md:block">Autonomous AI · Cloud Systems · WebGL</span>
        <ScrambleText text={`Based in ${profile.city} (IN)`} />
      </FadeUp>

      {/* headline */}
      <div className="relative mt-10 md:mt-0">
        <h1 className="font-display text-[15.5vw] leading-[0.98] tracking-[-0.01em] md:text-[9.8rem]">
          <WordReveal text="Systems *that* make" delay={0.15} className="text-ink" />
          <br />
          <HeroChipLine chipSrc={assetUrl("/work/auric.png")} />
        </h1>

        <FadeUp delay={1.0} className="mt-8 flex max-w-3xl flex-col gap-4 md:mt-10">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">
            {profile.tagline} Currently designing and orchestrating high-scale cloud platforms and creative tools from{" "}
            <span className="text-copper">{profile.city}</span> to global teams.
          </p>
        </FadeUp>
      </div>

      {/* bottom row */}
      <div className="relative mt-12 flex items-end justify-between">
        <FadeUp delay={1.15} y={16} className="flex flex-col gap-3 font-label text-[9px] uppercase tracking-[0.28em] text-taupe md:text-[10px]">
          <span className="flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-copper" />
            </span>
            {profile.availability} — {profile.availabilityWindow}
          </span>
          <span>Scroll to explore ↓</span>
        </FadeUp>
        <FadeUp delay={1.2} y={16} className="hidden md:block">
          <OrbitBadge href="#work" label="EXPLORE" />
        </FadeUp>
      </div>
    </section>
  );
}

function MarqueeBand() {
  const items = [
    "Autonomous AI Systems",
    "Cloud Architecture",
    "WebGL Shaders",
    "Full-Stack Engineering",
    "Tribeni Minati Foundation",
    "Museum Editorial Design",
  ];
  return (
    <section className="border-y border-ink/10 bg-copper py-4 text-linen" aria-hidden="true">
      <AnimatedMarquee speed={30}>
        {items.map((t) => (
          <span key={t} className="mx-8 flex items-center gap-8 font-display text-2xl italic md:text-3xl">
            {t}
            <span className="inline-block size-1.5 rounded-full bg-linen/70" />
          </span>
        ))}
      </AnimatedMarquee>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-[100rem] scroll-mt-24 px-5 py-20 md:px-10 md:py-32">
      <FadeUp className="flex items-end justify-between">
        <div>
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Selected Work</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-ink md:text-7xl">
            Featured <span className="italic text-copper">architectures</span>
          </h2>
        </div>
        <Link
          href="/work"
          className="group hidden items-center gap-2 font-label text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-copper md:flex"
        >
          All work — {String(projects.length).padStart(2, "0")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </FadeUp>

      <div className="mt-12 grid gap-x-8 gap-y-16 md:mt-16 md:grid-cols-2 md:gap-y-24">
        <FadeUp className="md:col-span-2">
          <ProjectCard project={featured[0]} ratio="aspect-[16/9]" priority />
        </FadeUp>
        <FadeUp delay={0.08}>
          <ProjectCard project={featured[1]} ratio="aspect-[4/3]" />
        </FadeUp>
        <FadeUp delay={0.16}>
          <ProjectCard project={featured[2]} ratio="aspect-[4/3]" />
        </FadeUp>
        <FadeUp className="md:col-span-2">
          <ProjectCard project={featured[3]} ratio="aspect-[16/9]" />
        </FadeUp>
      </div>

      <FadeUp className="mt-14 text-center md:hidden">
        <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-label text-[11px] uppercase tracking-[0.22em] text-ink">
          All work
        </Link>
      </FadeUp>
    </section>
  );
}

function FeaturedCaseTilt() {
  const godmode = projects[0];
  return (
    <ContainerScroll
      className="bg-bone-deep!"
      titleClassName="font-display! font-normal! text-ink! tracking-tight"
      frameClassName="border-copper-deep! bg-umber!"
      titleComponent={
        <span>
          Autonomous AI <span className="italic text-copper">Orchestrator</span>
        </span>
      }
    >
      <Link href={`/work/${godmode.slug}`} className="group relative block h-full w-full">
        <img
          src={godmode.cover}
          alt={`${godmode.title} case study`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-umber/70 px-4 py-2 font-label text-[9px] uppercase tracking-[0.25em] text-bone backdrop-blur-sm md:bottom-6 md:left-6">
          Explore Case — {godmode.title}
        </span>
      </Link>
    </ContainerScroll>
  );
}

function Services() {
  return (
    <section className="mx-auto w-full max-w-[100rem] px-5 py-20 md:px-10 md:py-32">
      <FadeUp>
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">Capabilities</p>
        <h2 className="mt-3 font-display text-5xl leading-none text-ink md:text-7xl">
          Engineering, <span className="italic text-copper">end to end</span>
        </h2>
      </FadeUp>

      <div className="mt-12 md:mt-16">
        {services.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.05}>
            <div className="group relative grid cursor-default grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-ink/12 py-8 transition-colors duration-500 last:border-b hover:bg-sand/40 md:grid-cols-[6rem_1fr_1.2fr_auto] md:items-center md:gap-x-10 md:py-10">
              <span className="font-label text-[10px] tracking-[0.25em] text-taupe transition-colors group-hover:text-copper">
                ({s.n})
              </span>
              <h3 className="font-display text-3xl text-ink transition-all duration-500 group-hover:translate-x-2 group-hover:text-copper md:text-5xl">
                {s.name}
              </h3>
              <p className="col-span-2 max-w-xl text-sm leading-relaxed text-taupe md:col-span-1 md:text-[15px]">
                {s.desc}
              </p>
              <span className="hidden size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-500 group-hover:border-copper group-hover:bg-copper group-hover:text-linen md:flex">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="border-y border-ink/10 bg-bone-deep px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[100rem]">
        <FadeUp>
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">About</p>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {/* portrait card */}
          <FadeUp className="md:row-span-2">
            <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-2xl bg-sand">
              <img
                src={debPhoto}
                alt={`${profile.firstName} ${profile.lastName}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-umber/70 px-3 py-1 font-label text-[9px] uppercase tracking-[0.22em] text-bone backdrop-blur-sm">
                {profile.firstName} ({profile.nickname}) — {profile.role}
              </span>
            </div>
          </FadeUp>

          {/* statement card */}
          <FadeUp delay={0.08} className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-linen p-7 md:p-10">
              <p className="font-display text-2xl leading-snug text-ink md:text-[2.1rem]">
                I&apos;m an AI systems architect and full-stack engineer dedicated to{" "}
                <span className="italic text-copper">grounded truth</span> and aesthetic rigor. Over
                seven years building autonomous cloud infrastructure, social impact platforms with
                Tribeni Minati Foundation, and precision WebGL experiences.
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex w-fit items-center gap-2 font-label text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-copper"
              >
                More about me & principles
                <span className="block h-px w-8 bg-copper transition-all duration-300 group-hover:w-12" />
              </Link>
            </div>
          </FadeUp>

          {/* stats card */}
          <FadeUp delay={0.14}>
            <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10">
              {profile.stats.map((s) => (
                <div key={s.label} className="flex flex-col justify-between bg-linen p-6">
                  <span className="font-display text-4xl text-ink md:text-5xl">{s.value}</span>
                  <span className="mt-4 font-label text-[9px] uppercase tracking-[0.2em] text-taupe">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* orbiting tools card */}
          <FadeUp delay={0.2} className="md:col-span-2">
            <div className="relative flex h-full min-h-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-linen p-6">
              <span className="rounded-full border border-copper/50 bg-bone px-5 py-2 font-label text-[10px] uppercase tracking-[0.25em] text-copper">
                Daily stack
              </span>
              <div className="absolute inset-0">
                <OrbitingCircles radius={110} duration={22} reverse>
                  {tools.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-ink/12 bg-bone px-3 py-1 font-label text-[9px] uppercase tracking-[0.15em] text-ink/70 shadow-sm">
                      {t}
                    </span>
                  ))}
                </OrbitingCircles>
                <OrbitingCircles radius={160} duration={30}>
                  {tools.slice(4).map((t) => (
                    <span key={t} className="rounded-full border border-ink/12 bg-sand/70 px-3 py-1 font-label text-[9px] uppercase tracking-[0.15em] text-ink/70 shadow-sm">
                      {t}
                    </span>
                  ))}
                </OrbitingCircles>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function LabTeaser() {
  const picks = labItems.filter((i) => i.thumb).slice(0, 6);
  return (
    <section className="mx-auto w-full max-w-[100rem] px-5 py-20 md:px-10 md:py-32">
      <FadeUp className="flex items-end justify-between gap-6">
        <div>
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">The Lab</p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            <span className="italic text-copper">{String(labItems.length)} experiments</span> in
            motion & shaders
          </h2>
        </div>
        <Link
          href="/lab"
          className="group hidden shrink-0 items-center gap-2 font-label text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-copper md:flex"
        >
          Enter the lab
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </FadeUp>

      {/* horizontal rail */}
      <FadeUp delay={0.1}>
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:mt-16 [scrollbar-width:thin]">
          {picks.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="group relative w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-ink/10 bg-linen md:w-72"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={item.thumb ?? ""}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-display text-xl leading-tight text-ink group-hover:text-copper">
                    {item.title}
                  </p>
                  <p className="mt-1 font-label text-[8px] uppercase tracking-[0.2em] text-taupe">
                    {item.category}
                  </p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-linen">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
          {/* terminal card */}
          <Link
            href="/lab"
            className="group flex w-64 shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-umber p-6 text-bone md:w-72"
          >
            <p className="font-display text-3xl leading-tight">
              All <span className="italic text-copper">{labItems.length}</span> experiments
            </p>
            <div className="flex items-center justify-between">
              <p className="font-label text-[9px] uppercase tracking-[0.22em] text-bone/50">
                WebGL · Scroll · Type · UI
              </p>
              <span className="flex size-9 items-center justify-center rounded-full bg-copper text-linen transition-transform duration-300 group-hover:rotate-45">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

export const PortfolioHomePage: React.FC = () => {
  return (
    <PortfolioShell>
      <BlackHoleHeroSection />
      <ScrollHeroPinnedSection />
      <HeroEditorialSection />
      <MarqueeBand />
      <SelectedWork />
      <FeaturedCaseTilt />
      <Services />
      <PixelDissolve />
      <TestimonialSlides />
      <AboutTeaser />
      <LabTeaser />
      <PixelMarquee
        items={[
          "Autonomous AI",
          "Cloud Orchestration",
          "Geodesic Ray Tracers",
          "Tribeni Minati Foundation",
          "Museum Editorial Taste",
          "28 Live Modules",
        ]}
      />
    </PortfolioShell>
  );
};

export default PortfolioHomePage;
