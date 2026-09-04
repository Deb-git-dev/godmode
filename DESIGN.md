# DESIGN.md — GODMODE Visual System & Token Contract

> Enforced by `ui-ux-pro-max`, `design-taste-frontend`, and `garden-skills`.

---

## 1. Concrete Color Token Contract (Dark Obsidian Theme)

| Token Key | Hex Value | Usage / Semantic Role |
|---|---|---|
| `--color-canvas` | `#0B0F19` | Obsidian Deep primary background canvas |
| `--color-surface-subtle` | `#111827` | Void surface for nested cards and toolbars |
| `--color-surface-elevated` | `#1E293B` | Elevated interactive cards, popovers, modals |
| `--color-border-subtle` | `#1E293B` | Structural boundary lines |
| `--color-border-prominent` | `#334155` | Focused borders, interactive hover states |
| `--color-accent-primary` | `#6366F1` | Indigo Glow: primary calls to action, brand focus |
| `--color-accent-secondary` | `#06B6D4` | Cyan Pulse: model routing active state, live telemetry |
| `--color-accent-success` | `#10B981` | Emerald Status: healthy endpoints, verified proofs |
| `--color-accent-warning` | `#F59E0B` | Amber Guard: cost alerts, rate limit caution |
| `--color-accent-danger` | `#F43F5E` | Rose Alert: local GPU violations, network errors |
| `--color-text-primary` | `#F8FAFC` | High-contrast body and title typography |
| `--color-text-secondary` | `#94A3B8` | Subtle metadata, secondary descriptions |
| `--color-text-muted` | `#64748B` | Disabled indicators, decorative labels |

---

## 2. Typography Hierarchy

- **Headline / Display**: `Space Grotesk`, system sans-serif fallback (`font-heading`)
  - Weight: `font-bold` (700), `font-semibold` (600)
  - Letter spacing: `tracking-tight` (-0.02em)
  - Wrapping: `text-balance`
- **Body**: `Inter`, system sans-serif fallback (`font-body`)
  - Weight: `font-normal` (400), `font-medium` (500)
  - Line height: `leading-relaxed` (1.6)
  - Wrapping: `text-pretty`
- **Data / Metrics / Code**: `JetBrains Mono`, monospace fallback (`font-mono`)
  - Weight: `font-normal` (400), `font-medium` (500)
  - Letter spacing: `tracking-wider` (0.05em for data badges)

---

## 3. Surface Geometry & Layout Architecture

- **Card Radius**: `rounded-2xl` (16px) for major modules; `rounded-xl` (12px) for nested sub-panels; `rounded-lg` (8px) for buttons/badges.
- **Surface Elevation**: Glassmorphism with `bg-slate-900/60 backdrop-blur-md border border-slate-800/80`.
- **Interactive Shadow**: `shadow-2xl shadow-indigo-950/20` transitioning to `shadow-indigo-500/10` on hover.
- **Bezel**: 1px crisp stroke `border border-slate-700/50` to maintain visual crispness against deep dark background.

---

## 4. Named Motion Primitives (Framer Motion Contract)

1. **`MotionColumn`**:
   - Staggered child reveals (`staggerChildren: 0.08s`, child `y: 12 -> 0, opacity: 0 -> 1`).
   - Fallback: static block rendering under `prefers-reduced-motion`.
2. **`ParallaxTotem`**:
   - Subtle mouse-tracking depth shift (max ±8px tilt, clamped boundary).
   - Fallback: stationary flat card with standard hover border.
3. **`GridSweep`**:
   - Ambient background scanner pulse (subtle radial gradient translate).
   - Fallback: static ambient radial gradient.
4. **`MotionFocus`**:
   - Spotlight gradient cursor glow follow on card surfaces.
   - Fallback: fixed border highlight on focus.

---

## 5. Benchmark Sites to Beat
1. **Linear.app** — Uncompromising keyboard ergonomics, dark mode contrast, zero-clutter information architecture.
2. **Vercel Dashboard** — Monospace precision, micro-metric readouts, and rapid feedback states.
3. **Stripe Developer Portal** — Clear API status visualizers, flawless typography contrast.
