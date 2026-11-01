
# Design Document — Asta's Preparation Dashboard

## 1. Design Tool

Google Stitch was used to generate and refine the dashboard design.

## 2. Design Goal

Create a simple, responsive dashboard that helps Asta understand his training tasks and preparation progress.

## 3. Visual Style

- Background: Dark charcoal
- Primary text: Warm white
- Accent color: Red/crimson
- Typography: Clear, readable headings and body text
- Layout: Responsive desktop and mobile layouts
- Controls: Large, clearly labeled completion buttons

## 4. Dashboard Sections

1. Dashboard title and introduction
2. Lucifero threat information
3. Training progress summary
4. Three training task cards

## 5. Initial Design

The first Stitch design included the required dashboard features.

However, it also contained:
- Excessive technical labels
- Unnecessary navigation elements
- Fictional statistics
- Small text and complicated descriptions

Evidence: `evidence/stitch-before.png`

## 6. Design Refinement

A second prompt was submitted to Google Stitch to improve readability and simplify the interface.

The refined mobile design includes:
- Larger, more readable text
- Three vertically stacked training cards
- Clearer completion buttons
- Simplified descriptions
- A visible progress summary
- A compact Lucifero threat card

Evidence: `evidence/stitch-after.png`

## 7. Reason for the Changes

The original design was visually detailed but difficult to scan.

The refinement prioritizes Asta's main needs:
- Identify the next training task
- Mark a task as completed
- Understand preparation progress

The simplified layout is better suited to a mobile screen.

## 8. Limitations

The refined mobile design was generated in Stitch.

The desktop design still contains some unnecessary information and may need additional refinement.

Stitch designs are visual references. Actual functionality must be implemented and tested separately in Next.js.
