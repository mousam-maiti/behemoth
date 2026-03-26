Create a pull request for the current branch:

1. Ensure branch is up to date: `git fetch origin && git rebase origin/main`
2. Run full test suite — all tests must pass
3. Run security scan — no critical issues
4. Generate PR description:
   - **What**: Brief description of changes
   - **How**: Technical approach taken
   - **Testing**: What was tested
   - Checklist: tests pass, no secrets, docs updated, self-reviewed
5. Create PR: `gh pr create --title "type: description" --body "[generated]" --base main`

PR title must follow conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`

$ARGUMENTS: Optional — override PR title
