# Roadmap & AI Guidelines 🚀

When an AI agent is injected into this repository to continue work, here are the exact logical next steps required to escalate this prototype into a full-scale production application.

## 1. Migration to a Backend Server (Highest Priority)
**Task**: Strip out the `localStorage` logic.
- Replace `src/utils/storage.js` with an API Service Layer (using `fetch` or `axios`).
- Migrate `Base64` image storage to standard `multipart/form-data` uploads towards an S3 bucket or native cloud blob service.

## 2. Introduce State Management
**Task**: Prevent excessive prop drilling and isolated loading delays.
- Right now, State is loaded locally per Page. If network latency is introduced, consider using tools like `React Query` or `Zustand` to cache data smoothly across the Admin Dashboard and details views smoothly.

## 3. Introduce Authentication Framework
**Task**: Protect the `/admin` routes.
- Implement an Auth wrapper component `<ProtectedRoute>` in `App.jsx`.
- Standardize a mock login procedure before wiring to actual JWT or OAuth tokens.

## 4. Internationalization (i18n) / Full Arabic Support
**Task**: Make the application fully robust for Right-to-Left (RTL) users.
- Connect `react-i18next`.
- Define translation JSONs for standard text.
- Currently, the app works fine rendering Arabic, but standard layout hooks might need `[dir="rtl"]` scoping in `index.css` to swap padding and margins automatically.

## General AI Prompt / Interaction
If the user asks to "Build out the backend", start by reading `docs/DATA_MODEL.md` to replicate the required schema for SQL/NoSQL schemas. Make sure you convert the synchronous methods inside `utils/storage.js` to async before destroying the native UI functionality.
