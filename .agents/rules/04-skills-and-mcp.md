# Rule 04: Skills Ecosystem & MCP Integration

## MCP-First Principle
- Before writing bespoke integration glue or scraping scripts, verify whether a standard MCP server exists in `wong2/awesome-mcp-servers`.
- Connect database MCPs (e.g., Supabase MCP) directly so coding agents can inspect schema and run migrations directly.
- Standard MCPs in GODMODE:
  - `Supabase MCP`: Database, authentication, and storage operations.
  - `GitHub MCP`: Version control and branch management.
  - `GitMCP`: Context grounding on external repositories.
  - `Playwright MCP`: End-to-end browser verification.

## Skill Creation Policy
- When a workflow is repeated twice, synthesize it into a reusable skill under `.agents/skills/<skill-name>/SKILL.md` using `skill-creator` patterns.
- Never scatter ad-hoc shell snippets across documentation.
- Maintain a skill router (`skill-router`) to automatically route agent prompts to matching skills once >= 5 skills are installed.
