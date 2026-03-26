# Swift Rules

## Style
- Follow Swift API Design Guidelines
- Use SwiftLint for enforcement
- Prefer value types (structs) over reference types (classes) unless inheritance is needed
- Use `let` by default, `var` only when mutation is required
- Avoid force unwrapping (`!`) — use `guard let`, `if let`, or `??`

## SwiftUI
- Use `@State` for view-local state
- Use `@Binding` for state passed from parent
- Use `@StateObject` for reference types owned by the view
- Use `@ObservedObject` for reference types owned elsewhere
- Use `@EnvironmentObject` for app-wide state
- Keep views small — extract subviews as separate structs
- Use `NavigationStack` (not deprecated `NavigationView`)

## Concurrency (Swift 6.2+)
- Use `async/await` for asynchronous code
- Use `Task` groups for concurrent work
- Use actors for thread-safe shared mutable state
- Mark `@MainActor` for UI-updating code
- Use `@Sendable` closures for cross-actor boundaries

## Testing
- Use XCTest framework
- Protocol-based dependency injection for testability
- Mock external services with protocol conformances
- Use `XCTAssertEqual`, `XCTAssertThrowsError`, `XCTAssertNil`

## Error Handling
```swift
enum AppError: LocalizedError {
    case notFound(String)
    case networkError(underlying: Error)
    
    var errorDescription: String? {
        switch self {
        case .notFound(let resource): return "\(resource) not found"
        case .networkError(let err): return "Network error: \(err.localizedDescription)"
        }
    }
}
// Use do/try/catch — never try! in production
```
