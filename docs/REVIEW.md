# Engineering review and reflection

## AI-assisted requirement correction
**Changed:** “Show a nice progress bar” was replaced with measurable values and undo/repeated-toggle criteria. **Why:** Attractive UI alone cannot establish correctness; 1/3 must round to 33% and 2/3 to 67%. This is a proposed documented review decision; confirm it reflects your own review before submission.

## Verification checklist — complete with actual evidence
- [ ] `npm install` completed.
- [ ] `npm test` passed; output captured.
- [ ] `npm run lint` passed; output captured.
- [ ] `npm run build` passed; output captured.
- [ ] Initial state: 0 / 3, 0%.
- [ ] One, two, three tasks: 33%, 67%, 100%.
- [ ] Undo and repeated toggles produce correct values.
- [ ] Keyboard Tab, Enter/Space, and visible focus work.
- [ ] Tested at ~360px width and desktop; screenshot saved.
- [ ] Refresh resets state as documented.
- [ ] No fake buttons, extra features, or credentials.
- [ ] Compared app to actual selected Stitch design and fixed a meaningful mismatch (describe it).

## One-person usability test — NOT YET PERFORMED
Ask a friend/classmate to locate the tasks, complete one, and explain the percentage. Record date, their real actions or words, any confusion, and one improvement made or proposed. Do not invent their feedback.

## Reflection prompts with draft answers (review in your own words)
**How did the PRD prevent unnecessary features?** It explicitly excluded accounts, databases, task editing, and chat, keeping focus on the three required actions.

**What did the POC test, and what did it not prove?** It checks task state and arithmetic. It does not prove that the design is usable, that MCP works, or that real users want the product.

**Why is the MVP useful?** Asta can see his exact plan, mark progress, undo mistakes, and immediately see how much is finished.

**What did MCP enable / how did fallback work?** Fill this in after your actual connection attempt. MCP would let an agent retrieve Stitch design context through tools; exported screenshots provide manual context instead.

**Which AI-generated decision did you correct?** The vague progress requirement was replaced by exact acceptance criteria (confirm or replace with a decision you actually made).

**Explain state and progress.** React `useState` holds three task objects. A click maps over the array and flips one boolean. `filter` counts completed tasks. `Math.round(completed / total * 100)` derives the percentage, so count and percent cannot drift apart.

**What remains the engineer's responsibility?** Defining scope, checking the agent's assumptions, verifying actual tests and accessibility, comparing design to implementation, securing credentials, and accurately reporting evidence.
