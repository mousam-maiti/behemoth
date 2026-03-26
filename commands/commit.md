Create a git commit using conventional commit format:

1. Run `git diff --staged` to see what's being committed
2. Analyze the changes and determine the type:
   - `feat` — new feature or capability
   - `fix` — bug fix
   - `refactor` — code restructuring without behavior change
   - `test` — adding or updating tests
   - `docs` — documentation changes
   - `chore` — build, config, dependency changes
   - `perf` — performance improvement
   - `style` — formatting, whitespace (no code change)
3. Determine the scope (which module/component was changed)
4. Write a concise description (imperative mood, lowercase, no period)
5. If the change is substantial, add a body explaining WHY (not what — the diff shows what)
6. Execute: `git commit -m "type(scope): description"`

Examples:
- `feat(auth): add password reset flow`
- `fix(api): handle null response from payment gateway`
- `refactor(db): extract query builder into shared utility`
- `test(auth): add integration tests for OAuth callback`

Rules:
- Each commit should be one logical change
- Never commit secrets, .env files, or node_modules
- If changes span multiple unrelated areas, split into separate commits

$ARGUMENTS: Optional — override the commit message
