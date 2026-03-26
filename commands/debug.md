Debug the reported issue using a systematic 4-phase process:

## Phase 1: Reproduce
- Write a failing test that demonstrates the bug
- If a test isn't feasible, document exact reproduction steps
- Confirm the bug actually exists (don't fix phantom issues)

## Phase 2: Isolate
- Narrow down: which file, function, and line causes the behavior?
- Use binary search: comment out half the code, does the bug persist?
- Check git blame: when was this code last changed?
- Read error messages carefully — they usually tell you exactly what's wrong

## Phase 3: Fix
- Fix the root cause, not the symptom
- The fix should be the smallest possible change
- If the fix is complex, explain WHY in a code comment
- Make the failing test pass

## Phase 4: Verify
- Run the full test suite — no regressions
- Test edge cases around the fix
- Commit: `fix: [what was broken and why]`

Rules:
- Never use print/console.log debugging as your primary tool — use tests
- Never "fix" a bug by suppressing the error
- If you can't reproduce it, you can't fix it — get more information first
- Save debug findings to `.behemoth/sessions/` for future reference

$ARGUMENTS: Description of the bug, error message, or issue number
