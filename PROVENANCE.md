# PROVENANCE.md — Traceability & Provenance Log (§20)

> This log is an immutable record of every external repository, tool, library, model gateway, MCP server, and design reference integrated into GODMODE. Every component is traceable to its exact architectural rationale and location in the codebase.

| Repo / Resource | Category | Why It Was Added (Architectural Rationale) | Where It Lives in GODMODE |
|---|---|---|---|
| `anthropic` (Claude API) | Foundation Model | Primary reasoning & complex task breakdown; zero local GPU required. | `backend/app/routers/llm_router.py` |
| `openrouter.ai` | Model Router | Universal multi-model routing & fallback across Claude/GPT/Gemini/DeepSeek/Qwen with a single key. | `backend/app/routers/llm_router.py` |
| `integrate.api.nvidia.com` (NVIDIA NIM) | Model Gateway | Hosted inference microservices for open-weight models (Nemotron/Llama 3) via SSE streaming with sub-second TTFT. | `backend/app/routers/llm_router.py` |
| `opencode` | Coding Harness | OpenCode provider-agnostic terminal agent harness guided by `AGENTS.md` + `DESIGN.md`. | `opencode.json` |
| `jqueryscript/awesome-coding-agent` | Reference Index | Canonical ranked directory of coding agents and autonomous harnesses. | `AGENTS.md`, `.agents/rules/04-skills-and-mcp.md` |
| `Picrew/awesome-agent-harness` | Harness Index | 300+ agent harnesses with recommendation MCP integration. | `opencode.json`, `mcp_config.json` |
| `12britz/awesome-free-models` | Model Reference | Directory of free-tier cloud APIs and hosted endpoints across providers. | `backend/app/routers/llm_router.py` |
| `nextlevelbuilder/ui-ux-pro-max-skill` | Frontend Taste Skill | 161 UI reasoning rules, 67 styles, 97 palettes, 57 font pairings, WCAG AA checklist. | `.agents/skills/ui-ux-pro-max/` |
| `Leonxlnx/taste-skill` (design-taste-frontend) | Frontend Taste Skill | Anti-slop frontend principles: typography balance, eliminates generic templates, intentional variance. | `.agents/skills/design-taste-frontend/` |
| `ConardLi/garden-skills` | Workflow Skill | Enforces 6-stage design workflow: requirements → context → token declaration → draft → build → verify. | `.agents/skills/garden-skills/` |
| `MarcBender-git/awesome-design` | Design Specification | 60+ production DESIGN.md specifications dropped into project roots. | `DESIGN.md`, `ui-spec.yaml` |
| `voltagent/awesome-design-md` | Design Specification | Categorized design system and token repository for AI generation. | `DESIGN.md`, `ui-spec.yaml` |
| `Gaubee/skill-creator` | Skill Generator | Standardized CLI / subagent for synthesizing reusable agent workflows into `.agents/skills/`. | `.agents/skills/skill-creator/` |
| `daymade/claude-code-skills` | Skill Maker | Init, validate, and package workflow for modular agent skills. | `.agents/skills/claude-code-skills/` |
| `zhing2006/skills-maker` | Skill Maker | Universal cross-tool skill format compatible across Claude Code, Cursor, OpenCode, Copilot. | `.agents/skills/skills-maker/` |
| `FrancyJGLisboa/agent-skill-creator` | Skill Maker | Natural language prompt description to validated skill with eval specs. | `.agents/skills/agent-skill-creator/` |
| `gbsoss/skill-from-masters` | Skill Maker | Reverse-engineers real GitHub repositories into executable SKILL.md files. | `.agents/skills/skill-from-masters/` |
| `mingyooagi/myskills` (skill-router) | Meta-Skill Router | Intent classification & semantic matching to route agent prompts across installed skills. | `.agents/skills/skill-router/` |
| `charon-fan/agent-playbook` | Skill Router | Intent classification to semantic matching for skill catalogs. | `.agents/skills/agent-playbook/` |
| `klhq/skillmux` | Skill Router | Hybrid BM25 + embedding routing for agent skill dispatching. | `.agents/skills/skillmux/` |
| `skill-curator-mcp` | Skill Router | Semantic skill matching, feedback loop, and gap detection. | `.agents/skills/skill-curator-mcp/` |
| `wong2/awesome-mcp-servers` | MCP Directory | Canonical index of MCP servers consulted before building any custom integrations. | `mcp_config.json` |
| `supabase-mcp` (`mcp.supabase.com`) | Database MCP | Grants coding agent direct schema management, SQL query, and migration authority without hardcoded credentials. | `mcp_config.json` |
| `github-mcp-server` | VCS MCP | Agent-accessible pull requests, issues, and commit operations. | `mcp_config.json` |
| `gitmcp` | Knowledge MCP | Remote grounding on public GitHub repositories without cloning code locally. | `mcp_config.json` |
| `playwright-mcp` | Automation MCP | Headless browser verification and screenshot auditing. | `mcp_config.json` |
| `fix2015/awesome-claude-code` | Memory Pattern | Markdown-based journal/session synthesis memory architecture avoiding local vector indexes. | `memory/journal.md`, `.agents/rules/05-memory-and-retrieval.md` |
| `qdrant-client` / `pinecone-client` | Vector Retrieval | Cloud-hosted vector databases for RAG; zero local memory overhead. | `backend/app/routers/memory_router.py` |
| `langfuse` | Observability | Hosted tracing, token usage, latency tracking, and evaluation dashboards without local compute overhead. | `backend/app/core/telemetry.py` |
| `pydantic` | Guardrails | Lightweight typed schema validation and PII regex sanitization; zero local neural guardrails. | `backend/app/core/guardrails.py` |
| `framer-motion` | Frontend Motion | Named layout primitives (`MotionColumn`, `ParallaxTotem`, `GridSweep`, `MotionFocus`) with reduced-motion fallback. | `src/components/primitives/MotionPrimitives.tsx` |
| `pdf-lib` | Document Generation | In-browser vector PDF certificate and receipt generation; zero server round-trip. | `src/lib/certificateGenerator.ts` |
| `lucide-react` | Iconography | High-density, accessible SVG iconography with zero runtime overhead. | `src/components/*` |
| `tailwindcss` | Styling Engine | Utility-first CSS configured with strict token contract from `DESIGN.md`. | `tailwind.config.js` |
| `vite` | Build Tooling | Rapid HMR and production bundle optimization (zero TypeScript errors). | `vite.config.ts` |
| `fastapi` | Backend Microservices | Asynchronous, typed HTTP microservices returning explicit 200 OK statuses. | `backend/app/main.py` |
| `Moh4696/100-free-open-source-github-repos` | Master Index | Master curated repository index reverse-engineered into GODMODE architecture. | `PROVENANCE.md`, `src/pages/CatalogPage.tsx` |
| `diegosouzapw/OmniRoute` | AI Gateway Proxy | Multi-provider AI gateway proxy connecting 290+ providers with auto-fallback and RTK compression. | `package.json`, `config/omniroute.json`, `backend/app/routers/omniroute_bridge.py` |
| `headroomlabs-ai/headroom` | Context Compression | Compress-Cache-Retrieve (CCR) context compression layer and MCP server for token reduction. | `package.json`, `config/headroom.json`, `src/lib/headroom.ts`, `mcp_config.json` |
| `thedotmack/claude-mem` | Persistent Memory | SQLite persistent observation logging and cross-session synthesis for Claude Code and coding agents. | `package.json`, `.claude-mem/config.json`, `.agents/skills/claude-mem/` |
| `Anthropic/claude-code` | Agent Harness & Setup | Turn-key Claude Code configuration with slash commands, project guidelines, and permission settings. | `CLAUDE.md`, `.claude/settings.json`, `.claude/commands/`, `harnesses/claude_code_harness.json` |
| `rebelytics/one-skill-to-rule-them-all` | Meta-Skill | Task Observer meta-skill for workflow friction logging, correction recording, and skill catalog evolution. | `.agents/skills/task-observer/`, `.claude/skills/task-observer/`, `memory/task_observer_log.md` |
| `deepseek-ai` | Cloud Reasoning Harness | DeepSeek R1/V3 chain-of-thought cloud reasoning harness via OpenRouter & NIM. | `harnesses/deepseek_harness.json`, `backend/app/routers/llm_router.py` |
| `openclaw/openclaw` | Autonomous Agent Gateway | OpenClaw 2.0 self-hosted gateway connecting messaging channels to agent state machines. | `harnesses/openclaw_harness.json`, `config/openclaw.json` |
| `mendableai/firecrawl` | Web Scraper / Crawler MCP | Official Firecrawl v2 MCP server and client for LLM-ready markdown extraction. | `mcp_config.json`, `src/lib/firecrawl.ts`, `backend/app/routers/crawler_router.py` |
| `getaibuild.com` | Rapid App Builder | Architecture reference for low-code/AI agent app generation and shipping. | `PROVENANCE.md`, `design_specs/` |
| `godmod3.ai` | Multi-Model Interface | In-browser multi-model chat and red-teaming platform routing to 50+ models. | `PROVENANCE.md`, `docs/` |
| `Qwen/Qwen2.5` | Cloud Model Gateway | Qwen 2.5/27B/72B polyglot code and reasoning model gateway via OpenRouter/NIM. | `backend/app/routers/llm_router.py` |
| `obsidianmd` | Markdown Vault | Bidirectional wikilink knowledge graph and vault configuration for session notes. | `memory/obsidian/`, `memory/obsidian/.obsidian/app.json` |
| `motionsites.ai` | Motion Design Library | Animated landing page prompt specifications, cinematic keyframes, and layout tokens. | `design_specs/`, `src/components/motion/` |
| `clip.cafe` | Video Quote Database | Searchable video quote and dialogue retrieval API for media grounding. | `backend/app/routers/media_router.py` |
| `TransitionalHooks.com` | Video Retention Hooks | Transition animation patterns and visual hooks for frontend micro-interactions. | `design_specs/`, `src/components/motion/` |
| `Videoeffects.com` | Visual Effects Library | Motion templates, video overlays, and WebGL shader asset specifications. | `backend/app/routers/media_router.py` |
| `Tokcomment.com` | Social Proof Generator | Realistic social media comment mockup component and verified feedback preview. | `src/components/social/TokCommentPreview.tsx` |
| `HeyGen.com` | Cloud Avatar Video API | Cloud-based avatar synthesis and video generation API (zero local GPU). | `backend/app/routers/media_router.py`, `docs/CLOUD_MEDIA_ARCHITECTURE.md` |
| `templatical/sdk` | Email Template SDK | Visual drag-and-drop email editor SDK with JSON, MJML, and HTML export. | `docs/GITREVERSE_PROMPTS.md` |
| `anthropics/skills` | Frontend Design Skill | Anthropic official aesthetic conviction and anti-slop frontend design rules. | `.agents/skills/frontend-design/` |
| `Jpisnice/shadcn-ui-mcp-server` | Component MCP | Real-time shadcn/ui component blocks, metadata, and installation MCP server. | `mcp_config.json` |
| `21st-dev/magic-mcp` | Component MCP | AI-powered component generation and 21st.dev component library search MCP. | `mcp_config.json` |
| `vercel-labs/agent-skills` | React Performance Skills | Vercel performance rules (waterfalls, bundle tree-shaking) & React Native mobile patterns. | `.agents/skills/vercel-react-best-practices/`, `.agents/skills/vercel-react-native-skills/` |
| `greensock/gsap-skills` | Animation Skill | Official GreenSock GSAP timeline orchestration, ScrollTrigger, and React cleanup. | `.agents/skills/gsap-master/` |
| `freshtechbro/claudedesignskills` | Motion Design Skill | Framer Motion layoutId transitions, spring physics, and 3D gyro micro-interactions. | `.agents/skills/motion-framer/` |
| `get-convex/agent-skills` | Reactive Backend Skill | Convex reactive components, object syntax, mutation transactions, and auth integration. | `.agents/skills/convex-create-component/` |
| `skiper-ui.com` | Component Library | Premium animated landing page component library reference. | `docs/FRONTEND_TOOLKIT_ALPHENEX.md` |
| `greensock/gsap` | Animation Library | Official GSAP + ScrollTrigger for pinned multi-stage viewport hero timelines. | `package.json`, `src/components/ui/home-hero-landing-scroll-animation.tsx` |
| `nolimits4web/swiper` | Carousel / Slider | Touch and hardware-accelerated carousel engine with cross-fade image transitions. | `package.json`, `src/components/ui/home-hero-landing-scroll-animation.tsx` |
| `21st.dev/black-hole` | Canvas UI Primitive | Hardware-accelerated relativistic accretion disk simulation with Doppler beaming. | `src/components/ui/black-hole.tsx`, `src/pages/BlackHoleShowcasePage.tsx` |
| `21st.dev/home-hero-landing-scroll-animation` | shadcn UI Component | Luxury GSAP ScrollTrigger hero landing experience with text segment reveals. | `src/components/ui/home-hero-landing-scroll-animation.tsx`, `src/pages/ScrollHeroShowcasePage.tsx` |
| `firecrawl/multi-vector-crawler` | Web & Tech Crawler Studio | Multi-vector scraper and tech analyzer deconstructing 28 reference sites into Web, Tech, and Visual tokens. | `src/data/crawledWebsitesData.ts`, `src/pages/MultiCrawlerPage.tsx` |
| `gitreverse/prompt-vault` | Reverse-Engineered Prompts | Interactive vault of 49 complete system prompts extracted from leading AI agents and skills. | `src/data/gitreversePrompts.json`, `src/pages/GitReversePromptsPage.tsx` |
| `godmode/design-lab` | Design System Studio | Token inspector (§18), typography scales, and interactive double-bezel 3D component playground. | `src/pages/DesignLabPage.tsx` |
| `godmode/cli-terminal` | Agent Terminal Sandbox | Interactive in-browser CLI emulator supporting OpenCode, Claude Code (/design-md), and Firecrawl commands. | `src/pages/CliTerminalPage.tsx` |
| `21st.dev/kintaro-walkway-awwwards` | Interactive Canvas/WebGL | Kinetic typography & gallery with dual-tone lighting inspired by Awwwards winners. | `src/pages/showcase/KintaroAwwwardsPage.tsx` |
| `21st.dev/designali-in/web-gl-shader` | WebGL Shader Primitive | GLSL fragment shader canvas with interactive mouse coordinate uniforms and color blending. | `src/components/animations/webgl-shader.tsx`, `src/pages/showcase/WebGLShaderPage.tsx` |
| `21st.dev/designali-in/neural-noise` | Procedural Canvas | Simplex/Perlin procedural noise field with dynamic frequency sliders and wave turbulence. | `src/components/animations/neural-noise.tsx`, `src/pages/showcase/NeuralNoisePage.tsx` |
| `21st.dev/minhxthanh/neon-orbs` | Canvas Particle Primitive | Multi-layered glowing neon orb clusters with mouse reactivity & particle blur blending. | `src/components/animations/neon-orbs.tsx`, `src/pages/showcase/NeonOrbsPage.tsx` |
| `21st.dev/dillionverma/orbiting-circles` | SVG/CSS Motion Primitive | SVG and CSS orbit trajectory simulation with customizable speed, radius, and inner glow. | `src/components/animations/orbiting-circles.tsx`, `src/pages/showcase/OrbitingCirclesPage.tsx` |
| `21st.dev/Shatlyk1011/link-hover` | Micro-Interaction Primitive | Dynamic magnetic and slide hover effects for buttons, links, and navigation items. | `src/components/animations/link-hover.tsx`, `src/pages/showcase/LinkHoverPage.tsx` |
| `21st.dev/shadcn/ai-image-generation` | Interactive Studio | AI image generation workspace with aspect ratio selectors, preset chips, and prompt composer. | `src/pages/showcase/AiImageGenerationPage.tsx` |
| `21st.dev/chamaac/dancing-letters` | Kinetic Typography Primitive | Physics-driven typography with mouse repulsion, elastic damping, and spring dynamics. | `src/components/animations/dancing-letters.tsx`, `src/pages/showcase/DancingLettersPage.tsx` |
| `21st.dev/black-hole-showcase` | 3D WebGL Primitive | Relativistic gravitational lensing and particle accretion disk showcase page. | `src/pages/showcase/BlackHoleShowcasePage.tsx` |
| `21st.dev/prism-hero` | Hero Component | Chromatic dispersion prism hero section with glassmorphism badge elements. | `src/pages/showcase/PrismHeroPage.tsx` |
| `21st.dev/vetra-template` | SaaS Template | High-converting dark-mode SaaS landing page with feature metrics and pricing matrix. | `src/pages/showcase/VetraTemplatePage.tsx` |
| `21st.dev/velaris` | Portfolio Template | Editorial architecture & luxury agency portfolio with split-screen imagery and typography. | `src/pages/showcase/VelarisPage.tsx` |
| `21st.dev/scroll-locked-video` | Scroll Motion Component | Viewport-locked cinematic frame scrubbing simulation with sticky scroll stages. | `src/pages/showcase/ScrollLockedVideoPage.tsx` |
| `21st.dev/manuarora700/aurora-background` | Gradient Wave Primitive | Ambient fluid aurora gradient waves with customizable blur, blend modes, and animation pacing. | `src/components/animations/aurora-background.tsx`, `src/pages/showcase/AuroraBackgroundPage.tsx` |
| `21st.dev/chowlol202/liquid-metal-hero` | Fluid Shader Primitive | Organic chrome liquid metal shader with cursor lighting and surface distortion. | `src/components/animations/liquid-metal.tsx`, `src/pages/showcase/LiquidMetalPage.tsx` |
| `21st.dev/scroll-expansion` | Viewport Scroll Component | Dynamic container expanding on viewport scroll to reveal deep card context. | `src/pages/showcase/ScrollExpansionPage.tsx` |
| `21st.dev/manuarora700/container-scroll-animation` | 3D Scroll Primitive | 3D perspective card container scroll with dynamic tilt, scale, and perspective depth. | `src/components/animations/container-scroll.tsx`, `src/pages/showcase/ContainerScrollPage.tsx` |
| `21st.dev/splite` | 3D Hero Component | 3D interactive hero with embedded Spline/Three.js viewports and ambient glow. | `src/pages/showcase/SpliteHeroPage.tsx` |
| `21st.dev/hero` | Developer Hero Component | Reuno-style modern developer infrastructure landing page with live terminal sandbox. | `src/pages/showcase/ReunoHeroPage.tsx` |
| `21st.dev/prisma` | Database Hero Component | Prisma-inspired database & backend developer tool hero with schema preview. | `src/pages/showcase/PrismaHeroPage.tsx` |
| `21st.dev/hero-3` | Cyberpunk Hero Component | Cyberpunk telemetry hero with glowing grid radar and live latency counters. | `src/pages/showcase/Hero3Page.tsx` |
| `21st.dev/gradient-recipe` | CSS/SVG Gradient Studio | Interactive CSS and SVG radial gradient cookbook with exportable code snippets. | `src/pages/showcase/GradientRecipePage.tsx` |
| `21st.dev/oceanic-shimmer` | Caustic Shader Primitive | Deep ocean iridescent caustic ripple effect with light refraction and flow simulation. | `src/pages/showcase/OceanicShimmerPage.tsx` |
| `21st.dev/saa-template` | SaaS Dashboard Template | Enterprise multi-tenant SaaS dashboard template with KPI widgets and analytics charts. | `src/pages/showcase/SaaSTemplatePage.tsx` |
| `21st.dev/responsive-hero` | Layout Primitive | Ultra-fluid responsive hero layout with dynamic column collapse and viewport scaling. | `src/pages/showcase/ResponsiveHeroPage.tsx` |
| `21st.dev/bento` | Bento Grid Component | Knife/Apple-grade asymmetric bento grid with interactive hover illumination. | `src/pages/showcase/KinfeBentoPage.tsx` |
| `21st.dev/showcase-hub` | Showcase Navigation | Central showcase index featuring category filter tabs, live search, and direct launch triggers for all 26 experiences. | `src/pages/ShowcaseIndexPage.tsx` |
| `grok-workspace/shader-engine` | WebGL Shader Engine | Hardware-accelerated client-side fragment shader canvas with pointer uniforms and DPR capping; zero local GPU overhead. | `src/components/effects/ShaderCanvas.tsx`, `src/components/effects/vibrant-shaders.ts` |
| `grok-workspace/velora-atelier` | Multi-Room Motion Gallery | 9-room master atelier connecting Event Horizon, Pin Scroll, Neural Field, Prism, Quicksilver, Cinema, Atelier, Imagine, and Product Matrix in radiant chromatic vibrancy. | `src/pages/showcase/VeloraAtelierPage.tsx` |
| `grok-workspace/building-games` | Game Architecture Skill | 3D libraries, Babylon.js, Three.js, Phaser, physics, ECS architecture, audio, AI pathfinding, procedural gen, and genres. | `.agents/skills/grok-building-games/` |
| `grok-workspace/threejs` | Three.js & TSL Skill | Three.js API, TSL Shading Language, custom materials, shaders, GLTF loading, OrbitControls, and post-processing. | `.agents/skills/grok-threejs/` |
| `grok-workspace/controls` | Input & Physics Skill | WASD, camera orientation, mouse look, vehicle physics, and gamepad input integration. | `.agents/skills/grok-controls/` |
| `grok-workspace/design-ui` | UI Chrome Skill | Polished non-generic UI, design tokens, responsive layout, anti-slop rules, and motion orchestration. | `.agents/skills/grok-design-ui/` |
| `grok-workspace/multiplayer-p2p` | P2P Multiplayer Skill | Peer-to-peer realtime multiplayer over WebRTC data channels with mesh state synchronization. | `.agents/skills/grok-multiplayer-p2p/` |
| `grok-workspace/game-asset-core` | Asset Generation Skill | Spec checklists, style anchoring, sprite sheets, tilesets, UI icons, and character consistency. | `.agents/skills/grok-game-asset-core/` |
| `grok-workspace/xai-api` | Grok API Skill | xAI Grok API integration patterns for chat, vision, and voice. | `.agents/skills/grok-xai-api/` |
