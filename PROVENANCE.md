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

