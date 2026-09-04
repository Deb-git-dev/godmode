---
name: garden-skills
description: Enforces design-taste workflow: requirements -> context -> design system declaration -> draft -> build -> verify.
---

# Garden Skills: Design-Taste Workflow

## The 6-Stage Phased Construction Workflow

### Stage 1: Requirements Deconstruction
Isolate user goals, technical limitations, and target user personas before writing any JSX or CSS.

### Stage 2: Context Gathering & Benchmarks
Review existing project styles, established tokens, and benchmark websites (e.g. Linear, Stripe, Vercel).

### Stage 3: Design System Declaration
Declare concrete tokens (palette hex codes, font families, radius, surface rules) in `DESIGN.md` and `ui-spec.yaml`.

### Stage 4: Layout Draft
Structure component hierarchy with clear parent-child state boundaries and responsive layout grids.

### Stage 5: Full Component Build
Implement typed React components utilizing declared tokens, accessible semantics, and named motion primitives.

### Stage 6: Verification & Polish
- Audit accessibility with WCAG AA compliance standards.
- Test `prefers-reduced-motion` fallbacks.
- Audit responsive reflow on narrow viewports (320px–375px).
