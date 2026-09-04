---
name: supabase-postgres-best-practices
description: Query optimization, connection pooling via Supavisor, index design, and JSONB performance.
---

# Supabase Postgres Best Practices

## Performance Invariants
1. **Index Optimization**: Apply B-tree indexes on foreign keys, GIN indexes on queryable JSONB fields.
2. **Connection Pooling**: Use transaction-mode pooling (port 6543) for serverless edge functions.
3. **Prepared Statements**: Avoid dynamic SQL string interpolation to prevent injection attacks.
