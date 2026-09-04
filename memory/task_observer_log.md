# Task Observer Log (Persistent Augmented Expertise)

> Maintained by the `task-observer` meta-skill (*rebelytics/one-skill-to-rule-them-all*).  
> Captures workflow friction points, user corrections, and proposed skill improvements.

---

### [2026-09-04 17:15:00] - Windows PowerShell Script Execution Policy
- **Context**: Executing `npm` and `npx` commands in Windows PowerShell.
- **Friction Point**: PowerShell script execution policy disabled `npm.ps1`, requiring explicit `.cmd` extension (`npm.cmd` / `npx.cmd`).
- **Resolution**: Updated all command invocations to use `npm.cmd` and `npx.cmd`.
- **Skill Suggestion**: Codified in `AGENTS.md` and `.agents/rules/01-environment-and-compute.md` to default to `npm.cmd` on Windows.

### [2026-09-04 17:25:00] - GitReverse Service Mechanism Grounding
- **Context**: User requested checking whether repos were "gitreverse and engineered".
- **Friction Point**: Initial interpretation treated "gitreverse" as a verb; user clarified it was `https://gitreverse.com/{owner}/{repo}` which generates prompts from GitHub URLs.
- **Resolution**: Queried `gitreverse.com/api/reverse-prompt` live for all 26 repositories and archived them in `docs/GITREVERSE_PROMPTS.md`.
- **Skill Suggestion**: Created dedicated `docs/GITREVERSE_PROMPTS.md` and archived all prompts in project provenance.

### [2026-09-04 23:25:00] - Plugin Suite Installation
- **Context**: Installing 5 requested plugins: OmniRoute, Headroom, Claude-Mem, Claude Code Setup, and Task Observer.
- **Friction Point**: Heavy dependency trees for desktop/gateway plugins required patient non-blocking background task orchestration.
- **Resolution**: Successfully installed `omniroute`, `headroom-ai`, and `claude-mem` via `npm.cmd install` and generated full configuration suites.
- **Skill Suggestion**: Registered in `mcp_config.json`, `package.json`, and `harnesses/claude_code_harness.json`.
