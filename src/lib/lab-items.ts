/**
 * Catalog of all 28 integrated components (from the user's paste + the 26
 * 21st.dev URLs). Each entry links to its dedicated demo route which already
 * exists under src/app/<slug>/page.tsx.
 */
export type LabCategory =
  | "WebGL & Shaders"
  | "Heroes & Landing"
  | "Scroll & Motion"
  | "Type & Micro-interaction"
  | "Atmosphere & Gradient"
  | "Product UI";

export interface LabItem {
  slug: string;
  title: string;
  blurb: string;
  category: LabCategory;
  tech: string[];
  thumb: string | null;
}

export const labCategories: LabCategory[] = [
  "WebGL & Shaders",
  "Heroes & Landing",
  "Scroll & Motion",
  "Type & Micro-interaction",
  "Atmosphere & Gradient",
  "Product UI",
];

export const labItems: LabItem[] = [
  {
    slug: "black-hole",
    title: "Black Hole",
    blurb: "Geodesic ray-traced black hole with accretion disk, Doppler beaming and photon ring.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: null,
  },
  {
    slug: "hero-scroll",
    title: "Hero Scroll Sequence",
    blurb: "GSAP ScrollTrigger pinned hero — tiles fly together into a Swiper gallery.",
    category: "Scroll & Motion",
    tech: ["GSAP", "Swiper"],
    thumb: null,
  },
  {
    slug: "blackhole-hero-section",
    title: "Blackhole Hero",
    blurb: "323-line original shader: Kepler-sheared gas disk bent over a lensed shadow.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: "/lab/blackhole-hero-section0.png",
  },
  {
    slug: "neural-noise",
    title: "Neural Noise",
    blurb: "15-octave sine field breathing behind a neuro-shape mask.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: "/lab/neural-noise0.png",
  },
  {
    slug: "web-gl-shader",
    title: "WebGL Shader Canvas",
    blurb: "Raw fragment-shader canvas with pointer-reactive uniforms.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: "/lab/web-gl-shader0.png",
  },
  {
    slug: "neon-orbs",
    title: "Neon Orbs",
    blurb: "Glowing orbs drifting in layered depth fields.",
    category: "WebGL & Shaders",
    tech: ["Canvas", "motion"],
    thumb: "/lab/neon-orbs0.png",
  },
  {
    slug: "velaris",
    title: "Velaris Gradient",
    blurb: "Simplex-noise mesh gradient with film grain — restored verbatim.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: "/lab/velaris0.png",
  },
  {
    slug: "liquid-metal-hero",
    title: "Liquid Metal",
    blurb: "Molten chrome surface with original liquid-metal fragment program.",
    category: "WebGL & Shaders",
    tech: ["WebGL", "GLSL"],
    thumb: "/lab/liquid-metal-hero0.png",
  },
  {
    slug: "splite",
    title: "Splite 3D Scene",
    blurb: "Original Spline robot scene via CDN runtime + webpackIgnore import.",
    category: "WebGL & Shaders",
    tech: ["Spline", "Three.js"],
    thumb: null,
  },
  {
    slug: "prism-hero",
    title: "Prism Hero",
    blurb: "Prismatic refraction hero with split-spectrum typography.",
    category: "Heroes & Landing",
    tech: ["WebGL", "motion"],
    thumb: "/lab/prism-hero0.png",
  },
  {
    slug: "reuno-hero",
    title: "Reuno Hero",
    blurb: "Editorial landing hero from Reuno with oversized type rhythm.",
    category: "Heroes & Landing",
    tech: ["motion", "CSS"],
    thumb: null,
  },
  {
    slug: "prisma-hero",
    title: "Prisma Hero",
    blurb: "Video-backed product hero with original cloudfront footage.",
    category: "Heroes & Landing",
    tech: ["Video", "CSS"],
    thumb: "/lab/prisma-hero0.png",
  },
  {
    slug: "hero-3",
    title: "Animated Marquee Hero",
    blurb: "Counter-scrolling marquee rows framing a bold product claim.",
    category: "Heroes & Landing",
    tech: ["CSS", "motion"],
    thumb: "/lab/hero-30.png",
  },
  {
    slug: "saa-s-template",
    title: "SaaS Template",
    blurb: "Full SaaS landing template — pricing, features, social proof.",
    category: "Heroes & Landing",
    tech: ["Tailwind", "motion"],
    thumb: "/lab/saa-s-template0.png",
  },
  {
    slug: "responsive-hero-banner",
    title: "Responsive Hero Banner",
    blurb: "Adaptive hero with art-directed crops across breakpoints.",
    category: "Heroes & Landing",
    tech: ["Tailwind", "Image"],
    thumb: "/lab/responsive-hero-banner0.png",
  },
  {
    slug: "vetra",
    title: "Vetra Landing",
    blurb: "Modern SaaS landing with disciplined grid and warm accents.",
    category: "Heroes & Landing",
    tech: ["Tailwind", "motion"],
    thumb: null,
  },
  {
    slug: "kintaro-awwwards-portfolio",
    title: "Kintaro Portfolio",
    blurb: "Awwwards-style portfolio with giant typography and rail nav.",
    category: "Heroes & Landing",
    tech: ["GSAP", "CSS"],
    thumb: "/lab/kintaro.jpg",
  },
  {
    slug: "container-scroll-animation",
    title: "Container Scroll",
    blurb: "3D-tilted frame rotating upright as you scroll — Aceternity.",
    category: "Scroll & Motion",
    tech: ["motion", "useScroll"],
    thumb: "/lab/container-scroll-animation0.png",
  },
  {
    slug: "scroll-expansion-hero",
    title: "Scroll Expansion Hero",
    blurb: "Hero panel expanding to full-bleed as scroll progresses.",
    category: "Scroll & Motion",
    tech: ["motion", "useScroll"],
    thumb: "/lab/scroll-expansion-hero0.png",
  },
  {
    slug: "scroll-locked-video-hero",
    title: "Scroll-Locked Video Hero",
    blurb: "Pinned video scrubbed by scroll position — original metro footage.",
    category: "Scroll & Motion",
    tech: ["Video", "motion"],
    thumb: "/lab/scroll-locked-video-hero0.png",
  },
  {
    slug: "dancing-letters",
    title: "Dancing Letters",
    blurb: "Per-letter spring wave — the text literally dances.",
    category: "Type & Micro-interaction",
    tech: ["motion"],
    thumb: "/lab/dancing-letters0.png",
  },
  {
    slug: "link-hover",
    title: "Link Hover FX",
    blurb: "Three signature link-hover treatments with rolling fills.",
    category: "Type & Micro-interaction",
    tech: ["CSS", "motion"],
    thumb: "/lab/link-hover0.png",
  },
  {
    slug: "orbiting-circles",
    title: "Orbiting Circles",
    blurb: "Icon satellites revolving a center mass — MagicUI.",
    category: "Type & Micro-interaction",
    tech: ["CSS", "Keyframes"],
    thumb: "/lab/orbiting-circles0.png",
  },
  {
    slug: "aurora-background",
    title: "Aurora Background",
    blurb: "Conic aurora beams with noise overlay — recolored warm for this site.",
    category: "Atmosphere & Gradient",
    tech: ["CSS", "Keyframes"],
    thumb: "/lab/aurora-background0.png",
  },
  {
    slug: "oceanic-shimmer",
    title: "Oceanic Shimmer",
    blurb: "Community gradient recipe — layered oceanic shimmer wash.",
    category: "Atmosphere & Gradient",
    tech: ["CSS", "Gradient"],
    thumb: "/lab/gradient-oceanic.png",
  },
  {
    slug: "gradient-recipe",
    title: "Gradient Recipe",
    blurb: "Community gradient formula with exact stops and angles.",
    category: "Atmosphere & Gradient",
    tech: ["CSS", "Gradient"],
    thumb: "/lab/gradient-recipe.png",
  },
  {
    slug: "ai-chat-image-generation-1",
    title: "AI Chat + Image Gen",
    blurb: "Chat interface with inline image generation affordances.",
    category: "Product UI",
    tech: ["React", "motion"],
    thumb: "/lab/ai-chat-image-generation-10.png",
  },
  {
    slug: "bento",
    title: "Bento Grid",
    blurb: "Feature bento — wide cards over compact stat cards.",
    category: "Product UI",
    tech: ["Tailwind"],
    thumb: "/lab/bento0.png",
  },
];
