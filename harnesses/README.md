# GODMODE Coding Agent Harness Integration Layer

> Reverse-engineered from `Picrew/awesome-agent-harness` (300+ harnesses) and `jqueryscript/awesome-coding-agent` (ranked index).

This directory provides standardized harness adapters that allow external terminal coding agents to interface with GODMODE while strictly obeying `AGENTS.md`, `DESIGN.md`, and the Zero Local Compute constraint.

## Integrated Agent Harnesses

| Harness Identifier | Source / Project | Mode | Configuration File |
|---|---|---|---|
| **OpenCode** | `opencode.ai` (193k★) | Primary Terminal Agent | `opencode.json` / `harnesses/opencode_harness.json` |
| **Cline** | `cline/cline` (Claude Dev) | VS Code / Browser Autonomous | `harnesses/cline_harness.json` |
| **Aider** | `paul-gauthier/aider` | Git-Aware Terminal Pairing | `harnesses/aider_harness.json` |
| **Continue.dev** | `continuedev/continue` | IDE Extension & Context Provider | `harnesses/continue_harness.json` |
| **Codex CLI** | OpenAI / CLI Community | Terminal Command Synthesis | `harnesses/codex_harness.json` |

## Core Invariants Enforced on All Harnesses
1. **Model Grounding**: Must route all model queries through cloud endpoints (Claude API primary, OpenRouter fallback, NVIDIA NIM streaming). Zero local inference serving.
2. **Context Injection**: Harnesses automatically load `AGENTS.md`, `DESIGN.md`, and `ui-spec.yaml` into context at session start.
3. **Session Logging**: All executed actions are recorded in `memory/journal.md`.
4. **Tool Access**: Harnesses consume MCP tools declared in `mcp_config.json` (Supabase, GitHub, GitMCP, Playwright, Canva, Asana).
