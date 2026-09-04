---
name: supabase
description: Supabase Postgres schema management, Row Level Security (RLS) policies, Auth, and Storage integrations.
---

# Supabase Architecture Skill

## RLS & Security Policies
- Enforce `ENABLE ROW LEVEL SECURITY` on all production tables.
- Authenticated user reads: `auth.uid() = user_id`.
- Public read-only tables for audited ledgers.
- Connect coding agent directly via Supabase MCP.
