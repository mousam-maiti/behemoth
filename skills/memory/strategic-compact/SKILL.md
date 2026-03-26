---
name: strategic-compact
description: Suggests compaction at logical breakpoints instead of waiting for auto-compact at 95%.
---

# Strategic Compact Skill

## When to Compact
- ✅ After research/exploration, before implementation
- ✅ After completing a milestone, before starting the next
- ✅ After debugging, before continuing feature work
- ✅ After a failed approach, before trying a new one
- ✅ After a long discussion, before writing code

## When NOT to Compact
- ❌ Mid-implementation (you'll lose variable names, file paths, partial state)
- ❌ During debugging (you'll lose reproduction steps)
- ❌ While iterating on a specific file

## Before Compacting
1. Run `/checkpoint` to save session state to `.behemoth/sessions/`
2. Commit any work in progress: `git add -A && git commit -m "wip: [state]"`
3. Then `/compact`

## Token Optimization Settings (from ECC)
Recommended in `~/.claude/settings.json`:
```json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```
- Use `sonnet` for 80% of tasks, switch to `opus` for complex architecture
- Compact at 50% context instead of 95% — better quality in long sessions
- Use `/clear` between unrelated tasks (free, instant reset)
