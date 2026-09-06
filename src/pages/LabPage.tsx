import React, { useState } from "react";
import Link from "../components/portfolio/Link";
import { PortfolioShell } from "../components/portfolio/shell";
import { WordReveal, FadeUp } from "../components/portfolio/reveal";
import { ScrambleText } from "../components/portfolio/technicals";
import { PixelMarquee } from "../components/portfolio/interactive";
import { labItems, labCategories, type LabCategory } from "../lib/lab-items";

// Direct Shader imports for Live Lab Playground
import { WebGLShaderPage } from "./showcase/WebGLShaderPage";
import { NeuralNoisePage } from "./showcase/NeuralNoisePage";
import { NeonOrbsPage } from "./showcase/NeonOrbsPage";
import { AuroraBackgroundPage } from "./showcase/AuroraBackgroundPage";
import { LiquidMetalPage } from "./showcase/LiquidMetalPage";
import { PrismHeroPage } from "./showcase/PrismHeroPage";
import { DancingLettersPage } from "./showcase/DancingLettersPage";
import { SpliteHeroPage } from "./showcase/SpliteHeroPage";

const catColor: Record<LabCategory, string> = {
  "WebGL & Shaders": "bg-umber text-bone",
  "Heroes & Landing": "bg-copper text-linen",
  "Scroll & Motion": "bg-sand text-ink",
  "Type & Micro-interaction": "bg-ink text-bone",
  "Atmosphere & Gradient": "bg-copper/20 text-copper-deep",
  "Product UI": "bg-taupe/25 text-ink",
};

const interactiveShaders = [
  { id: "web-gl-shader", label: "WebGL Shader", component: WebGLShaderPage },
  { id: "neural-noise", label: "Neural Noise", component: NeuralNoisePage },
  { id: "neon-orbs", label: "Neon Orbs", component: NeonOrbsPage },
  { id: "aurora-background", label: "Aurora Background", component: AuroraBackgroundPage },
  { id: "liquid-metal-hero", label: "Liquid Metal", component: LiquidMetalPage },
  { id: "prism-hero", label: "Prism Refraction", component: PrismHeroPage },
  { id: "dancing-letters", label: "Dancing Letters", component: DancingLettersPage },
  { id: "splite", label: "Splite 3D", component: SpliteHeroPage },
];

export const LabPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<LabCategory | "All">("All");
  const [activeShaderId, setActiveShaderId] = useState<string>("neural-noise");

  const filteredItems = selectedCategory === "All"
    ? labItems
    : labItems.filter((item) => item.category === selectedCategory);

  const ActiveComponent = interactiveShaders.find((s) => s.id === activeShaderId)?.component || NeuralNoisePage;

  return (
    <PortfolioShell>
      {/* hero */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-12 pt-32 md:px-10 md:pt-44">
        <FadeUp y={12} className="flex items-center justify-between font-label text-[9px] uppercase tracking-[0.3em] text-taupe md:text-[10px]">
          <ScrambleText text="The Lab" />
          <span>{String(labItems.length)} experiments — open source of taste</span>
        </FadeUp>

        <h1 className="mt-6 font-display text-[14vw] leading-[0.95] text-ink md:text-[10rem]">
          <WordReveal text="The *Lab.*" delay={0.1} />
        </h1>

        <FadeUp delay={0.5} className="mt-8 max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg">
          Every experiment below is <span className="italic text-copper">live</span> —
          integrated into this workspace and running on its own dedicated route. Shaders restored
          verbatim, scroll choreography pinned frame-perfect, typography that dances.
          Select any interactive shader to live-mount it directly in the viewport below.
        </FadeUp>

        {/* category filters */}
        <FadeUp delay={0.6} className="mt-10 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-4 py-2 font-label text-[9px] uppercase tracking-[0.18em] transition-colors ${
              selectedCategory === "All"
                ? "bg-copper text-linen"
                : "border border-ink/15 bg-bone text-ink hover:border-copper"
            }`}
          >
            All — {labItems.length}
          </button>
          {labCategories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`rounded-full px-4 py-2 font-label text-[9px] uppercase tracking-[0.18em] transition-colors ${
                selectedCategory === c
                  ? "bg-copper text-linen"
                  : `border border-ink/15 ${catColor[c]} hover:opacity-80`
              }`}
            >
              {c} — {labItems.filter((i) => i.category === c).length}
            </button>
          ))}
        </FadeUp>
      </section>

      {/* Live Interactive Shader Workbench Mount */}
      <section className="mx-auto w-full max-w-[100rem] px-5 py-8 md:px-10">
        <div className="rounded-2xl border border-ink/15 bg-bone-deep p-4 md:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-copper">
                Live Shader Workbench
              </p>
              <h3 className="font-display text-2xl text-ink">Mount One Effect at a Time</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interactiveShaders.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveShaderId(s.id)}
                  className={`rounded-full px-3.5 py-1.5 font-label text-[9px] uppercase tracking-[0.18em] transition-all ${
                    activeShaderId === s.id
                      ? "bg-copper text-linen shadow-sm scale-105"
                      : "bg-linen text-ink/70 hover:bg-sand"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-4 h-[550px] w-full overflow-hidden rounded-xl border border-ink/10 bg-black">
            <ActiveComponent />
          </div>
        </div>
      </section>

      <PixelMarquee
        items={[
          "neural noise",
          "geodesic tracers",
          "scroll lock",
          "magnetic pulls",
          "mask reveals",
          "webgl fields",
          "dancing type",
        ]}
      />

      {/* grid */}
      <section className="mx-auto w-full max-w-[100rem] px-5 pb-24 md:px-10 md:pb-36">
        <div className="mt-6 grid gap-x-8 gap-y-14 md:mt-10 md:grid-cols-2 md:gap-y-20 xl:grid-cols-3">
          {filteredItems.map((item, i) => (
            <FadeUp key={item.slug} delay={0.03 * (i % 3)} className="scroll-mt-28" y={20}>
              <div id={item.slug} className="group scroll-mt-28">
                <Link
                  href={`/${item.slug}`}
                  className="block overflow-hidden rounded-2xl border border-ink/10 bg-linen transition-all duration-500 hover:border-copper/60 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                    {item.thumb ? (
                      <img
                        src={item.thumb}
                        alt={`${item.title} preview`}
                        loading={i < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-umber">
                        <div
                          className="absolute inset-0 opacity-60"
                          style={{
                            backgroundImage:
                              "radial-gradient(70% 60% at 75% 20%, rgba(192,90,46,0.45), transparent 60%), radial-gradient(50% 40% at 15% 85%, rgba(192,90,46,0.25), transparent 60%)",
                          }}
                        />
                        <span className="relative font-display text-6xl italic text-bone/90">
                          {item.title.slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 font-label text-[8px] uppercase tracking-[0.18em] ${catColor[item.category]}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-3xl leading-tight text-ink transition-colors duration-300 group-hover:text-copper">
                        {item.title}
                      </h2>
                      <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-linen">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-taupe">{item.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 px-2.5 py-1 font-label text-[8px] uppercase tracking-[0.16em] text-ink/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
};

export default LabPage;
