---
name: stitch-design-taste
description: Google Stitch semantic token system & double-bezel card philosophy for layered surface elevation.
---

# Stitch Design Taste Skill

## Double-Bezel Card Philosophy
Layer card structures with an outer 1px structural bezel (`border-slate-800/80`) and an inner high-contrast highlight bezel (`border-white/5` or `border-indigo-500/10`) to generate optical depth on dark obsidian canvases without blurry drop-shadows.

## Semantic Token Mapping
1. **Primitive Tokens**: Hex values (`#0B0F19`, `#1E293B`, `#6366F1`).
2. **Semantic Tokens**: Contextual mappings (`--canvas-bg`, `--card-surface`, `--accent-cta`).
3. **Component Tokens**: Scoped tokens (`--card-border-inner`, `--btn-primary-glow`).

## Verification
- Never hardcode arbitrary hex values inside components; route through semantic tokens.
- Ensure all double-bezel cards render cleanly without border clipping.
