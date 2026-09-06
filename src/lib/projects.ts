export interface Project {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  stack: string[];
  cover: string;
  wide?: string;
  featured: boolean;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "godmode",
    index: "01",
    title: "GODMODE Architecture",
    subtitle: "Cloud-native autonomous AI agent orchestrator and unified multi-model harness.",
    category: "AI Systems & Infrastructure",
    tags: ["Agentic AI", "TypeScript", "Vite", "Cloud Routing"],
    year: "2026",
    client: "Open Source / Foundation",
    role: "Lead Architect & Systems Engineer",
    stack: ["TypeScript", "React", "OpenRouter", "NVIDIA NIM", "Tailwind CSS"],
    cover: "/work/obsidian.png",
    wide: "/work/flow-wide.png",
    featured: true,
    summary:
      "A zero-local-compute agentic workspace integrating multi-model fallback, deterministic provenance logs, and 28 high-fidelity interactive components.",
    challenge:
      "Building an agentic workspace that never runs slow local GPU models, yet provides instant sub-second multi-model routing across Claude 3.7, GPT-4o, and DeepSeek, with verifiable audit trails and 60fps interaction polish without visual regressions.",
    approach:
      "Designed a hybrid token contract with real-time cloud routing, deterministic provenance hashing, and client-side WebGL/Three.js renderers. Integrated 28 creative interactive modules directly without compromising build integrity.",
    outcome:
      "Achieved 100% cloud-grounded execution, zero-warning builds, sub-second routing latency, and a cohesive museum editorial aesthetic.",
  },
  {
    slug: "tribeni-foundation",
    index: "02",
    title: "Tribeni Minati Foundation",
    subtitle: "Digital platform and programmatic impact engine for non-profit social empowerment.",
    category: "Social Impact & Web Platform",
    tags: ["CSR Grant", "Next.js", "Postgres", "Platform"],
    year: "2025",
    client: "Tribeni Minati Foundation NGO",
    role: "Founder & Technical Director",
    stack: ["React", "PostgreSQL", "Supabase", "Tailwind CSS"],
    cover: "/work/auric.png",
    wide: "/work/studio-wide.png",
    featured: true,
    summary:
      "High-transparency NGO platform driving rural educational access, healthcare dispatching, and audited donor reporting.",
    challenge:
      "Non-profit organizations often suffer from fragmented reporting, untracked donor trails, and low visibility. The foundation needed real-time verification and enterprise-grade presentation.",
    approach:
      "Built an immutable transaction ledger for donations, bilingual content localization with zero cross-talk, and an automated statutory CSR certificate generator.",
    outcome:
      "Empowered 12,000+ beneficiaries across Bengal, achieved 100% statutory compliance, and scaled donor retention by 3.2x.",
  },
  {
    slug: "gitreverse-prompts",
    index: "03",
    title: "GitReverse Prompt Vault",
    subtitle: "Deterministic reverse-engineering vault and semantic prompt intelligence engine.",
    category: "Developer Tools & AI",
    tags: ["Prompt Engineering", "Reverse Engineering", "Search"],
    year: "2025",
    client: "Dev Ecosystem",
    role: "Creator & Lead Developer",
    stack: ["React", "TypeScript", "BM25 Search", "Vector Embeddings"],
    cover: "/work/halcyon.png",
    wide: "/work/flow-wide.png",
    featured: true,
    summary:
      "Comprehensive indexing engine deconstructing cutting-edge GitHub repos and developer workflows into reusable prompt blueprints.",
    challenge:
      "Engineers waste days deciphering complex AI codebases. They needed structured, instantly copyable system prompts and architecture breakdowns.",
    approach:
      "Automated AST scraping and LLM-assisted deconstruction of 500+ elite repositories, indexed via instant client-side fuzzy filtering and category facets.",
    outcome:
      "Used by thousands of developers to bootstrap complex AI harnesses and prompt workflows with zero setup friction.",
  },
  {
    slug: "autonomous-cloud-router",
    index: "04",
    title: "OmniRoute Cloud Gateway",
    subtitle: "Dynamic latency-aware cloud LLM routing and resilience gateway.",
    category: "Cloud Infrastructure",
    tags: ["Inference Routing", "FastAPI", "OpenRouter", "NIM"],
    year: "2025",
    client: "Autonomous Systems",
    role: "Systems Architect",
    stack: ["FastAPI", "Python", "OpenRouter", "SSE Streaming"],
    cover: "/work/meridian.png",
    wide: "/work/flow-wide.png",
    featured: true,
    summary:
      "High-speed unified LLM router dynamically dispatching between Anthropic, OpenAI, DeepSeek, and NVIDIA NIM with zero downtime fallback.",
    challenge:
      "API rate limits, localized provider outages, and pricing spikes disrupt production agent workflows.",
    approach:
      "Engineered circuit-breaking fallback logic, token budget controls, and sub-second health-checking across 5 global model providers.",
    outcome:
      "99.99% gateway uptime, 42% cost reduction across large-scale evals, and transparent latency telemetry.",
  },
  {
    slug: "firecrawl-multicrawler",
    index: "05",
    title: "Deep Multi-Crawler",
    subtitle: "Agentic web discovery, markdown extraction, and structured schema synthesizer.",
    category: "Data Systems",
    tags: ["Firecrawl", "Scraping", "Data Ingestion"],
    year: "2024",
    client: "Research Labs",
    role: "Lead Developer",
    stack: ["TypeScript", "Firecrawl API", "React"],
    cover: "/work/terra.png",
    wide: "/work/studio-wide.png",
    featured: false,
    summary:
      "Automated multi-engine crawling harness capturing deep page structures and transforming web noise into structured RAG embeddings.",
    challenge:
      "Modern dynamic SPAs and bot protections prevent agents from gathering grounded web context.",
    approach:
      "Orchestrated headless crawling via Firecrawl APIs with markdown cleaning, semantic chunking, and instant entity extraction.",
    outcome:
      "Extracted 100k+ clean documents for RAG grounding with zero human intervention.",
  },
  {
    slug: "design-taste-lab",
    index: "06",
    title: "Design Taste Engine",
    subtitle: "Anti-slop design token governance and interactive component workbench.",
    category: "Design Engineering",
    tags: ["UI/UX", "Design Systems", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    client: "GODMODE Creative",
    role: "Design Technologist",
    stack: ["React", "Tailwind CSS", "Three.js", "GSAP"],
    cover: "/work/nocturne.png",
    wide: "/work/flow-wide.png",
    featured: false,
    summary:
      "Curated collection of 28 production-grade interactive modules, WebGL shaders, and typography treatments defying generic AI aesthetics.",
    challenge:
      "Most AI-generated interfaces look identical: generic dark templates with bad typography and disjointed animation.",
    approach:
      "Built an exhaustive design token system enforcing Museum Editorial hierarchy, tactile micro-interactions, and graceful motion fallbacks.",
    outcome:
      "Zero visual regressions, WCAG AA compliance, and fluid 60fps performance across mobile and desktop.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(current: Project): Project {
  const i = projects.findIndex((p) => p.slug === current.slug);
  return projects[(i + 1) % projects.length];
}

export function prevProject(current: Project): Project {
  const i = projects.findIndex((p) => p.slug === current.slug);
  return projects[(i - 1 + projects.length) % projects.length];
}
