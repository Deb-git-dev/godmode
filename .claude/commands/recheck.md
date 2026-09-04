---
description: Run the continuous loop recheck protocol.
---
Verify:
1. `npx tsc --noEmit` exits with 0 errors.
2. Zero local neural weight files exist on disk.
3. Git working tree is clean on `main`.
4. All serverless endpoints return HTTP 200.
