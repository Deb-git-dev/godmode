---
name: skill-router
description: Meta-skill router that performs intent classification, semantic matching, and category search across installed skills to pick the optimal skill for any task.
---

# Skill Router: Automated Skill Selection & Dispatch

## Purpose
Solves the "which skill applies here?" dilemma once a repository maintains 5+ specialized skills. Employs hybrid keyword, category, and intent matching.

## Catalog Management
The router tracks the installed skills:
1. `ui-ux-pro-max`: Frontend taste, styling, palette generation, WCAG AA.
2. `design-taste-frontend`: Anti-slop layout rules, typography balance, micro-interactions.
3. `garden-skills`: 6-stage structured frontend build workflow.
4. `skill-creator`: Generating new skills for recurring agent tasks.
5. `full-output-enforcement`: Zero placeholder / complete code enforcement.
6. `compliance-guard`: Statutory data grounding and anti-hallucination.
7. `skill-router`: Self-referential routing and discovery.

## Routing Protocol
- **Input**: User prompt or current engineering objective.
- **Intent Classifier**:
  - If task relates to layout, color, design systems, or accessibility -> Select `ui-ux-pro-max` + `design-taste-frontend`.
  - If task relates to structured frontend feature planning -> Select `garden-skills`.
  - If task repeats an ad-hoc procedure -> Select `skill-creator`.
  - If task touches sensitive registration, finance, or legal data -> Select `compliance-guard`.
  - If writing code -> Enforce `full-output-enforcement`.
