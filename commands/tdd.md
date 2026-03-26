Activate strict Test-Driven Development mode. Follow the RED-GREEN-REFACTOR cycle:

1. Write a failing test that describes the desired behavior
2. Run it — confirm it fails
3. Write the minimum code to make it pass
4. Run it — confirm it passes
5. Refactor while tests stay green
6. Commit

Use the `tdd-guide` agent. Never write production code before a test. Delete any code written before its test.

If a plan exists in `.behemoth/plans/`, work through tasks using TDD.

$ARGUMENTS: Optional — specific feature or test to focus on
