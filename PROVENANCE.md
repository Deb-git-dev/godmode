# PROVENANCE.md — Traceability & Provenance Log (§20)

> This log is an immutable record of every external repository, tool, library, model gateway, MCP server, and design reference integrated into GODMODE. No component is added ad-hoc without explicit architectural rationale and cataloging here.

| Repo / Resource | Category | Why It Was Added (Architectural Rationale) | Where It Lives in GODMODE |
|---|---|---|---|
| `anthropic` (Claude API) | Foundation Model | Primary reasoning & complex task breakdown; zero local GPU required. | `backend/app/routers/llm_router.py` |
| `openrouter.ai` | Model Router | Universal multi-model routing & fallback across Claude/GPT/Gemini/DeepSeek/Qwen with a single key. | `backend/app/routers/llm_router.py` |
| `integrate.api.nvidia.com` (NVIDIA NIM) | Model Gateway | Hosted inference microservices for open-weight models (Nemotron/Llama 3) via SSE streaming with sub-second TTFT. | `backend/app/routers/llm_router.py` |
| `opencode` | Coding Harness | OpenCode provider-agnostic terminal agent harness guided by `AGENTS.md` + `DESIGN.md`. | `opencode.json` |
| `nextlevelbuilder/ui-ux-pro-max-skill` | Frontend Taste Skill | 161 UI reasoning rules, 67 styles, 97 palettes, 57 font pairings, WCAG AA checklist. | `.agents/skills/ui-ux-pro-max/` |
| `Leonxlnx/taste-skill` (design-taste-frontend) | Frontend Taste Skill | Anti-slop frontend principles: typography balance, eliminates generic templates, intentional variance. | `.agents/skills/design-taste-frontend/` |
| `ConardLi/garden-skills` | Workflow Skill | Enforces 6-stage design workflow: requirements → context → token declaration → draft → build → verify. | `.agents/skills/garden-skills/` |
| `Gaubee/skill-creator` | Skill Generator | Standardized CLI / subagent for synthesizing reusable agent workflows into `.agents/skills/`. | `.agents/skills/skill-creator/` |
| `mingyooagi/myskills` (skill-router) | Meta-Skill Router | Intent classification & semantic matching to route agent prompts across installed skills. | `.agents/skills/skill-router/` |
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
| `lucide-react` | Iconography | High-density, accessible SVG iconography with zero runtime overhead. | `src/components/*` |
| `tailwindcss` | Styling Engine | Utility-first CSS configured with strict token contract from `DESIGN.md`. | `tailwind.config.js` |
| `vite` | Build Tooling | Rapid HMR and production bundle optimization (zero TypeScript errors). | `vite.config.ts` |
