# Coding Style

## File Organization
- One component/module per file
- Files under 300 lines — split if larger
- Functions under 40 lines — extract if longer
- Group imports: external → internal → types

## Naming
- Functions: verb + noun (`getUserById`, `validateInput`)
- Booleans: `is`/`has`/`should` prefix (`isActive`, `hasPermission`)
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case (`user-service.ts`)
- Components: PascalCase (`UserProfile.tsx`)

## Code Quality
- Prefer immutability — use `const`, `readonly`, frozen objects
- No magic numbers — extract to named constants
- Handle errors explicitly — no empty catch blocks
- Prefer early returns over deep nesting
- No commented-out code in commits — use git history

## TypeScript Specifics
- No `any` type — use `unknown` if type is truly unknown
- Use discriminated unions over type assertions
- Prefer interfaces for object shapes, types for unions/intersections
- Enable `strict: true` in tsconfig

## Git
- Commit messages: `type(scope): description` (conventional commits)
- Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`
- Each commit should be a single logical change
- Never commit secrets, .env files, or node_modules
