---
name: vercel-react-best-practices
description: Vercel official React and Next.js performance and architecture rules for eliminating waterfalls, optimizing bundle sizes, and ensuring seamless rendering.
---

# Vercel React Best Practices

> Source: `https://github.com/vercel-labs/agent-skills` (vercel-labs/agent-skills@vercel-react-best-practices)

## Performance Invariants
1. **Eliminate Request Waterfalls**:
   - Never chain sequential awaits for independent data fetches.
   - Use `Promise.all()` or parallel streaming for concurrent queries.
2. **Bundle Optimization & Tree-Shaking**:
   - Use direct named imports from modern libraries (e.g. `lucide-react` instead of entire icon sets).
   - Lazy-load heavy dependencies with dynamic `React.lazy()` and Suspense boundaries.
3. **Hydration & Render Safety**:
   - Separate interactive client components (`'use client'`) from static server boundaries.
   - Keep state local to where it is needed; avoid unnecessary root context re-renders.
4. **Asset & Image Performance**:
   - Always declare explicit dimensions (`width`, `height`) on images and avatars to prevent Cumulative Layout Shift (CLS).
   - Serve optimized modern formats (WebP, AVIF) with fallback support.
5. **State Memoization**:
   - Wrap expensive computation in `useMemo()` and stable callbacks in `useCallback()` only when passing to memoized children or dependency arrays.
