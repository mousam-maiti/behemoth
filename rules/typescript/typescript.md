# TypeScript Rules

## Type Safety
- Enable `strict: true` in tsconfig.json — no exceptions
- Never use `any` — use `unknown` if type is truly unknown, then narrow
- Prefer interfaces for object shapes, type aliases for unions/intersections/utilities
- Use discriminated unions for state machines and polymorphic types
- Use `as const` for literal types instead of type assertions
- Use `satisfies` operator to validate types without widening

## Patterns
```typescript
// Discriminated unions (not string enums)
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// Exhaustive switch
function handle(result: Result<User>) {
  switch (result.status) {
    case 'success': return result.data;
    case 'error': throw new Error(result.error);
    default: const _exhaustive: never = result; // compile error if case missing
  }
}

// Zod for runtime validation
const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
});
type User = z.infer<typeof UserSchema>; // derive type from schema
```

## Imports
```typescript
// Order: external → internal → types → styles
import { useState } from 'react';           // external
import { UserService } from '@/services';    // internal
import type { User } from '@/types';         // types (type-only import)
import styles from './Component.module.css'; // styles
```

## Async/Await
- Always handle errors in async functions (try/catch or .catch())
- Use `Promise.all()` for independent concurrent operations
- Use `Promise.allSettled()` when some failures are acceptable
- Never use `async void` functions except for event handlers
- Set timeouts on all external calls

## Project Config
```json
// tsconfig.json essentials
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "forceConsistentCasingInFileNames": true,
    "verbatimModuleSyntax": true
  }
}
```
