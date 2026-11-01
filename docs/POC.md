# Proof of Concept — Training Completion Consistency

## Question

Can task completion and progress remain consistent when three tasks are completed, undone, and toggled repeatedly?

## Approach

The POC uses isolated logic in `lib/training.ts` and automated tests in `tests/progress.test.mjs`.

- `toggleTask` immutably changes one task's `completed` boolean.
- `getProgress` calculates the completed task count and rounded percentage from the task list.
- The dashboard uses the same logic to keep task status and progress synchronized.

## Test Matrix and Actual Results

| Action | Expected | Actual result |
| --- | --- | --- |
| Initial state | 0 / 3, 0% | Passed |
| Complete one task | 1 / 3, 33% | Passed |
| Complete two tasks | 2 / 3, 67% | Passed |
| Complete three tasks | 3 / 3, 100% | Passed |
| Undo one task | 2 / 3, 67% | Passed |
| Repeated toggles | Progress alternates correctly | Passed |

## Automated Test Results

**Date:** November 1, 2026

**Command:**

`npm test`

**Console results:**

```text
tests 1
pass 1
fail 0
cancelled 0
skipped 0
duration_ms 107.2612
```

The automated test command completed successfully with no failures.

## Manual Browser Testing

The dashboard was opened locally at `http://localhost:3000`.

The following behaviors were verified:

1. The dashboard initially displayed 0% progress.
2. Completing Sword control updated progress to 33%.
3. Completing all three missions updated progress to 100%.
4. Undoing one completed mission reduced progress to 67%.
5. Repeatedly completing and undoing the same mission updated progress correctly.

## Observation

Storing a separate progress percentage could cause inconsistencies between task completion states and the displayed progress.

The implementation avoids this by deriving the completed count and percentage from the task array.

The observed manual behavior remained consistent during the tested interactions.

## Evidence

`docs/evidence/poc.png` — Dashboard showing all three missions completed and progress at 100%.

## Decision

**POC PASSED.**

The automated test and manual browser checks passed. The task completion logic is suitable for use in the dashboard MVP.

## Git Checkpoint

The POC is ready for a Git checkpoint. The commit has not yet been confirmed.