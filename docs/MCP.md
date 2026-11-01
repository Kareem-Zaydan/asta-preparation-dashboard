# Stitch MCP Connection — Verification Log

## Roles

- **Host:** Visual Studio Code (VS Code) on Windows.
- **Client:** The MCP client integrated with the VS Code AI Chat agent.
- **Server:** Google Stitch MCP server, accessed through `https://stitch.googleapis.com/mcp`.

## Setup and Evidence

1. Opened the Google Stitch project **Asta's Preparation Dashboard**.
2. Generated a Stitch API key through the Stitch MCP setup interface.
3. Configured the Stitch MCP server in `.vscode/mcp.json` using HTTP transport.
4. Added `.vscode/mcp.json` to `.gitignore` to prevent accidentally committing the API key.
5. Started the Stitch MCP server in VS Code.
6. Confirmed that the server reached the `Running` state and discovered **16 tools**.
7. Used the VS Code AI Chat agent to invoke Stitch MCP tools and inspect the project.

The API key is not included in this documentation or evidence screenshots.

## Real Result

- **Host/client:** VS Code with its integrated AI Chat MCP client.
- **Server status:** Running.
- **Available tools:** 16 discovered.
- **Project name:** Asta's Preparation Dashboard.
- **Project ID:** `projects/789639375535299801`.
- **Project visibility:** Owned/private.

### Actual MCP Tool Calls

**1. `list_projects`**

- **Request:** List available Stitch projects.
- **Result:** Successfully found Asta's Preparation Dashboard.

**2. `get_project`**

- **Request:** Retrieve project details for `projects/789639375535299801`.
- **Result:** Successfully retrieved the selected Stitch project.

**3. `list_screens`**

- **Request:** List the available screens in the project.
- **Result:** Found two screen variants:
  - Desktop: Asta's Preparation Dashboard — 2560 × 2742.
  - Mobile: Asta's Preparation Dashboard - Mobile — 780 × 2522.

**4. `download_file`**

- **Request:** Retrieve the screen HTML definitions.
- **Result:** Successfully retrieved the desktop and mobile design files for inspection.

### Design Context Retrieved

The desktop screen contains a dark-themed dashboard with a header, hero section, training mission cards, progress summary, threat intelligence panel, and footer.

The mobile screen adapts the same content into a responsive, vertically stacked layout.

The agent confirmed that it did not modify any files or designs during the inspection.

## Evidence

- `docs/evidence/mcp-success.png` — VS Code screenshot showing the running Stitch MCP server, 16 discovered tools, and the AI agent's design inspection response.
- `docs/evidence/stitch-before.png` — Earlier dashboard evidence.
- `docs/evidence/stitch-after.png` — Updated dashboard evidence.

## Fallback

A manual screenshot or design export can be used if MCP is unavailable, but this was not necessary for the verification.

**Final status: Stitch MCP connection successfully established and verified through real tool calls.**