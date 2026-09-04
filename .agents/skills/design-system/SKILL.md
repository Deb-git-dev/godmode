---
name: design-system
description: Three-layer token architecture (primitive -> semantic -> component) ensuring enterprise visual consistency.
---

# Design System Skill

## Layered Token Architecture
1. **Layer 1: Primitive Tokens** (Raw values)
   - Colors: `#0B0F19`, `#111827`, `#1E293B`, `#6366F1`, `#06B6D4`, `#10B981`
   - Spacing: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`
2. **Layer 2: Semantic Tokens** (Design Intent)
   - `--canvas-bg`: Primitive Obsidian
   - `--surface-primary`: Primitive Void
   - `--brand-interactive`: Primitive Indigo Glow
3. **Layer 3: Component Tokens** (Element Scoped)
   - `--button-primary-bg`: var(--brand-interactive)
   - `--nav-backdrop`: var(--surface-primary)
