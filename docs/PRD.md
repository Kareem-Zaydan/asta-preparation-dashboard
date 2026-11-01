# Product Requirements Document — Asta's Preparation Dashboard

**Version:** 1.0 (reviewed draft)  
**Primary user:** Asta, a fictional Black Bulls Magic Knight preparing for Lucifero.

## Summary and problem
Asta has three training tasks scattered across notes and needs one place to see what remains, mark tasks complete, and track preparation-plan completion. This is a fictional classroom scenario; no user research or product validation is claimed.

## First-version goal
Create one responsive dashboard that displays exactly three fixed tasks, allows completion to be toggled on and off, and immediately calculates progress from task state.

## Exactly three core features
1. **View training tasks:** Show all three titles, descriptions, priorities, and completion statuses.
2. **Toggle completion:** Mark any task complete or undo it using a clearly labeled keyboard-operable button.
3. **See calculated progress:** Show `completed / total` and a rounded percentage computed from the same task list.

## User stories
- As Asta, I want to see all training missions in one view so I know what to practise.
- As Asta, I want to complete and undo a mission so the status reflects reality.
- As Asta, I want to see an accurate progress summary so I can understand how much of the plan is finished.

## Sample data
| Task | Description | Priority | Initial state |
| --- | --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High | Incomplete |
| Physical endurance | Complete a focused strength and stamina session. | Medium | Incomplete |
| Team coordination | Review a preparation plan with the Black Bulls. | High | Incomplete |

## Acceptance criteria
- Opening the dashboard shows the three exact predefined tasks, all incomplete, with `0 / 3` and `0%`.
- Completing one task shows `1 / 3` and `33%`.
- Completing two tasks shows `2 / 3` and `67%`.
- Completing all three tasks shows `3 / 3` and `100%`.
- Undoing one task from a fully complete plan shows `2 / 3` and `67%`.
- Repeatedly toggling the same task alternates its state and never double-counts it.
- The summary never displays less than 0% or more than 100%.
- Every task has clear text status, priority, and an operable button.
- Buttons work with mouse and keyboard, and keyboard focus is visible.
- The layout remains readable at approximately 360px width and on desktop.
- The progress label states that the percentage measures plan completion, not the probability of defeating Lucifero.
- Refresh resets all tasks to incomplete; this limitation is visible and documented.

## Design and accessibility
Use dark charcoal, warm off-white, and restrained red accent. Ensure readable contrast, headings with a clear hierarchy, responsive cards, touch-friendly buttons, visible keyboard focus, semantic landmarks, accessible progress indicator, and text-based statuses (not color alone).

## Stack, assumptions, and limitations
Next.js App Router, TypeScript, React state, Tailwind CSS (with custom CSS for the selected visual system). Data is fictional and hard-coded. State lives only in memory during the browser session; a refresh resets progress. No persistence or server APIs are required.

## Explicit exclusions
No login, accounts, database, payments, chatbot, combat simulation, multiplayer, live anime data, additional routes, task creation, editing, or deletion. No persistence in version 1.

## Reviewed clarification
An earlier vague phrase such as “show progress” is insufficient. We require the exact rounded values 0%, 33%, 67%, and 100%, plus undo and repeated-toggle behavior. See `REVIEW.md` for the decision log.
