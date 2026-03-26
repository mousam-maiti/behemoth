---
name: database-migrations
description: Safe database migration patterns for Prisma, Drizzle, Django, SQLAlchemy, and raw SQL.
triggers:
  - "migration"
  - "schema change"
  - "add column"
  - "alter table"
  - "prisma migrate"
  - "drizzle"
---

# Database Migrations Skill

## Golden Rules
1. **Never break production.** Every migration must be backward-compatible with the currently deployed code.
2. **One migration, one change.** Don't bundle unrelated schema changes.
3. **Test with real data volumes.** A migration on 10 rows is not the same as on 10 million.
4. **No down migrations in production.** Write a new forward migration to undo changes.

## Safe Patterns

### Adding a Column
```sql
-- Safe: nullable column with default
ALTER TABLE users ADD COLUMN bio TEXT DEFAULT NULL;

-- Unsafe: NOT NULL without default on existing table
-- ALTER TABLE users ADD COLUMN bio TEXT NOT NULL; ← BREAKS on existing rows
```

### Renaming a Column (3-step)
```
Step 1 (deploy): Add new column, copy data
  ALTER TABLE users ADD COLUMN full_name TEXT;
  UPDATE users SET full_name = name;

Step 2 (deploy): Update app to read/write both columns
  Code reads from full_name, writes to both

Step 3 (deploy): Drop old column
  ALTER TABLE users DROP COLUMN name;
```

### Adding an Index
```sql
-- Safe: concurrent index (PostgreSQL, no table lock)
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);

-- Unsafe: regular index (locks table for writes)
-- CREATE INDEX idx_users_email ON users(email);
```

### Dropping a Table/Column
```
Step 1: Stop writing to it (code change)
Step 2: Wait for deploy to propagate
Step 3: Drop in migration
Step 4: Remove read code
```

## Framework-Specific

### Prisma
```bash
npx prisma migrate dev --name add_user_bio    # Development
npx prisma migrate deploy                      # Production
npx prisma db push                             # Prototype (no migration file)
```

### Drizzle
```bash
npx drizzle-kit generate                       # Generate migration
npx drizzle-kit migrate                        # Apply migration
```

### Django
```bash
python manage.py makemigrations                # Generate
python manage.py migrate                       # Apply
python manage.py showmigrations                # Status
```

### Raw SQL
```
Naming: YYYYMMDDHHMMSS_description.sql
Location: migrations/ or db/migrations/
Apply with: migrate tool, Flyway, golang-migrate, or custom runner
Track state in: schema_migrations table (migration name + timestamp)
```
