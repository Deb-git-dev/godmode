# Rule 03: Design Taste & Frontend Contract

## Anti-Slop Principles
- **No Generic AI Templates**: Reject unstyled default card grids, purple-gradient cliches without purpose, and unconstrained container widths.
- **Workflow Enforcement**: Follow `garden-skills`: Requirements → Context → Design System Declaration (Tokens) → Draft → Full Build → Verification (WCAG AA + responsive).
- **Typography Discipline**: Strict wrapping rules (`text-balance`, `text-pretty`), hierarchical font stacks (Display/Headline, Body, Code/Metrics), and strict contrast compliance.

## Token Contract Integration
All components must consume tokens declared in [DESIGN.md](file:///d:/GODMODE/DESIGN.md) and `ui-spec.yaml`:
- Canvas: `#0B0F19` (Obsidian Deep)
- Surface 1: `#111827` (Void Surface)
- Surface 2: `#1E293B` (Border `#334155`)
- Accent Primary: `#6366F1` (Indigo Glow)
- Accent Secondary: `#06B6D4` (Cyan Pulse)
- Accent Highlight: `#10B981` (Emerald Status)

## Motion Resilience Rule
- Every animation, 3D element, or complex canvas interaction must ship with a deterministic fallback:
  - If `prefers-reduced-motion: reduce` is active, instant opacity/visibility transitions replace motion transforms.
  - If WebGL or Spline fails to initialize, render an accessible SVG/CSS fallback card.
  - Zero hard-fails or broken layouts allowed.
