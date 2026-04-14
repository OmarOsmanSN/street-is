# Project Structure

This document outlines the folder hierarchy and the responsibilities of each layer in the StreetIssue Reporter application.

## Folder Tree
```
street-issue/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── components/         # Feature-specific components
│   │   ├── layout/         # Shared layout piezas (NavBar, Footer, etc.)
│   │   ├── ui/             # Atomic UI components (Button, Card, Badge)
│   │   ├── MapPicker.jsx    # Interactive map logic
│   │   └── ReportForm.jsx   # Complex form logic
│   ├── constants/          # App-wide constants (Categories, Colors)
│   ├── data/               # Initial data & mock seeding
│   ├── layout/             # High-level layout wrappers (AppLayout)
│   ├── pages/              # Routed page components
│   ├── styles/             # CSS Design System
│   ├── utils/              # Pure utilities & storage logic
│   ├── App.jsx             # Main router & app logic
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Leaflet overrides
├── docs/                   # Extended documentation
├── package.json            # Dependencies & scripts
└── README.md               # Quick start guide
```

## Layer Responsibilities

### 1. Styles (`/src/styles`)
Contains the CSS variables and base rules that define the visual language of the app. Pages and components should rely on these variables rather than hardcoding values.

### 2. UI Components (`/src/components/ui`)
Highly reusable, low-level components like Buttons and Cards. They don't know about the data schema; they just handle presentation.

### 3. Layout (`/src/layout`)
Defines the overall "shell" of the application, including the Navbar and Footer. It ensures consistency across different routes.

### 4. Utilities (`/src/utils`)
Separates side-effects and logic from the UI. `storage.js` is the single source of truth for how data is persisted to localStorage.

### 5. Constants (`/src/constants`)
Centralizes configuration like issue categories and status options. This makes the app easy to extend (e.g., adding a new category).

### 6. Pages (`/src/pages`)
The "containers" for each route. They handle state orchestration, fetch initial data from the storage layer, and compose feature components.
