---
name: design-taste-frontend
description: Anti-slop frontend principles that audit typography wrapping, eliminate generic template aesthetics, and enforce intentional layout variance and micro-interactions.
---

# Design Taste Frontend Skill

## Anti-Slop Principles
1. **Typography Wrapping**: Always apply `text-balance` to headings and `text-pretty` to body paragraphs to avoid awkward typographic widows and orphans.
2. **Intentional Variance**: Never repeat uniform rows of identical cards. Break monotony using asymmetric layout accents, hero statistics callouts, or split-pane contrast.
3. **Subtle Surface Depth**: Layer surfaces using progressive lightness and border alpha (e.g. `bg-slate-900/60 border border-slate-800/80 backdrop-blur-md`) rather than heavy blurred drop-shadows.
4. **Micro-Interactions**: Provide immediate tactile feedback: scale nudges (`active:scale-[0.98]`), gentle glow transitions (`hover:border-indigo-500/50 hover:shadow-indigo-500/10`), and accessible focus rings.

## Banned Anti-Patterns
- Centered walls of text without visual anchors.
- Generic uncurated purple-to-pink gradient buttons.
- Tables without cell truncation or responsive horizontal scroll wrappers.
- Icon-only buttons lacking `aria-label` attributes.
