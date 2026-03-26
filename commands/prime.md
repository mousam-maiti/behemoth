Load comprehensive project context to start a productive session:

1. Read directory structure (2 levels deep)
2. Read key project files:
   - `package.json` / `pyproject.toml` / `go.mod` (dependencies and scripts)
   - `tsconfig.json` / `setup.cfg` (configuration)
   - `README.md` (project overview)
   - `.env.example` (required environment variables)
3. Load Behemoth state from `.behemoth/`:
   - Latest 2 session summaries
   - Active plan (if any)
   - Design system (if any)
   - Recent learnings
4. Check git status: current branch, recent commits, uncommitted changes
5. Present a compact context summary:

```
📁 Project: [name] ([language/framework])
📦 Dependencies: [key deps]
🔀 Branch: [branch] (3 uncommitted files)
📋 Plan: [plan name] (4/7 tasks done)
📝 Last session: [summary]
🎨 Design: [style, primary color]
💡 Learnings: [count] patterns captured
```

This replaces manually explaining your project at the start of each session.
