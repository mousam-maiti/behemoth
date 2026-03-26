Fix a GitHub issue using a structured workflow:

1. Fetch issue details: `gh issue view $ARGUMENTS`
2. Analyze the issue — understand the problem, acceptance criteria, and scope
3. Create a feature branch: `git checkout -b fix/issue-<number>-<slug>`
4. Write a failing test that reproduces the issue
5. Implement the fix using TDD (RED → GREEN → REFACTOR)
6. Run full test suite — no regressions
7. Commit: `fix: <description> (closes #<number>)`
8. Offer to create a PR with `/create-pr`

If the issue is unclear, ask clarifying questions before starting.

$ARGUMENTS: GitHub issue number (e.g., 42)
