# Python Rules

## Style
- Follow PEP 8 — use Black for formatting, Ruff for linting
- Type hints on all function signatures (PEP 484)
- Use `from __future__ import annotations` for forward references
- Docstrings on all public functions (Google or NumPy style)
- f-strings for string formatting (not .format() or %)

## Type Hints
```python
from __future__ import annotations
from typing import Optional  # use X | None in 3.10+

def get_user(user_id: int) -> User | None:
    """Fetch user by ID. Returns None if not found."""
    ...

def process_items(items: list[str], *, limit: int = 100) -> dict[str, int]:
    ...
```

## Project Structure
```
src/
├── __init__.py
├── main.py
├── config.py          # Settings via pydantic-settings or environ
├── models/            # Data models (dataclasses, Pydantic, SQLAlchemy)
├── services/          # Business logic
├── api/               # Route handlers
├── repositories/      # Database access
└── utils/             # Shared utilities

tests/
├── conftest.py        # Shared fixtures
├── test_models/
├── test_services/
└── test_api/
```

## Testing
- Use pytest (not unittest)
- Fixtures for setup, parametrize for multiple inputs
- Use `pytest-cov` for coverage
- Mock external services with `unittest.mock` or `pytest-mock`
- Use `httpx` or `TestClient` for API testing

```python
import pytest

@pytest.fixture
def user():
    return User(name="Test", email="test@example.com")

@pytest.mark.parametrize("input,expected", [
    ("valid@email.com", True),
    ("invalid", False),
    ("", False),
])
def test_validate_email(input: str, expected: bool):
    assert validate_email(input) == expected
```

## Dependencies
- Use `pyproject.toml` (not setup.py or requirements.txt)
- Pin exact versions for applications, ranges for libraries
- Use `uv` or `pip-compile` for reproducible installs
- Virtual environments always (never install globally)

## Error Handling
```python
# Custom exceptions
class NotFoundError(Exception):
    def __init__(self, resource: str, id: int):
        super().__init__(f"{resource} {id} not found")

# Never bare except
try:
    result = risky_operation()
except SpecificError as e:
    logger.error("Operation failed", exc_info=e)
    raise
# except:  ← NEVER do this
```

## Django Specifics
- Fat models, thin views — business logic in models/managers
- Use `select_related` / `prefetch_related` to prevent N+1
- Custom User model from day 1 (`AbstractUser`)
- Use Django REST Framework for APIs
- Celery for background tasks

## FastAPI Specifics
- Pydantic models for request/response validation
- Dependency injection for services
- Use `BackgroundTasks` for simple async work
- Use `lifespan` context manager for startup/shutdown
