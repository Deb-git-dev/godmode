---
name: motion-framer
description: Comprehensive Framer Motion skill covering fluid spring physics, layoutId shared element transitions, stagger orchestration, and 3D gyro/tilt micro-interactions.
---

# Motion Framer Skill (FreshTechBro / Claude Design Skills)

> Source: `https://github.com/freshtechbro/claudedesignskills` (freshtechbro/claudedesignskills@motion-framer)

## Core Motion Primitives
1. **Spring Physics Configuration**:
   - Default micro-interactions: `{ type: "spring", stiffness: 400, damping: 28 }`
   - Smooth entrance transitions: `{ type: "spring", stiffness: 120, damping: 20 }`
2. **Shared Layout Transitions (`layoutId`)**:
   - Use `layoutId` on tabs, navigation indicator pills, and active card borders for continuous morphological transitions.
   - Always include `layout="position"` when animating element dimensions to prevent distorted border radii.
3. **Exit Transition Safety (`AnimatePresence`)**:
   - Every conditional UI component with an exit animation MUST be wrapped in `<AnimatePresence mode="wait">`.
   - Provide unique and stable `key` attributes on animated children.
4. **Performance & Reduced-Motion**:
   - Use `useReducedMotion()` to swap spring transforms with instant or gentle opacity dissolves.
