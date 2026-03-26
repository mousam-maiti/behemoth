# Testing

## Principles
- Tests describe BEHAVIOR, not implementation
- Each test has exactly one reason to fail
- Tests are independent — no shared mutable state
- Tests run fast — mock external services, not internal logic

## Requirements
- New features require tests BEFORE implementation (TDD)
- Bug fixes require a reproducing test BEFORE the fix
- Target 80%+ coverage on new code
- Critical paths (auth, payments, data mutation) require 100% coverage

## Test Structure
```
describe('[Unit Under Test]', () => {
  describe('[method or scenario]', () => {
    it('should [expected behavior] when [condition]', () => {
      // Arrange — set up test data
      // Act — call the function
      // Assert — verify the result
    });
  });
});
```

## Anti-Patterns
- Testing implementation details (private methods, internal state)
- Tests that always pass (no meaningful assertions)
- Flaky tests that depend on timing or external state
- Over-mocking — if you mock everything, you test nothing
