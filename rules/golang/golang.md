# Go Rules

## Style
- Run `gofmt` / `goimports` on every save
- Use `golangci-lint` with a project `.golangci.yml`
- Follow Effective Go and Go Code Review Comments
- Package names: short, lowercase, single-word (no underscores)
- Interface names: method + "er" suffix (Reader, Writer, Stringer)

## Error Handling
```go
// Always handle errors — never ignore
result, err := doSomething()
if err != nil {
    return fmt.Errorf("doSomething failed: %w", err) // wrap with %w
}

// Custom errors
var ErrNotFound = errors.New("not found")
var ErrConflict = errors.New("conflict")

// Check with errors.Is
if errors.Is(err, ErrNotFound) {
    http.Error(w, "Not found", 404)
}

// Never: _, _ = doSomething()
```

## Project Structure
```
cmd/
├── server/main.go       # Entry point
internal/
├── handler/             # HTTP handlers
├── service/             # Business logic
├── repository/          # Database access
├── model/               # Domain types
└── middleware/           # HTTP middleware
pkg/                     # Public libraries (if any)
migrations/              # SQL migrations
```

## Testing
```go
// Table-driven tests (standard pattern)
func TestValidateEmail(t *testing.T) {
    tests := []struct {
        name  string
        input string
        want  bool
    }{
        {"valid email", "user@example.com", true},
        {"missing @", "invalid", false},
        {"empty", "", false},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := ValidateEmail(tt.input)
            if got != tt.want {
                t.Errorf("ValidateEmail(%q) = %v, want %v", tt.input, got, tt.want)
            }
        })
    }
}
```

## Concurrency
- Use goroutines for concurrent work, channels for communication
- Always use `context.Context` for cancellation and timeouts
- Use `sync.WaitGroup` for fan-out/fan-in
- Use `sync.Mutex` for shared state (prefer channels when possible)
- Never start a goroutine without a way to stop it
- Use `errgroup.Group` for concurrent operations that can fail

## Dependencies
- Use Go modules (`go.mod`)
- Vendor dependencies for reproducible builds: `go mod vendor`
- Minimal dependencies — stdlib covers most needs
- Vet new dependencies: maintenance, license, transitive deps

## HTTP
- Use `net/http` stdlib or chi/echo (not gin — too magical)
- Always set timeouts on `http.Server` and `http.Client`
- Use middleware for logging, auth, CORS, rate limiting
- Graceful shutdown with `signal.NotifyContext`
