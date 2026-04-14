# StreetIssue Reporter

Professional frontend-only prototype for a community street issue reporting application.

## Overview
StreetIssue Reporter is a React-based web application that allows citizens to report public infrastructure problems (like potholes, broken street lights, etc.) directly from their browser. It features an interactive map for location selection, image upload capabilities, and a comprehensive admin dashboard for management.

## Key Features
- **Public Reporting Flow**: Easy-to-use form with title, category, description, image upload, and map-based location selection.
- **Interactive Map**: Integration with Leaflet for pinpointing exact issue locations.
- **Admin Dashboard**: Manage reports with search, category filtering, and status tracking (New, In Progress, Resolved).
- **Modern UI/UX**: Professional design system with clean aesthetics, responsive layout, and smooth animations.
- **Local Persistence**: All data is stored in the browser's `localStorage`.

## Tech Stack
- **Framework**: React 18+ (Vite)
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Mapping**: Leaflet & React-Leaflet
- **Persistence**: browser localStorage API
- **Styling**: Vanilla CSS with a centralized Design System

## Installation & Running
1. **Clone the project**
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   *Note: Ensure you run this to install React-Leaflet and Leaflet.*
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
4. **Open in Browser**: Navigate to `http://localhost:5173` (or the port Vite provides).

## Project Structure
- `src/components`: Reusable UI and feature components.
- `src/layout`: Global layout components (AppLayout, NavBar, Footer).
- `src/pages`: Individual page components.
- `src/utils`: Helper functions and storage logic.
- `src/constants`: App-wide constants and configuration.
- `src/styles`: CSS variables and design system rules.

## Future Improvements
- Backend integration (Node.js/Firebase).
- Real-time geocoding for address lookups.
- User authentication and profiles.
- Push notifications for status updates.
