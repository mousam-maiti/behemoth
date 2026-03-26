---
name: tdd
description: Enforces RED-GREEN-REFACTOR cycle. Tests first, always.
triggers:
  - "write tests"
  - "test first"
  - "tdd"
---

# Test-Driven Development Skill

## The Cycle

```
RED    → Write a failing test that describes desired behavior
         Run it. Confirm it fails. (If it passes, your test is wrong.)

GREEN  → Write the MINIMUM code to make the test pass
         Not elegant. Not complete. Just enough.
         Run it. Confirm it passes.

REFACTOR → Now clean up. Remove duplication. Improve names.
           Run tests again. Still green? Good.

COMMIT → git add -A && git commit -m "feat: [what you did]"
```

## Rules
1. **Never write production code without a failing test.**
2. **Never write more test than needed to fail.** One assertion per RED step.
3. **Never write more code than needed to pass.** Resist the urge to "finish" the feature.
4. **Tests describe behavior, not implementation.** Test what it does, not how.
5. **Delete code written before its test.** If you accidentally wrote code first, delete it and start with the test.

## Testing Hierarchy
1. **Unit tests** — fast, isolated, most of your tests
2. **Integration tests** — test component boundaries
3. **E2E tests** — critical user flows only (expensive, slow)

## Coverage
- Target: 80%+ on new code
- Never sacrifice test quality for coverage numbers
- Untested code is unfinished code
