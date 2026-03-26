---
name: continuous-learning
description: Automatically extract patterns and lessons from sessions. Build project-specific knowledge over time.
triggers:
  - "learn"
  - "pattern"
  - "lesson"
  - "remember this"
---

# Continuous Learning Skill

## How It Works

### Automatic Pattern Extraction
After each meaningful session, identify and save:
1. **Project conventions** discovered (naming, file org, API patterns)
2. **Gotchas** encountered (things that broke unexpectedly)
3. **Workarounds** applied (platform limitations, library quirks)
4. **Best approaches** found (techniques that worked well)
5. **Anti-patterns** hit (approaches that failed and why)

### Storage
Append to `.behemoth/learnings.md`:
```markdown
## [YYYY-MM-DD] — [topic]
**Type**: convention | gotcha | workaround | pattern | anti-pattern
**Confidence**: high | medium | low
**Context**: [what we were doing]
**Learning**: [what we discovered]
**Example**: [concrete code or file reference]
```

### Retrieval
On session start, load `.behemoth/learnings.md` and surface relevant patterns based on the current task context.

## Pattern Evolution

### Instinct → Skill Pipeline
1. **Instinct** (confidence: low) — First time encountering a pattern
2. **Pattern** (confidence: medium) — Seen 2-3 times, consistently useful
3. **Skill** (confidence: high) — Proven reliable, worth formalizing

When a pattern reaches high confidence after 3+ observations:
- Extract it into a formal skill file in `.behemoth/skills/`
- Reference it in future sessions automatically

### Pattern Categories

#### Convention Patterns
```
Example: "In this project, all API responses use { data, error, meta } shape"
→ Apply to all new endpoints automatically
```

#### Gotcha Patterns
```
Example: "Prisma requires a fresh client after schema changes in dev"
→ Surface this warning when prisma schema is modified
```

#### Workaround Patterns
```
Example: "The date picker library doesn't support timezone-aware dates, use dayjs adapter"
→ Reference when date-related components are being built
```

### Pruning
- Remove learnings older than 90 days with confidence: low
- Merge duplicate learnings into single entries
- Archive learnings that no longer apply (deprecated libraries, etc.)

## Commands
- `/learn` — Manually trigger pattern extraction from current session
- `/learn status` — Show all learnings with confidence levels
- `/learn evolve` — Promote high-confidence patterns to skills
- `/learn prune` — Remove stale or low-confidence entries
