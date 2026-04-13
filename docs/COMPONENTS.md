# Core Components Guide 🧩

## Form System (`IssueForm.jsx`)
- **State Control**: Utilizes standard controlled inputs (`onChange` mapping directly to a single `formData` state object).
- **Image Handling**: Contains an `<input type="file" />` that intercepts the event, checks the size, and passes the raw file to `fileHelpers.convertFileToBase64()`. Uses `FileReader` native API.
- **Limits**: Hardcoded to block sizes > 5MB to preserve `localStorage` stability.

## UI Cards (`IssueCard.jsx`)
- Used in both the `AdminDashboard` and any other display context.
- Accepts a `showStatusSelect` boolean prop. If true, it replaces the static Status Badge with a functional HTML `<select>` allowing rapid status toggling.

## Admin Dashboard (`AdminDashboardPage.jsx`)
- **State**: Tracks raw reports and actively filtered reports simultaneously.
- **Filter Mechanics**: Synchronizes three active filters: `searchTerm`, `statusFilter`, and `categoryFilter`. Contains an `useEffect` hook that recalculates intersections every time a dependency state changes.

## Styling Implementation
We are utilizing Vanilla CSS inside `src/styles/index.css` via custom CSS Variable assignments (e.g., `var(--primary-color)`). The styling paradigm closely mimics utility classes similar to Tailwind CSS without the payload (e.g., `.text-center`, `.grid-cols-3`, `.py-8`).
