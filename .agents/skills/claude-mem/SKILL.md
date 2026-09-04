---
name: claude-mem
description: Persistent memory layer for Claude Code and agent workflows using SQLite observation logging and session synthesis.
tools:
  - run_command
  - view_file
  - write_to_file
  - replace_file_content
---

# Claude-Mem Persistent Memory Skill

## Purpose
Enables cross-session persistent memory for AI coding agents. Automatically logs architectural decisions, bug fixes, user corrections, and friction points into a local SQLite observation database and syncs high-level summaries into `memory/journal.md`.

## Execution Workflow
1. **At Session Start**:
   - Query `.claude-mem/config.json` and read `memory/journal.md` to load recent session context.
   - Restore past decisions and constraints so the agent never asks the user to repeat past context.
2. **During Session Execution**:
   - Detect friction points or bug resolutions.
   - Record an observation entry containing:
     - `timestamp`: ISO-8601 string.
     - `category`: `[DECISION]`, `[BUGFIX]`, `[USER_PREFERENCE]`, or `[STATUTORY_FACT]`.
     - `content`: 1-2 sentence factual summary.
3. **At Session End / Milestone**:
   - Append syntheses to `memory/journal.md`.
   - Update SQLite observation tables.

## Invariant Safety Rules
- Zero local LLM weights; memory is structured text and SQLite only.
- Never store raw credentials or API secrets in persistent observations.
