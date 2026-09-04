# Rule 07: Continuous Loop Recheck Protocol

## Loop Recheck Directive
- In long-running autonomous operations (`/goal`), never terminate on initial success.
- Execute a rigorous multi-pass recheck cycle:
  1. **Audit Invariants**: Re-scan repository for memory footprint, file size anomalies, and forbidden libraries.
  2. **Type Invariants**: Re-run strict TypeScript checks (`tsc --noEmit`).
  3. **Runtime Invariants**: Test API endpoints with automated mock/live payloads.
  4. **Contract Invariants**: Ensure design token consistency across all UI components.
  5. **Provenance Invariants**: Verify that every package in `package.json` and `requirements.txt` is documented in `PROVENANCE.md`.

Only when all recheck stages produce clean passes across consecutive loops may the goal be marked complete.
