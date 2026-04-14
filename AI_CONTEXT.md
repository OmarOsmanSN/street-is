# AI Context & Developer Guide

This document is intended for other AI agents or developers who will work on this codebase.

## Coding Conventions
1. **Functional Components**: Use React functional components with arrow functions.
2. **Inline Styles as Tokens**: For this prototype, we use a mix of global CSS (in `index.css`) and inline styles that reference CSS variables (e.g., `var(--primary)`). This ensures portability and strict adherence to the design system.
3. **Storage Abstraction**: Never access `localStorage` directly inside a component. Use the functions in `src/utils/storage.js`.
4. **Icons**: Use `Lucide React` for all icons.
5. **Schema Consistency**: Ensure all new features respect the schema described in `ARCHITECTURE.md`.

## Critical Files
- **App Configuration**: `src/constants/index.js` (Add new categories or status levels here).
- **Styling Core**: `src/styles/design-system.css`.
- **Form Logic**: `src/components/ReportForm.jsx`.
- **Admin Workflow**: `src/pages/AdminDashboardPage.jsx`.

## How to Extend
### Adding a new category
1. Open `src/constants/index.js`.
2. Add the category name to the `CATEGORIES` array.
3. The form and filter dropdowns will update automatically.

### Adding a new status
1. Open `src/constants/index.js`.
2. Update `STATUS_OPTIONS` with the new status and its associated CSS variable color.
3. Update the `StatusBadge.jsx` component to handle the new status visual.

### Changing Map Defaults
1. Open `src/constants/index.js`.
2. Update the `DEFAULT_VIEW` object with your desired `center` and `zoom`.

## Testing
Since this is a frontend prototype, focus on verifying:
- LocalStorage persistence after a browser refresh.
- Map marker placement on click.
- Filter and Search logic in the Admin Dashboard.
- Responsive layout behavior across mobile and desktop breakpoints.
