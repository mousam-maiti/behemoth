# Performance & Token Management

## Model Selection
- Use `sonnet` for 80% of tasks (coding, testing, documentation)
- Switch to `opus` for complex architecture, deep debugging, nuanced design
- Use `haiku` for subagent tasks that are mechanical (formatting, simple extraction)

## Context Window
- Keep under 10 MCP servers enabled per project
- Keep under 80 tools active
- Use `/clear` between unrelated tasks (free, instant reset)
- Use `/compact` at logical breakpoints (after research, after milestones)
- Run `/checkpoint` before every `/compact`

## Efficient Prompting
- Be specific: "Add input validation to the signup form in `src/components/SignupForm.tsx`"
- Not vague: "Improve the signup experience"
- Front-load important context — put file paths and constraints first
- Use subagents for parallel work on independent tasks

## Code Performance
- Measure before optimizing — no premature optimization
- Database queries: use indexes, avoid N+1, paginate results
- Frontend: lazy load routes and heavy components
- API: implement pagination, caching, rate limiting
