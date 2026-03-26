Analyze test coverage and identify gaps:

1. Run tests with coverage: detect the test runner and run appropriately
   - Node/TS: `npx vitest --coverage` or `npx jest --coverage`
   - Python: `pytest --cov=src --cov-report=term-missing`
   - Go: `go test -cover -coverprofile=coverage.out ./...`
2. Report overall coverage percentage
3. Identify uncovered files and functions — prioritize:
   - Critical paths (auth, payments, data mutation) → must be 100%
   - Business logic → should be 80%+
   - Utilities → 60%+ acceptable
   - Generated code, types, configs → skip
4. For each gap, suggest what test to write (behavior, not implementation)
5. Offer to generate test stubs for uncovered functions

Target: 80%+ overall, 100% on critical paths.

$ARGUMENTS: Optional — specific directory or file to analyze
