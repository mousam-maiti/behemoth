Extract reusable patterns and lessons from the current session:

1. Review what was done in this session — code written, bugs fixed, decisions made
2. Identify patterns worth remembering:
   - **Project conventions** — naming patterns, file organization, API patterns discovered
   - **Gotchas** — things that broke unexpectedly, non-obvious constraints
   - **Workarounds** — platform limitations and how they were handled
   - **Best approaches** — techniques that worked well for this codebase
3. Save to `.behemoth/learnings.md` as an append-only log:

```markdown
## [date] — [topic]
**Context**: [what we were doing]
**Pattern**: [what we learned]
**Example**: [concrete code or file reference]
```

This file is automatically loaded on session start and helps avoid repeating mistakes.

Rules:
- Only extract patterns that are specific to THIS project (not general best practices)
- Include concrete examples, not abstract principles
- Keep each entry brief — 3-5 lines maximum
- Don't duplicate patterns already captured

$ARGUMENTS: Optional — specific topic to extract learnings about
