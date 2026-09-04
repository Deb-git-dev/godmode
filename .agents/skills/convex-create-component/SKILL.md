---
name: convex-create-component
description: Official Convex skill for designing real-time reactive backend components, object-form function syntax, transactional mutations, and zero-infra database queries.
---

# Convex Component Design Skill (Convex Official)

> Source: `https://github.com/get-convex/agent-skills` (get-convex/agent-skills@convex-create-component)

## Architecture Principles
1. **Object-Form Function Syntax**:
   - Always use the modern object-form API for queries, mutations, and actions:
     `export const getItems = query({ args: { ... }, handler: async (ctx, args) => { ... } });`
2. **Strict Argument & Return Validation**:
   - Define exact runtime validators with `v` (e.g. `v.string()`, `v.id("users")`, `v.optional(...)`).
3. **Reactive Subscriptions**:
   - Convex queries are automatically reactive subscriptions on the client; never poll or create manual interval fetches.
4. **Index Design & Supavisor**:
   - Always define explicit `.index("by_...", ["field1", "field2"])` on tables queried by filters to maintain sub-10ms response times.
