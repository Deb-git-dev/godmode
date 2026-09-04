# Rule 06: Verification & Provenance Policy

## Provenance Log (§20)
- Every external repository, design specification, npm package, python package, MCP server, and reference tool introduced into GODMODE must have an explicit entry in [PROVENANCE.md](file:///d:/GODMODE/PROVENANCE.md):
  - Component / Tool Name
  - Exact Source URL / Repo
  - Architectural Rationale (Why it was added)
  - Location in GODMODE Codebase

## Verification Checklist (§19)
Before declaring any phase or feature done, run the verification harness (`python audit.py` and `npm run check`):
1. TypeScript compilation returns 0 errors.
2. All static assets and media routes resolve with HTTP 200 (no 404s).
3. Backend endpoints return healthy status and pass schema validation.
4. No forbidden local LLM checkpoints or weights reside on disk.
5. Git working tree is clean and committed to `main`.
