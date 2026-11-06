# Engineering Review and Reflection

## AI-assisted requirement correction

**Changed:** The vague requirement "Show a nice progress bar" was replaced with measurable acceptance criteria: 0/3 = 0%, 1/3 = 33%, 2/3 = 67%, and 3/3 = 100%.

**Why:** A progress indicator must display accurate values, not just look attractive. The user must also be able to undo completion and toggle tasks repeatedly without incorrect counting.

**Review note:** Confirm this describes a correction actually made during the project.

## Verification checklist

- [ ] `npm install` completed — not separately verified.
- [x] `npm test` passed.
- [x] `npm run lint` passed.
- [x] `npm run build` passed.
- [x] Initial state displays 0/3 and 0%.
- [x] Completing one, two, and three tasks displays 33%, 67%, and 100%.
- [x] Undo and repeated toggles produce correct values.
- [x] Keyboard Tab, Enter, and Space work correctly.
- [x] Buttons display a visible focus indicator.
- [x] Desktop layout checked.
- [x] Mobile layout checked at approximately 360px width.
- [x] Refresh resets progress to 0%, as documented.
- [ ] Final review for fake buttons, unnecessary features, and committed credentials.
- [ ] Final comparison with the selected Stitch design and documentation of any meaningful mismatch corrected.

### Keyboard testing

**Result: PASSED**

Using the Tab key, I navigated to the Complete button and observed a visible focus outline.

Pressing Enter completed the task and updated progress from 0% to 33%.

Pressing Space on the focused Undo button reversed the task completion and returned progress to 0%.

### Responsive layout testing

**Result: PASSED**

I tested the dashboard on desktop and using Chrome Developer Tools at a 360px mobile viewport.

The training cards, completion controls, and progress summary were readable and usable at mobile width.

### Refresh testing

**Result: PASSED**

After completing a task, refreshing the browser returned the dashboard to its initial state.

This matches the documented session-only state behavior. Saving progress after refresh is outside the MVP scope.

## One-person usability test

**Status: NOT YET PERFORMED**

I have not been able to arrange a test with another person.

No user feedback has been invented or presented as real research.

**Remaining action:** Ask one person to find the training tasks, complete a task, and explain the progress percentage. Record their actual observations, any confusion, and an improvement made or proposed.

## Reflection

### How did the PRD prevent unnecessary features?

The PRD defined exactly three core features: viewing training tasks, toggling completion, and calculating progress. It excluded unnecessary features such as login, databases, chat, and task editing.

### What did the POC test, and what did it not prove?

The POC tested whether task completion, undo, repeated toggling, and progress calculations worked correctly.

It did not prove that the interface was easy to use or that real users wanted the product.

### Why is the MVP useful?

The dashboard helps Asta organize his preparation for Lucifero. He can see his three training tasks, complete them, undo mistakes, and immediately see his preparation progress.

### What did MCP enable?

I connected the coding agent in VS Code to Google Stitch using MCP.

The connection was successful, and the agent used Stitch tools to list projects, find Asta's Preparation Dashboard, and retrieve available design context.

This allowed the agent to access information about the selected design through a real tool connection rather than relying only on manually supplied screenshots.

The connection evidence is documented in `docs/MCP.md`.

### Which AI-generated decision did you correct?

The proposed correction was to replace a vague progress requirement with exact, testable acceptance criteria.

The percentage must reflect the number of completed tasks, including after undoing and repeatedly toggling tasks.

This correction should be confirmed against the actual project review history before submission.

### Explain task state and progress calculation.

React `useState` stores the three training tasks and their completion status.

When a task button is activated, the application updates that task's `completed` value.

The application counts completed tasks and calculates the percentage using:

`Math.round((completed / total) * 100)`

For three tasks, this produces 0%, 33%, 67%, and 100%.

The count and percentage are calculated from the same task state, keeping them consistent.

### What remains the engineer's responsibility?

Even when AI helps generate code, the engineer remains responsible for defining requirements, reviewing design decisions, testing functionality, checking accessibility, protecting credentials, and reporting results accurately.

AI can assist with implementation, but the engineer must verify that the final product meets the assignment requirements.