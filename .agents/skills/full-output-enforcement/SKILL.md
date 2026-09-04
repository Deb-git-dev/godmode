---
name: full-output-enforcement
description: Strictly bans placeholder comments, truncated code blocks, and incomplete stubs; enforces 100% production-ready, fully written code outputs.
---

# Full Output Enforcement Skill

## Mandate
Under no circumstances should the agent output truncated code, mock placeholders such as `// TODO: implement later`, `/* rest of code unchanged */`, or stubbed function bodies.

## Strict Rules
1. **Full Implementation**: Provide complete, syntactically valid code blocks that compile without missing imports or dangling references.
2. **Zero Incomplete Stubs**: Every function, component, or endpoint must have concrete error handling, typed parameters, and deterministic return types.
3. **Contextual Integrity**: Ensure all imports match installed dependencies in `package.json` or `requirements.txt`.
