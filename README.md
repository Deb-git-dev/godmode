# GODMODE — The Rule of Everything

[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict_0_Errors-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 5](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python_3.14-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Zero Local GPU](https://img.shields.io/badge/Compute-Zero_Local_GPU-emerald)](./AGENTS.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> **CORE DIRECTIVE**: GODMODE is an enterprise-grade agentic coding, design intelligence, and verification architecture governed by [`AGENTS.md`](./AGENTS.md) and the `.agents/rules/` hierarchy. Every action, tool, line of code, and architectural decision adheres strictly to **Zero Local Compute** and the **Continuous Loop Recheck Protocol**.

---

## ⚡ Key Highlights

- **Zero Local GPU / Low Local RAM Footprint**: 100% of LLM inference, embedding generation, and media generation is routed to hosted cloud APIs (OpenRouter, NVIDIA NIM, Anthropic Claude, OpenAI, Stability AI). Zero neural weights (`.bin`, `.safetensors`, `.gguf`) exist on disk.
- **42-Skill Agentic Ecosystem**: Modular skills installed in `.agents/skills/` spanning Frontend Taste (13), Motion & Visuals (6), Skill Makers & Routers (10), Cloud Architecture (6), and Compliance & Storytelling (7).
- **GitReverse Integration**: Reverse-engineered prompts for all 26 canonical reference repositories cataloged in [`docs/GITREVERSE_PROMPTS.md`](./docs/GITREVERSE_PROMPTS.md).
- **Multi-Agent Coding Harness Suite**: Drop-in harness configurations for **OpenCode**, **Cline**, **Aider**, **Continue.dev**, and **Codex CLI** in [`harnesses/`](./harnesses/).
- **Dual-Write Persistence Engine**: Single-write function committing to **Supabase Postgres** (primary) + non-blocking async mirror to **MongoDB Atlas** + browser LocalStorage.
- **In-Browser Vector PDF Generator**: Client-side verifiable certificates and transaction receipts rendered with `pdf-lib` (zero server roundtrip).
- **Double-Bezel Design Token System (§18)**: Obsidian Deep (`#0B0F19`), Void Surface (`#111827`), Card Border (`#334155`), Indigo Glow (`#6366F1`), Cyan Pulse (`#06B6D4`), and Space Grotesk / Inter typography.

---

## 📁 Repository Structure

```text
GODMODE/
├── .agents/
│   ├── rules/                   # 7 Invariant rule definitions (Rule of Everything)
│   │   ├── 01-environment-and-compute.md
│   │   ├── 02-llm-routing.md
│   │   ├── 03-design-taste.md
│   │   ├── 04-skills-and-mcp.md
│   │   ├── 05-memory-and-retrieval.md
│   │   ├── 06-verification-and-provenance.md
│   │   └── 07-loop-recheck.md
│   └── skills/                  # 42 Validated agent skills with YAML frontmatter
│       ├── ui-ux-pro-max/       # 161 UI rules, 67 styles, 97 palettes
│       ├── design-taste-frontend/# Anti-slop frontend principles
│       ├── skill-router/        # Meta-intent skill classifier & router
│       ├── garden-skills/       # Skill marketplace component
│       ├── supabase/            # Supabase schema & RLS rules
│       └── ...
├── api/                         # Vercel serverless microservices
│   ├── ai/chat.ts               # Streaming AI completions
│   ├── contact/submit.ts        # Grievance / inquiry ticketing
│   ├── action/submit.ts         # Dual-write action submission
│   ├── action/verify.ts         # Cryptographic action receipt verification
│   ├── action/ledger.ts         # Audited public ledger
│   └── auth/connect.ts          # Unified OAuth gateway
├── backend/                     # Lightweight Python FastAPI orchestration layer
│   └── app/
│       ├── core/db.py           # Dual-write persistence engine
│       ├── routers/             # LLM router & serverless mirror
│       └── main.py              # Application entrypoint
├── design_specs/                # Linear specs, token dictionaries & color scales
├── docs/                        # Architectural decision records
│   ├── GITREVERSE_PROMPTS.md    # 26 Authenticated prompts from gitreverse.com
│   ├── GITREVERSE_DEEP_ANALYSIS.md
│   └── CLOUD_MEDIA_ARCHITECTURE.md
├── harnesses/                   # Coding agent harness configurations
│   ├── opencode_harness.json
│   ├── cline_harness.json
│   ├── aider_harness.json
│   ├── continue_harness.json
│   └── codex_harness.json
├── memory/                      # Plain markdown memory journal
│   └── journal.md
├── src/                         # React 18 + Vite + Tailwind frontend
│   ├── components/              # Motion primitives, 3D scenes, compliance cards
│   ├── pages/                   # Multi-page routes (Home, About, Catalog, Dashboard, Auth)
│   ├── lib/                     # In-browser pdf-lib generator & utilities
│   └── App.tsx
├── AGENTS.md                    # Root Constitution & Directive
├── GEMINI.md                    # Agent Operational Protocols
├── DESIGN.md                    # Concrete Design Contract (§18)
├── PROVENANCE.md                # 74+ External resource traceability audit
├── audit.py                     # Automated 11-point invariant verification suite
└── mcp_config.json              # MCP connector declarations
```

---

## 🚀 Quickstart

### Prerequisites
- Node.js v18+ & npm
- Python 3.10+ (for backend orchestration and automated audits)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Run Automated 11-Point Invariant Audit
```bash
python audit.py
```

### 4. Build Production Distribution
```bash
npm run build
```

---

## 🔒 Automated Verification Invariants

Before marking any task complete, `audit.py` validates all 11 critical invariants:
- [x] **Zero Local GPU**: Zero local weight files (`.bin`, `.safetensors`, `.gguf`) on disk.
- [x] **The Rule of Everything**: All 9 rule files active and grounded.
- [x] **42-Skill Ecosystem**: 100% valid YAML frontmatter across all skills.
- [x] **Design Token Contract**: Obsidian Deep token values enforced.
- [x] **MCP Server Connectivity**: Supabase, GitHub, GitMCP, and Playwright registered.
- [x] **Plain Markdown Memory**: Grounded in verified statutory facts with 0 hallucination.
- [x] **Full Provenance (§20)**: 74+ external resources traced in `PROVENANCE.md`.
- [x] **Serverless Microservices**: All 6 API routes returning HTTP 200 OK.
- [x] **In-Browser PDF Generator**: `pdf-lib` client-side certificate generation.
- [x] **Multi-Page Routes**: Home, About, Catalog, Detail, Dashboard, Auth, Contact operational.
- [x] **Backend Cloud Health**: All internal cloud proxy endpoints verified.

---

## 🌐 1-Click Deployment (Vercel)

This repository is optimized for instant deployment on **Vercel**:
1. Fork or import this repository at [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Root Directory: `./`.
4. Click **Deploy**.

---

## 📄 License

MIT © [Deb-git-dev](https://github.com/Deb-git-dev)
