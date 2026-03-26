Execute the current plan using subagent-driven development:

1. Read the active plan from `.behemoth/plans/`
2. For each incomplete task, dispatch a fresh subagent with:
   - The task description and acceptance criteria
   - Only the file context relevant to that task
   - TDD mode active (write tests first)
3. After each task, run a two-stage review:
   - **Spec compliance**: Does it match the plan?
   - **Code quality**: Is it clean, tested, and secure?
4. If both pass → commit and move to next task
5. If review fails → re-dispatch with feedback (max 3 retries per task)
6. If 3 retries fail → pause and ask the user for guidance

Progress is tracked directly in the plan file with ✅/❌ markers.

After all tasks complete:
- Run full test suite
- Run security scan
- Present summary of all changes for user review

$ARGUMENTS: Optional — specific task number to start from (e.g., "from task 5")
