---
name: backend-patterns
description: Production patterns for APIs, databases, caching, error handling, and service architecture.
triggers:
  - "API"
  - "endpoint"
  - "database"
  - "backend"
  - "server"
  - "REST"
  - "cache"
---

# Backend Patterns Skill

## REST API Design

### URL Structure
```
GET    /api/v1/users          → List users (paginated)
GET    /api/v1/users/:id      → Get single user
POST   /api/v1/users          → Create user
PUT    /api/v1/users/:id      → Replace user (full update)
PATCH  /api/v1/users/:id      → Partial update
DELETE /api/v1/users/:id      → Delete user

Nested resources:
GET    /api/v1/users/:id/posts → List posts by user
POST   /api/v1/users/:id/posts → Create post for user

Rules:
- Nouns, not verbs (/users not /getUsers)
- Plural (/users not /user)
- Lowercase, kebab-case (/user-profiles not /userProfiles)
- Version in URL (/api/v1/) or header (Accept: application/vnd.api+json;version=1)
- Max 2 levels of nesting
```

### Pagination
```json
// Request
GET /api/v1/users?page=2&per_page=20&sort=created_at&order=desc

// Response
{
  "data": [...],
  "meta": {
    "page": 2,
    "per_page": 20,
    "total": 156,
    "total_pages": 8
  },
  "links": {
    "first": "/api/v1/users?page=1&per_page=20",
    "prev": "/api/v1/users?page=1&per_page=20",
    "next": "/api/v1/users?page=3&per_page=20",
    "last": "/api/v1/users?page=8&per_page=20"
  }
}

// Cursor-based (better for real-time data):
GET /api/v1/feed?cursor=eyJpZCI6MTIzfQ&limit=20
```

### Error Responses
```json
// Always return consistent error shape
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "email", "message": "Invalid email format" },
      { "field": "password", "message": "Must be at least 8 characters" }
    ]
  }
}

// Status codes:
// 200 OK — success with body
// 201 Created — resource created (return the resource)
// 204 No Content — success, no body (DELETE)
// 400 Bad Request — validation error, malformed request
// 401 Unauthorized — not authenticated
// 403 Forbidden — authenticated but not authorized
// 404 Not Found — resource doesn't exist
// 409 Conflict — duplicate, version conflict
// 422 Unprocessable Entity — valid syntax but semantic error
// 429 Too Many Requests — rate limited
// 500 Internal Server Error — never expose stack traces
```

### Request Validation
```
Validate at the boundary:
1. Parse and type-check (Zod, Joi, class-validator)
2. Sanitize (trim whitespace, normalize email)
3. Business rules (is email unique? does the resource exist?)
4. Return ALL validation errors at once (not one at a time)

Never trust client input:
- Validate types (string, number, boolean)
- Validate ranges (min/max length, number bounds)
- Validate formats (email, URL, date)
- Validate enums (status must be one of [...])
- Strip unknown fields (don't accept extra data)
```

## Database Patterns

### Query Optimization
```
1. Always use indexes on columns you WHERE, JOIN, or ORDER BY
2. Avoid SELECT * — list only needed columns
3. Use EXPLAIN ANALYZE to check query plans
4. N+1 prevention: use eager loading / joins, not loops
5. Paginate everything — never return unbounded results
6. Use connection pooling (pgBouncer, built-in pool)
7. Set query timeouts (5s for web, 30s for background)
```

### Migration Best Practices
```
1. Migrations are forward-only in production (no down migrations)
2. Each migration does one thing
3. Always add columns as nullable first, backfill, then add NOT NULL
4. Never rename columns directly — add new, migrate data, drop old
5. Add indexes concurrently (CREATE INDEX CONCURRENTLY)
6. Test migrations against production-size data locally
7. Name format: YYYYMMDDHHMMSS_description.sql
```

### Connection Management
```
Pool settings (PostgreSQL):
- min: 2 (keep warm connections)
- max: 20 (per app instance, not total)
- idleTimeout: 10000ms
- connectionTimeout: 5000ms

Rules:
- Always release connections back to pool (use try/finally)
- Never hold connections during external API calls
- Use transactions for multi-statement operations
- Set statement_timeout per query type
```

## Caching Patterns

### Cache Strategy Decision Tree
```
Is data read-heavy and rarely changes? → Cache-Aside (lazy loading)
Is data needed on every request?       → Read-Through
Must writes be immediately visible?    → Write-Through
Can writes be slightly delayed?        → Write-Behind (async)
Is data expensive to compute?          → Memoization + TTL
```

### Cache-Aside (Most Common)
```
1. Check cache for data
2. If hit → return cached data
3. If miss → query database → store in cache → return data
4. On write → invalidate cache (don't update it)

TTL guidelines:
- User profile: 5 minutes
- Product catalog: 15 minutes
- Static config: 1 hour
- Search results: 30 seconds
```

### Cache Invalidation
```
- Time-based: TTL expiration (simplest, some staleness)
- Event-based: Invalidate on write (consistent, more complex)
- Version-based: Include version in cache key (v2:user:123)
- Never cache: auth tokens, CSRF tokens, one-time data
```

## Error Handling

### Error Architecture
```
Application errors (extend base Error):
- ValidationError (400) — input validation failed
- NotFoundError (404) — resource not found
- ConflictError (409) — duplicate or version conflict
- ForbiddenError (403) — no permission
- ExternalServiceError (502) — third-party API failed

Patterns:
- Catch errors at the boundary (middleware/interceptor)
- Log full error internally (stack trace, context, request ID)
- Return safe error to client (no stack traces, no internal paths)
- Include request ID in error response for debugging
- Use structured logging (JSON, not console.log strings)
```

### Retry Pattern
```
Retry transient failures (network, 429, 503) with exponential backoff:
- Attempt 1: immediate
- Attempt 2: wait 1s
- Attempt 3: wait 2s
- Attempt 4: wait 4s
- Max 3-5 retries
- Add jitter (random 0-500ms) to prevent thundering herd
- Never retry: 400, 401, 403, 404, 422 (client errors won't fix themselves)
```

## Rate Limiting
```
Strategies:
- Fixed window: 100 requests per minute (simple, bursty at edges)
- Sliding window: 100 requests in any 60-second window (smoother)
- Token bucket: refill 2 tokens/sec, max 100 (allows bursts)

Response headers:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 42
X-RateLimit-Reset: 1609459200
Retry-After: 30 (on 429)

Rate limit by:
- API key (for machine clients)
- User ID (for authenticated users)
- IP address (for anonymous/public endpoints)
```

## Service Architecture

### Middleware Order
```
1. Request ID generation
2. Logging (request start)
3. CORS
4. Rate limiting
5. Authentication
6. Authorization
7. Request validation
8. → Route handler →
9. Error handling
10. Logging (request end)
11. Response serialization
```

### Health Checks
```
GET /health → 200 { "status": "ok" }
GET /health/ready → 200 (ready to serve traffic — DB connected, cache warm)
GET /health/live  → 200 (process is alive — even if dependencies are down)

Ready check should verify:
- Database connection pool has available connections
- Redis/cache is reachable
- Required external services are responding
- Disk space is sufficient
```
