---
name: git-workflow
description: Git worktrees for parallel development, branch management, PR creation, and merge strategies.
triggers:
  - "worktree"
  - "branch"
  - "pull request"
  - "PR"
  - "merge"
  - "git flow"
---

# Git Workflow Skill

## Git Worktrees (Parallel Development)

### Why Worktrees?
Instead of stashing or switching branches, create isolated workspaces:
```bash
# Create worktree for a feature
git worktree add ../my-project-feat-auth feat/auth

# Create worktree from new branch
git worktree add ../my-project-hotfix -b hotfix/login-bug

# List active worktrees
git worktree list

# Remove when done
git worktree remove ../my-project-feat-auth
```

### Worktree + Subagent Pattern
1. Create a worktree for the task
2. Dispatch a subagent to work in the worktree
3. Review the work in the worktree
4. Merge back to main branch
5. Remove the worktree

## Branch Strategy

### Naming Convention
```
feat/short-description     → New features
fix/short-description      → Bug fixes
refactor/short-description → Code restructuring
docs/short-description     → Documentation
test/short-description     → Test additions
chore/short-description    → Build, config, deps
hotfix/short-description   → Urgent production fixes
```

### Branch Rules
- `main` is always deployable
- Never commit directly to `main` — always via PR
- Branches are short-lived (merge within 1-3 days)
- Delete branches after merge
- Rebase feature branches onto main before PR (clean history)

## Pull Request Workflow

### Creating a PR
```bash
# Ensure branch is up to date
git fetch origin
git rebase origin/main

# Push branch
git push origin feat/my-feature

# Create PR with GitHub CLI
gh pr create --title "feat: add user authentication" \
             --body "## Changes\n- Added login endpoint\n- Added JWT middleware\n\n## Testing\n- Unit tests added\n- Manual testing done" \
             --base main
```

### PR Template
```markdown
## What
[Brief description of what changed and why]

## How
[Technical approach taken]

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing done
- [ ] No regressions

## Screenshots
[If UI changes]

## Checklist
- [ ] Code follows project conventions
- [ ] Self-reviewed the diff
- [ ] No secrets in code
- [ ] Documentation updated
```

### PR Review Process
1. Self-review the diff before requesting review
2. Keep PRs small (<400 lines changed)
3. One concern per PR (don't mix features with refactors)
4. Respond to all review comments before re-requesting
5. Squash merge to main (clean history)

## Merge Strategies
```
Squash merge (recommended for features):
  git merge --squash feat/my-feature
  → One clean commit on main

Rebase merge (for clean linear history):
  git rebase main feat/my-feature
  → Replays commits on top of main

Regular merge (for long-lived branches):
  git merge feat/my-feature
  → Preserves branch history with merge commit
```

## Finishing a Development Branch
After all tasks are complete:
1. Run full test suite
2. Run security scan
3. Rebase onto latest main
4. Create PR with summary of changes
5. Request review
6. After approval: squash merge
7. Delete feature branch
8. Remove worktree if used
9. Tag release if applicable
