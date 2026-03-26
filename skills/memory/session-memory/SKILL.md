---
name: session-memory
description: Persists project context across sessions using file-based memory.
triggers:
  - session start
  - session end
  - "/checkpoint"
---

# Session Memory Skill

## Architecture
Memory is stored as markdown files in `.behemoth/sessions/` — no database, no external service, fully portable and git-friendly.

## On Session Start
1. Read `.behemoth/sessions/` — load the 2-3 most recent summaries
2. Read `.behemoth/plans/` — find any in-progress plan
3. Read `.behemoth/design-system/MASTER.md` if it exists
4. Read `.behemoth/decisions/` — recent architectural decisions
5. Present a brief "Welcome back" context:

```
📋 Last session (Mar 25): Implemented user auth (tasks 1-4 of 7 complete)
📌 Next up: Task 5 — Add password reset flow
🎨 Design system: Minimalist, blue palette, Inter/Mono fonts
```

## On Session End (or /checkpoint)
Invoke the `session-archivist` agent to capture:
- Decisions made
- Work completed (files changed)
- Work in progress
- Patterns and gotchas discovered
- A ready-to-paste "resume prompt"

## Progressive Disclosure (from Claude-Mem)
Don't dump all history at once. Layer it:
1. **Layer 1** — Brief summary: what you were doing, what's next (~50 tokens)
2. **Layer 2** — Detailed context: decisions, patterns, blockers (~200 tokens)
3. **Layer 3** — Full session logs: only if explicitly requested

## File Structure
```
.behemoth/
├── sessions/
│   ├── 2025-03-25-1430.md
│   ├── 2025-03-24-0900.md
│   └── ...
├── plans/
│   └── 2025-03-24-user-auth.md
├── designs/
│   └── 2025-03-24-user-auth.md
├── decisions/
│   └── ADR-001-auth-strategy.md
└── design-system/
    └── MASTER.md
```
