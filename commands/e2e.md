Generate end-to-end tests for critical user flows:

1. Identify the critical user flows in the application (auth, checkout, CRUD operations, etc.)
2. For each flow, create a Playwright/Cypress test that:
   - Navigates through the real UI
   - Fills forms with realistic test data
   - Asserts on visible outcomes (not implementation details)
   - Cleans up test data after each run
3. Use Page Object Model pattern for maintainability
4. Include both happy path and key error scenarios

Structure:
```
tests/e2e/
├── pages/           # Page objects
│   ├── login.page.ts
│   └── dashboard.page.ts
├── flows/           # User flow tests
│   ├── auth.spec.ts
│   └── onboarding.spec.ts
└── helpers/         # Test utilities
    └── fixtures.ts
```

Rules:
- E2E tests should be few and focused — test critical paths only
- Each test should be independent (no test ordering dependencies)
- Use data-testid attributes for selectors (not CSS classes or XPath)
- Tests must work in CI (headless mode, no manual setup)

$ARGUMENTS: Optional — specific user flow to test (e.g., "user registration flow")
