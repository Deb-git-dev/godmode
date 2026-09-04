---
name: skill-creator
description: Generates new validated skills with proper folder structure, YAML frontmatter, execution instructions, and test specs for repeatable workflows.
---

# Skill Creator: Automating Workflows into Skills

## Purpose
Converts recurring multi-step tasks into permanent, discoverable agent skills stored under `.agents/skills/<name>/SKILL.md`.

## Standard Skill Structure
```
.agents/skills/<skill-name>/
├── SKILL.md                 # Primary instruction file with YAML frontmatter
├── scripts/                 # (Optional) Shell or Python helper scripts
└── references/              # (Optional) Domain documentation or benchmark schemas
```

## Generation Protocol
1. **Identify Pattern**: Notice when a workflow is triggered more than once.
2. **Define Scope**: Restrict the skill to a cohesive, single-domain procedure.
3. **Draft SKILL.md**:
   - YAML frontmatter with `name` and concise `description`.
   - Step-by-step procedures, edge case handlers, and verification criteria.
4. **Register in Skill Router**: Ensure `skill-router` registers the newly generated skill.
