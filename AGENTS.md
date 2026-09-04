# Project: GODMODE — The Rule of Everything

> **CORE DIRECTIVE**: This document and its accompanying `.agents/rules/` hierarchy are the absolute rule of everything in this workspace. Every action, tool, line of code, and architectural decision must adhere strictly to these principles. Continually loop recheck all invariants before marking any task or milestone complete.

---

## Environment Constraints (Zero Local Compute)
1. **No local GPU**: Never execute or attempt to run local LLM inference, local diffusion models, or local embedding models.
2. **Limited local RAM**: Assume a low-spec development machine. Keep all local processes lightweight.
3. **Hybrid Stack**: JavaScript/Node.js (React, Vite, TypeScript, Tailwind) AND Python (FastAPI, lightweight API clients) — use whichever fits each piece.
4. **Cloud-Only Heavy Compute**: All heavy compute (LLM inference, embeddings, image/video generation, fine-tuning) MUST run via cloud APIs, never self-hosted.
5. **Traceability & Provenance**: Every tool, repository, external link, or dependency used must be traceable back to why it was added and recorded in the Provenance Log (`PROVENANCE.md`, §20).

---

## 1. Repository & Deployment Infrastructure
- **VCS**: Git tracking on `main` (`https://github.com/Deb-git-dev/godmode`). Clean commits, zero uncommitted stray files.
- **Production Host**: Vercel (`tribeni-minati-foundation/godmode`).
- **Primary Production URL**: `https://godmode-lemon-rho.vercel.app`
- **Active Deployment Alias**: `https://godmode-6gazafur1-tribeni-minati-foundation.vercel.app`
- **Build Tooling**: Vite + TypeScript + Rolldown/ESBuild. Strict type checking (0 errors).

## 2. Foundation Models / AI Layer (API-Based, Zero Local GPU)
- **Claude API (Anthropic)**: Primary reasoning and code/text generation.
- **OpenRouter**: Single unified API routing to Claude, GPT-4o, Gemini, DeepSeek, Qwen for model fallback and cost optimization.
- **NVIDIA NIM (`https://integrate.api.nvidia.com/v1/chat/completions`)**: Hosted inference microservices for open-weight models (Llama-3, Nemotron) with sub-second first-token SSE streaming.
- **OpenAI / Gemini API**: Multi-model routing and fallback.
- **Grounding Pattern**: Ground AI assistants strictly in verified workspace facts. Never hallucinate or invent statutory, financial, or architectural data.

## 3. Coding Agent & Harness Layer
- **OpenCode**: Provider-agnostic terminal coding agent harness, guided by `AGENTS.md` + `DESIGN.md`.
- **Harness MCP**: Use `Picrew/awesome-agent-harness` and `opencode.json` for harness configuration.

## 4. Orchestration
- **LangChain / LlamaIndex**: Lightweight Python clients for orchestration without local compute cost.
- **CrewAI**: If multi-agent task distribution is required.

## 5. Skills & Plugins (`.agents/skills/`)
Install and maintain modular skills in `.agents/skills/`:
- `ui-ux-pro-max`: AI reasoning engine (161 rules, 67 styles, 97 palettes, 57 font pairings, 9 stacks, WCAG AA).
- `design-taste-frontend`: Anti-slop frontend principles (typography wrapping, intentional layout variance).
- `garden-skills`: Design-taste workflow (requirements → context → design token declaration → draft → build → verify).
- `skill-creator` / `agent-skill-creator`: Generates new validated skills for repeatable workflows.
- `skill-router`: Meta-skill router (`route_skill`, `search_skills`, intent classification) to auto-select from installed skills.
- `full-output-enforcement`: Zero placeholder/incomplete code output.
- `compliance-guard`: Statutory data grounding and truth verification.

## 6. MCP Servers & Connectors
- Always consult `awesome-mcp-servers` before building custom integrations.
- Declarations configured in `mcp_config.json`:
  - `Supabase MCP`: Direct database management for agents.
  - `GitHub MCP`: Repository operations.
  - `GitMCP`: Remote repository grounding.
  - `Playwright MCP`: Browser automation.

## 7. Memory & Context
- **Markdown-based Memory**: Plain files (`memory/journal.md`) storing session synthesis and structured context.
- Zero local in-memory vector index overhead.

## 8. Embeddings & Vector Database (RAG)
- Cloud-only APIs: OpenAI Embeddings API or Cohere Embed.
- Hosted vector stores: Qdrant Cloud or Pinecone (free tier).

## 9. Frontend & Motion Architecture
- **Core**: React + TypeScript + Vite + Tailwind CSS.
- **Motion**: Framer Motion primitives (`MotionColumn`, `ParallaxTotem`, `GridSweep`, `MotionFocus`).
- **Resilience Rule**: Every animation/3D layer MUST have a graceful fallback for `prefers-reduced-motion` and WebGL failures. Never allow visual hard-fails.
- **Icons**: Lucide React.

## 10. Backend
- **FastAPI (Python)**: High-speed, typed, asynchronous endpoints returning explicit HTTP statuses.
- **Supabase**: Hosted Postgres + Auth + Storage.

## 11. Database & Persistence
- Single source of truth (Supabase Postgres) by default.
- Dual-write redundancy only when data loss is unacceptable.
- Never mirror PII/sensitive fields to client-side storage without masking.

## 12. Cloud Media Generation
- Images: Cloud APIs only (OpenAI Images, Stability API). CPU upscaler (`upscayl`) permitted.
- Video: Cloud APIs only (Runway, Kling, Pika) or programmatic CPU Remotion.
- STRICTLY EXCLUDED: ComfyUI, Stable Diffusion local checkpoints, Wan2.x local pipelines.

## 13. Observability & Tracing
- **Langfuse**: Hosted tracing and evaluation dashboard for monitoring latency, tokens, and errors.

## 14. Guardrails
- Lightweight Pydantic schemas for input/output validation.
- Regex PII sanitization. Zero local inference guardrails (no NeMo Guardrails/Llama Guard locally).

## 15. Concrete Design Token Contract (§18)
- **Canvas / Background**: `#0B0F19` (Obsidian Deep)
- **Secondary Surface**: `#111827` (Void Surface)
- **Card / Panel**: `#1E293B` (Border `#334155`)
- **Primary Accent**: `#6366F1` (Indigo Glow)
- **Secondary Accent**: `#06B6D4` (Cyan Pulse)
- **Status Success**: `#10B981` (Emerald Status)
- **Typography**: Headline (`Space Grotesk`), Body (`Inter`), Metrics/Code (`JetBrains Mono`).
- **Benchmark Bar**: Linear / Stripe / Vercel grade dark mode elegance.

## 16. Verification Checklist & Loop Recheck (§19)
Before declaring any task or milestone complete:
- [ ] TypeScript compiles with 0 errors (`npm run check` / `tsc --noEmit`).
- [ ] All local assets load (no 404s).
- [ ] All external links and API routes return healthy status.
- [ ] No local model weights or forbidden packages installed.
- [ ] Git tree clean and properly versioned.
- [ ] Provenance log updated with all dependencies.

---

## Explicitly Excluded (Local GPU / High-RAM)
- Local LLM serving (vLLM, Ollama, llama.cpp, TensorRT-LLM)
- Fine-tuning (LoRA, PEFT, Unsloth, TRL, Axolotl)
- Local embedding models (self-hosted BGE, Nomic)
- Local image/video diffusion models (ComfyUI, Stable Diffusion, Wan2.x)
- Large local in-memory vector indexes
