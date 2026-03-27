Load project context for a productive session:

1. Read directory structure (2 levels)
2. Read package.json / pyproject.toml / go.mod
3. Read README.md
4. Check git status and last 5 commits
5. Load `.behemoth/design-system/MASTER.md` if it exists
6. Present a compact summary:

```
📁 Project: [name] ([stack])
🔀 Branch: [branch] ([N] uncommitted files)
🎨 Design: [style], [primary color], [font]
```
