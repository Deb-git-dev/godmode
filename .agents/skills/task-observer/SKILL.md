---
name: task-observer
description: Persistent observational meta-skill that monitors work sessions, logs user corrections and friction points, and proposes skill evolution improvements.
tools:
  - view_file
  - write_to_file
  - replace_file_content
  - run_command
---

# Task Observer Meta-Skill
*Derived from rebelytics/one-skill-to-rule-them-all (The One Skill to Rule Them All)*

## Purpose
Functions as the persistent "eyes and ears" of the AI coding agent. Rather than making unrequested autonomous changes, it passively observes workflows, captures friction points, documents user corrections, and proposes concrete improvements to the skill catalog in `memory/task_observer_log.md`.

## Core Responsibilities
1. **Capturing Corrections & Friction Points**:
   - Whenever the user corrects the agent (e.g. "don't use X, use Y" or "run this instead"), log the lesson into `memory/task_observer_log.md`.
2. **Identifying Reusable Patterns**:
   - When a multi-step task is executed repeatedly, identify it as a candidate for a new skill using `skill-creator`.
3. **Skill Evolution**:
   - Suggest refinements to installed skills (`ui-ux-pro-max`, `design-taste-frontend`, `skill-router`) to prevent repeating identical errors.
4. **Self-Observation**:
   - Monitor the observation process itself to reduce noise and maximize utility for the developer.

## Observation Log Format
Entries in `memory/task_observer_log.md` must follow:
```markdown
### [YYYY-MM-DD HH:MM:SS] - Category
- **Context**: What task was being executed.
- **Friction Point**: What obstacle, error, or correction occurred.
- **Resolution**: How it was resolved.
- **Skill Suggestion**: Specific recommendation for skill or rule update.
```
