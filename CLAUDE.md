# CLAUDE.md — Claude Code Project Guidelines for GODMODE

> **MANDATE**: GODMODE is governed by the principles in [AGENTS.md](./AGENTS.md) and `.agents/rules/*.md`.
> Every Claude Code turn must adhere to the Zero Local Compute constraint, Claude-primary/OpenRouter/NIM routing, Design Taste tokens, MCP-first discovery, markdown memory, and the continuous loop recheck verification protocol.

## Essential Commands
- **Development Server**: `npm run dev` (Runs Vite on `localhost:5173`)
- **Production Build**: `npm run build` (`tsc && vite build`)
- **Type Checking**: `npm run check` or `npx tsc --noEmit` (Must be 0 errors)
- **11-Point Invariant Audit**: `python audit.py` (Must pass 100%)
- **OmniRoute AI Gateway**: `npm run omniroute` (Runs proxy on `localhost:20128`)
- **Headroom Compression**: `npm run headroom` (Context compression CLI)
- **Claude-Mem Storage**: `npm run claude-mem` (Persistent memory manager)

## Custom Slash Commands
- `/audit`: Executes the automated 11-point verification auditor (`python audit.py`).
- `/recheck`: Runs the continuous loop recheck protocol across TypeScript, git status, and serverless routes.
- `/ground`: Asserts statutory factual grounding (Tribeni Minati Foundation registrations: 80G `AAATT1903EE20214`, 12A `AAATT1903EE20211`, DARPAN `WB/2021/0284912`).

## Active Plugins & Extensions
1. **OmniRoute**: Multi-provider AI gateway proxy configured in `config/omniroute.json`.
2. **Headroom**: Context compression layer declared in `mcp_config.json` and `config/headroom.json`.
3. **Claude-Mem**: SQLite persistent memory configured in `.claude-mem/config.json`.
4. **Task Observer**: Active session observation meta-skill in `.claude/skills/task-observer/`.

## Code Style & Architecture Invariants
- **TypeScript**: Strict mode enabled (`noUnusedLocals: true`).
- **Styling**: Tailwind CSS with Section 18 token contract:
  - Canvas: `#0B0F19` (Obsidian Deep)
  - Surface: `#111827` (Void Surface)
  - Card Border: `#334155`
  - Accent Primary: `#6366F1` (Indigo Glow)
  - Accent Secondary: `#06B6D4` (Cyan Pulse)
  - Fonts: `Space Grotesk`, `Inter`, `JetBrains Mono`
- **Zero Local GPU**: No local weights (`.bin`, `.safetensors`, `.gguf`). All inference routed to cloud APIs.
- **Continuous Loop Recheck**: Always run `tsc --noEmit` and `python audit.py` before marking any task complete.
