Run a two-stage code review on recent changes:

**Stage 1 — Spec Compliance**: Check if the code matches the plan/spec in `.behemoth/plans/` or `.behemoth/designs/`.
**Stage 2 — Code Quality**: Scan for security issues, missing error handling, test coverage, naming, and style.

Report findings by severity: Critical (blocks merge), Major (should fix), Minor, Nit.

Use the `code-reviewer` agent. If no plan exists, review against general best practices.

$ARGUMENTS: Optional — file path, branch name, or "staged" to review only staged changes
