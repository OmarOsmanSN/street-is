# Application Architecture

This document describes the flow and logic patterns used in the StreetIssue Reporter.

## App Flow
1. **Bootstrap**: `main.jsx` initializes React and imports global styles.
2. **Initialization**: `App.jsx` runs a `useEffect` on mount to call `loadMockDataIfEmpty()`, ensuring the user has data to look at on first visit.
3. **Routing**: `react-router-dom` handles navigation between the Home, Report, Admin, and Details pages.
4. **Layout**: Every page is wrapped in `AppLayout` to maintain a consistent shell.

## Report Lifecycle
- **Creation**: Handled by `ReportForm`. Data is validated client-side. The image is converted to a base64 string, and the map coordinates are captured via `MapPicker`.
- **Storage**: The `addReport` utility generates a UUID and timestamp, sets the status to "New", and persists it to `localStorage`.
- **Management**: The `AdminDashboardPage` fetches all reports. The user can search or filter. Status updates trigger the `updateReportStatus` utility.

## Data Schema
Each report object follows this structure:
```json
{
  "id": "uuid",
  "title": "string",
  "category": "string (from CATEGORIES constant)",
  "locationText": "string",
  "description": "string",
  "coordinates": { "lat": number, "lng": number },
  "image": "string (base64 data URL)",
  "status": "string (New | In Progress | Resolved)",
  "createdAt": "ISO String"
}
```

## Map Selection Flow
1. User clicks the map in the form.
2. `Leaflet` captures the click event and returns `latlng`.
3. `MapPicker` updates its internal state and calls `onLocationSelect` (passed from the form).
4. The form stores the coordinates for submission.

## Future Backend Integration Notes
To move this prototype to a real backend:
1. **Storage Layer**: Replace `localStorage` calls in `utils/storage.js` with `fetch` or `axios` calls to an API.
2. **Image Storage**: Instead of storing base64 in a DB (which is inefficient), upload images to a service like Cloudinary or S3 and store the URL in the report object.
3. **Auth**: Wrap protected routes (like Admin) in an authentication guard.
4. **Validation**: Move validation logic to the server side (in addition to existing client-side validation).
