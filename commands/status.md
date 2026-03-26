Show a quick project status dashboard:

1. **Active Plan** — Read `.behemoth/plans/` for in-progress plans. Show completed vs. remaining tasks.
2. **Recent Sessions** — Read `.behemoth/sessions/` for last 2-3 session summaries. Show what was done and what's next.
3. **Design System** — Check if `.behemoth/design-system/MASTER.md` exists. Show key colors and fonts.
4. **Git Status** — Run `git status --short` and `git log --oneline -5` to show recent changes.
5. **Test Health** — Run the project's test command and report pass/fail count.

Format as a compact dashboard:

```
📋 Plan: user-auth (4/7 tasks done)
📝 Last session: Mar 25 — Implemented login endpoint
🎨 Design: Minimalist, #2563EB primary, Inter font
🔀 Git: 3 files modified, on branch feat/user-auth
✅ Tests: 42 pass, 0 fail, 87% coverage
```
