---
name: frontend-design
description: Official Anthropic frontend-design skill that forces aesthetic conviction before coding, bans generic AI defaults (raw purple gradients, unconsidered fonts), and enforces cohesive design tokens, typography scales, and responsive interaction states.
---

# Frontend Design Skill (Anthropic Official)

> Source: `https://github.com/anthropics/skills` (anthropics/skills@frontend-design)

## Core Philosophy: Commit to an Aesthetic Direction
Before writing a single line of frontend code or markup, declare the exact design persona and visual direction for the interface. Avoid "generic modern web app" mediocrity.

### Approved Aesthetic Personas
1. **Obsidian Deep / High-End Dark**: Deep slate/zinc canvas (`#0B0F19`), subtle 1px border contrast, subtle cyan/indigo specular glows, crisp monospace data metrics.
2. **Minimalist Editorial**: Warm off-white or stark monochrome, ultra-wide headline kerning, generous whitespace, strict serif-sans pairings.
3. **Industrial Brutalist**: Swiss grids, high-density monospace badges, exposed borders, high contrast tabular telemetry.
4. **Retro-Futuristic / Cyber-Tactical**: Technical wireframe accents, subtle scanlines, high-contrast status accents (emerald, amber, crimson).

## Banned AI-Default Anti-Patterns
- **Generic Gradient Slop**: Never slap raw purple-to-pink or blue-to-magenta linear gradients onto buttons or backgrounds without intentional brand reasoning.
- **Uncurated Typography**: Do not use raw system fallback fonts (like unstyled Arial or unconsidered Roboto) without declaring deliberate font weights, tracking (`tracking-tight`), and line heights.
- **Monotonous Card Grids**: Never render 3 or 4 identical rectangular cards in an uninterrupted row. Break layout monotony with asymmetric hero metrics, split views, or nested bento layouts.
- **Floating Without Contrast**: Avoid blurry heavy drop-shadows on cards without a distinct 1px border separator (`border border-slate-800/80`).

## Layout & Micro-Interaction Invariants
1. **Typography Wrapping**: Always apply `text-balance` to headings and `text-pretty` to body paragraphs.
2. **Interactive States**: Every clickable element MUST have tactile feedback:
   - `hover:border-primary/50`
   - `active:scale-[0.98]`
   - `focus-visible:ring-2 focus-visible:ring-indigo-500`
3. **Motion Resilience**: All animations MUST be wrapped with `prefers-reduced-motion` fallbacks.
4. **Accessibility (WCAG AA)**: Maintain at least 4.5:1 contrast ratio for all text elements.
