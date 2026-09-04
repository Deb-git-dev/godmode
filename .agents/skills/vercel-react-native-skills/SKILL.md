---
name: vercel-react-native-skills
description: Vercel official React Native and Expo skill for cross-platform mobile architecture, native gestures, responsive layouts, and performance profiling.
---

# Vercel React Native & Mobile Skills

> Source: `https://github.com/vercel-labs/agent-skills` (vercel-labs/agent-skills@vercel-react-native-skills)

## Mobile Architecture Guidelines
1. **Cross-Platform Component Hygiene**:
   - Separate platform-agnostic business logic from native view primitives.
   - Use Expo modules and native wind/Tailwind tokens for consistent styling across iOS, Android, and Web.
2. **Gesture & Touch Pacing**:
   - Use `react-native-gesture-handler` and `react-native-reanimated` for 60/120fps touch responses on the UI thread.
   - Ensure minimum hit targets of 44x44pt on mobile touch screens.
3. **Offline Caching & State Hydration**:
   - Provide optimistic UI updates for mobile interactions with background sync reconciliation.
4. **Zero Heavy Compute**:
   - Offload all heavy calculations, AI inference, and media transcoding to cloud endpoints.
