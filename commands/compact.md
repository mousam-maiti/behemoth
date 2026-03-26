Perform a strategic context compaction. Before compacting:

1. Run `/checkpoint` to save current session state
2. Commit any work in progress: `git add -A && git commit -m "wip: checkpoint before compact"`
3. Summarize what will be retained vs. lost

**When to use:**
- After research/exploration, before implementation
- After completing a milestone, before starting the next
- After debugging, before continuing feature work

**Do NOT use:**
- Mid-implementation (you'll lose file paths, variable names, partial state)
- During active debugging

After compaction, the next message should reload context from `.behemoth/sessions/` and `.behemoth/plans/`.
