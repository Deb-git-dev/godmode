import React from "react";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp } from "../components/portfolio/reveal";
import { ProjectCard } from "../components/portfolio/project-card";
import { HoverPreviewList } from "../components/portfolio/interactive";
import { ScrambleText } from "../components/portfolio/technicals";
import { projects } from "../lib/projects";
import { profile } from "../lib/profile";

export const WorkPage: React.FC = () => {
  return (
    <PortfolioShell>
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-10 pt-32 md:px-10 md:pt-44">
        <FadeUp y={12} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]">
          <span>Index</span>
          <span>
            {String(projects.length).padStart(2, "0")} projects — 2024 → 2026
          </span>
        </FadeUp>

        <h1 className="mt-6 font-display text-[16vw] leading-[0.95] text-ink md:text-[11rem]">
          <WordReveal text="The *Work.*" delay={0.1} />
        </h1>

        <FadeUp delay={0.5} className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          Cloud systems architecture, social empowerment platforms, and creative development by {profile.firstName} {profile.lastName} — engineered for resilient performance and museum-grade tactile craft.
        </FadeUp>
      </section>

      {/* editorial index list */}
      <section className="mx-auto w-full max-w-[100rem] px-5 md:px-10">
        <FadeUp y={14} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe">
          <ScrambleText text="Table of contents" />
          <span className="hidden md:block">Hover to preview — click to open</span>
          <span className="md:hidden">Tap to open</span>
        </FadeUp>
        <FadeUp delay={0.08} className="mt-6">
          <HoverPreviewList items={projects} />
        </FadeUp>
      </section>

      <section className="mx-auto w-full max-w-[100rem] px-5 pb-24 md:px-10 md:pb-36">
        <div className="mt-10 grid gap-x-8 gap-y-16 md:mt-16 md:grid-cols-2 md:gap-y-28">
          {projects.map((p, i) => (
            <FadeUp
              key={p.slug}
              delay={0.05 * (i % 2)}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={p}
                ratio={i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                priority={i === 0}
              />
            </FadeUp>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
};

export default WorkPage;
