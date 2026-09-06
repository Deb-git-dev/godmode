import React from "react";
import Link from "../components/portfolio/Link";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp, LineGrow } from "../components/portfolio/reveal";
import { ProjectCard } from "../components/portfolio/project-card";
import { ParallaxFrame, NextCasePills } from "../components/portfolio/technicals";
import { projects, getProject, nextProject } from "../lib/projects";

export const WorkCaseStudyPage: React.FC<{ slug: string }> = ({ slug }) => {
  const project = getProject(slug) || projects[0];
  const next = nextProject(project);

  return (
    <PortfolioShell>
      {/* hero */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <FadeUp y={12} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]">
          <Link href="/work" className="transition-colors hover:text-copper">
            ← All work
          </Link>
          <span>
            Case {project.index} / {String(projects.length).padStart(2, "0")}
          </span>
        </FadeUp>

        <h1 className="mt-6 font-display text-[14vw] leading-[0.95] text-ink md:text-[10rem]">
          <WordReveal text={project.title} delay={0.1} />
        </h1>

        <FadeUp delay={0.45} className="mt-6 max-w-3xl font-display text-2xl leading-snug text-ink/80 md:text-4xl">
          {project.subtitle}
        </FadeUp>
      </section>

      <FadeUp delay={0.2} className="px-5 md:px-10">
        <ParallaxFrame
          src={project.cover}
          alt={`${project.title} — hero visual`}
          ratio="aspect-[16/9]"
          className="mx-auto max-w-[100rem]"
          priority
        >
          <span className="absolute bottom-4 left-4 rounded-full bg-umber/60 px-4 py-2 font-label text-[9px] uppercase tracking-[0.25em] text-bone backdrop-blur-sm md:bottom-6 md:left-6">
            {project.client} — {project.year}
          </span>
        </ParallaxFrame>
      </FadeUp>

      {/* meta grid */}
      <section className="mx-auto w-full max-w-[100rem] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 border-y border-ink/10 py-8 md:grid-cols-4 md:py-10">
          {[
            { label: "Client", value: project.client },
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
            { label: "Stack", value: project.stack.join(", ") },
          ].map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.06}>
              <p className="font-label text-[9px] uppercase tracking-[0.28em] text-copper">{m.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink md:text-[15px]">{m.value}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* narrative */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-10">
            <FadeUp>
              <h2 className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">The challenge</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80 md:text-base">{project.challenge}</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">The approach</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80 md:text-base">{project.approach}</p>
            </FadeUp>
          </div>
          <div className="flex flex-col gap-10">
            <FadeUp delay={0.1}>
              <h2 className="font-label text-[10px] uppercase tracking-[0.3em] text-copper">The outcome</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80 md:text-base">{project.outcome}</p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="rounded-2xl border border-ink/10 bg-linen p-7 md:p-8">
                <p className="font-label text-[9px] uppercase tracking-[0.28em] text-taupe">In one line</p>
                <p className="mt-3 font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
                  {project.summary}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* gallery */}
      {project.wide && (
        <section className="px-5 pb-10 md:px-10">
          <FadeUp>
            <ParallaxFrame
              src={project.wide}
              alt={`${project.title} — environment`}
              ratio="aspect-[21/9]"
              className="mx-auto max-w-[100rem]"
            />
          </FadeUp>
        </section>
      )}

      {/* next project */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-24 pt-10 md:px-10 md:pb-36">
        <LineGrow className="mb-12" />
        <FadeUp>
          <NextCasePills current={project} />
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mt-14 font-label text-[10px] uppercase tracking-[0.3em] text-taupe">
            Up next
          </p>
        </FadeUp>
        <div className="mt-8">
          <ProjectCard project={next} ratio="aspect-[16/9]" />
        </div>
      </section>
    </PortfolioShell>
  );
};

export default WorkCaseStudyPage;
