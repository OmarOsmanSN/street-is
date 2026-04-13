# System Architecture 🏗️

The **Street Issue Reporter** application is built entirely as a Single Page Application (SPA). 

## Technology Stack
- **Framework**: React 18
- **Tooling**: Vite (fast builds, instant HMR)
- **Routing**: `react-router-dom` v6
- **Styling**: Vanilla CSS (CSS variables, BEM-like utility classes)
- **Icons**: `lucide-react`
- **Persistence**: Browser `localStorage` (No database)

## Directory Structure

```text
src/
├── components/     # Reusable, stateless or UI-focused components (NavBar, IssueCard)
├── data/           # Mock data and bootstrapping functionality
├── pages/          # Top-level route components representing full views
├── styles/         # Global styles and CSS variables setup (index.css)
├── utils/          # Core logic (storage.js, fileHelpers.js)
├── App.jsx         # Root routing configuration
└── main.jsx        # Application entry point
```

## Routing Setup (`App.jsx`)
- `/` -> `HomePage`: Marketing page directing actions.
- `/report` -> `ReportIssuePage`: Submission funnel. Includes Form and Image Upload logic.
- `/admin` -> `AdminDashboardPage`: The data grid for managers.
- `/report/:id` -> `ReportDetailsPage`: View for a specific report ticket.
- `*` -> `NotFoundPage`: Standard 404.

## AI Agent Notes:
- To migrate to an API backend, intercept the logic living inside `/utils/storage.js`.
- Make sure to add `Promise`/`async` behavior natively if refactoring storage utilities to fetch data from an API, as the current local implementation is strictly synchronous.
