# GEMINI.md — Antigravity Workspace Rules for GODMODE

> **MANDATE**: GODMODE is governed by the principles in [AGENTS.md](file:///d:/GODMODE/AGENTS.md) and `.agents/rules/*.md`.
> Every agent turn must adhere to the Zero Local Compute constraint, Claude-primary/OpenRouter/NIM routing, Design Taste tokens, MCP-first discovery, markdown memory, and the continuous loop recheck verification protocol.

## Core Rules Index
1. [01-environment-and-compute.md](file:///d:/GODMODE/.agents/rules/01-environment-and-compute.md): Cloud-only compute, low-RAM footprint.
2. [02-llm-routing.md](file:///d:/GODMODE/.agents/rules/02-llm-routing.md): Multi-model cloud gateway & grounding.
3. [03-design-taste.md](file:///d:/GODMODE/.agents/rules/03-design-taste.md): Design token contract, anti-slop rules, motion fallbacks.
4. [04-skills-and-mcp.md](file:///d:/GODMODE/.agents/rules/04-skills-and-mcp.md): MCP-first principle & skill-router.
5. [05-memory-and-retrieval.md](file:///d:/GODMODE/.agents/rules/05-memory-and-retrieval.md): Plain markdown memory & hosted vector stores.
6. [06-verification-and-provenance.md](file:///d:/GODMODE/.agents/rules/06-verification-and-provenance.md): Provenance logging & 0-error verification checklist.
7. [07-loop-recheck.md](file:///d:/GODMODE/.agents/rules/07-loop-recheck.md): Loop recheck invariant protocol.

## Loop Recheck Protocol
Before reporting complete, verify:
- Zero TypeScript compile errors (`npm run check` or `tsc --noEmit`).
- Zero local LLM weight files (`.bin`, `.safetensors`, `.gguf`, `.onnx`).
- All mock/live routes responding properly.
- All dependencies registered in [PROVENANCE.md](file:///d:/GODMODE/PROVENANCE.md).
