---
name: claude-code-skills
description: Skill-creator plugin with init/validate/package workflow, marketplace-installable structure.
---

# Claude Code Skills Plugin Engine

## Lifecycle
1. **Init**: Scaffold `.agents/skills/<name>/SKILL.md` with standardized YAML frontmatter.
2. **Validate**: Check that name, description, and procedure sections pass schema validation.
3. **Package**: Register the skill in the meta-router and `PROVENANCE.md`.
