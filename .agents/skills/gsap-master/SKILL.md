---
name: gsap-master
description: Official GreenSock Animation Platform (GSAP) skill for high-performance timeline orchestration, ScrollTrigger pinning, and React cleanup.
---

# GSAP Master Animation Skill (GreenSock Official)

> Source: `https://github.com/greensock/gsap-skills` (greensock/gsap-skills@gsap-master)

## Core GSAP Engineering Principles
1. **React Integration & Cleanup**:
   - Always scope GSAP animations within `useGSAP()` or `gsap.context()` to ensure proper memory teardown on unmount.
   - Never leave dangling animation instances or un-reverted ScrollTriggers.
2. **Hardware Acceleration**:
   - Animate transforms (`x`, `y`, `scale`, `rotation`) and opacity exclusively to run on the GPU compositor thread.
   - Never animate layout triggers like `top`, `left`, `margin`, or `width`/`height` directly.
3. **ScrollTrigger Precision**:
   - Use `pin: true` and `scrub: 1` for cinematic scroll synchronization.
   - Always set `anticipatePin: 1` to prevent jitter on mobile viewports.
4. **Accessibility First**:
   - Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before initializing complex timeline sequences.
   - Provide an instant state transition when reduced motion is preferred.
