# Data Model & LocalStorage 💾

Since the application operates without a backend, the entire state is persisted via the browser's `localStorage` under a single key:

**Key**: `street_issues_reports`
**Value Structure**: An array of `Report` objects serialized as a JSON string.

## The `Report` Object Schema

```json
{
  "id": "1678881234567",                      // Generated via Date.now().toString()
  "title": "Pothole on Main Street",          // String
  "description": "Large pothole in the...",   // String
  "category": "Road Damage",                  // Enum-like String
  "location": "123 Main St",                  // String
  "image": "data:image/jpeg;base64,...",      // Base64 Encoded Image String (Can be null)
  "status": "New",                            // String: "New" | "In Progress" | "Resolved"
  "createdAt": "2026-04-13T10:00:00.000Z"     // ISO Date String
}
```

## Utilities (`src/utils/storage.js`)

All interactions with `localStorage` are abstracted here so the UI components remain agnostic of the datastore internals.

- `getReports()`: Parses localStorage into an Array.
- `saveReports(reportsArray)`: Stringifies arrays into localStorage.
- `addReport(reportObj)`: Constructs the new Object with metadata (timestamp, ID, default Status) and prepends it.
- `updateReportStatus(id, newStatus)`: Mutates a report entry.
- `getReportById(id)`: Returns a single target map.

## Storage Limitations & Workarounds
1. **Capacity Limit**: `localStorage` caps around 5MB on most modern browsers. Because user-uploaded images are converted to Base64 (which increases the size overhead by ~33%), the system will easily hit storage quotas if the user uploads 2 or 3 heavy pictures.
2. **AI Continuation Task**: If an AI needs to optimize this, consider swapping the `localStorage` implementation for `IndexedDB` (using a wrapper like `localforage`) to bypass the strict 5MB limit.
