# Asta's Preparation Dashboard

**Student:** Kareem Zaydan 
**Course:** TechTalks Full-Stack Bootcamp — Assignment 2  
**Branch:** `assignment-2-asta-mvp`

A small responsive dashboard for Asta to view three fixed training tasks, complete/undo each task, and see accurate plan-completion progress before facing Lucifero.

## Technology
Next.js App Router, React, TypeScript, Tailwind CSS v4, and custom responsive CSS.

## Run locally
Requires a compatible recent Node.js release (Node 20.9+ recommended; Node 22 or 24 preferred).

```bash
npm install
npm run dev
```

Open http://localhost:3000. To verify:

```bash
npm test
npm run lint
npm run build
```

## Project structure
- `app/page.tsx`: home route.
- `app/layout.tsx`: metadata and root layout.
- `app/globals.css`: responsive appearance.
- `components/TrainingDashboard.tsx`: interactive client dashboard.
- `lib/training.ts`: predefined tasks and pure progress logic.
- `tests/progress.test.mjs`: automated core-logic tests.
- `docs/PRD.md`: reviewed requirements draft.
- `docs/DESIGN.md`: design decisions and required Stitch evidence.
- `docs/MCP.md`: MCP connection guide and pending real evidence.
- `docs/POC.md`: experiment and expected results; real test results pending.
- `docs/REVIEW.md`: verification and usability test checklist.
- `docs/evidence/`: add actual screenshots.

## How it works
`useState(initialTasks)` stores the three completion flags. A click calls `toggleTask`, which returns a new array with the matching task flipped. `getProgress` counts completed tasks and rounds `completed / total × 100`, producing 0%, 33%, 67%, or 100%. The count and percent are derived, never independently stored.

## Known limitations
Progress is session-only and **resets on refresh**. No account, database, task editing, or persistence. The UI uses text and an original typographic/emblem treatment rather than copyrighted anime character images. This packaged project has **not** been verified against a real Stitch design or MCP connection; those evidence steps remain for the student.

## Assignment completion steps
1. Create a new **public** GitHub repository, and in this folder run `git init`, `git switch -c assignment-2-asta-mvp`, and `git remote add origin YOUR_REPOSITORY_URL`.
2. To preserve the instructor's POC checkpoint, stage `lib/training.ts`, `tests/progress.test.mjs`, `docs/POC.md`, and initial project config, run tests, then commit with `Test training progress proof of concept`. Add and commit the full dashboard afterward. If you already committed everything together, document the honest sequence; do not fabricate Git history.
3. Generate and refine the actual Stitch design. Capture before/after desktop/mobile screenshots and record the share URL and improvement in `docs/DESIGN.md`.
4. Attempt the actual Stitch MCP connection, capture the real tool result, or document the actual failure and manual design handoff in `docs/MCP.md`.
5. Run tests, lint, build, manual keyboard/mobile checks; record actual results in `docs/POC.md` and `docs/REVIEW.md`.
6. Ask one person to try the dashboard; record their real feedback in `docs/REVIEW.md`.
7. Compare the final dashboard with your selected Stitch design and fix at least one meaningful mismatch if found.
8. Capture MVP screenshots in `docs/evidence/` and ensure no API keys or secrets are committed.
9. Commit and push: `git add .`, `git commit -m "Complete Asta preparation MVP"`, `git push -u origin assignment-2-asta-mvp`.
10. Email `khaled@techtalkslb.com` with subject `Assignment 2 – Asta’s Preparation Dashboard – Kareem Zaydan`, your name, public repository URL, branch, Stitch link/screenshots, MCP success or fallback, and known issues.

A live deployment is optional. The assignment page does not specify a deadline.
