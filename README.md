# Street Issue Reporter

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A frontend-only React application designed to mock a Street Issue Reporting system. It allows users to report street problems (like potholes, broken street lights) by submitting a form with an image, and it provides an admin dashboard to review and resolve these issues.

## 🤖 For AI Assistants & Future Contributors
If you (an AI agent) are tasked with continuing work on this repository, please review the documentation located in the `/docs` directory to understand the system map quickly:
- [System Architecture](./docs/ARCHITECTURE.md) - Understanding the tech stack and folder structure.
- [Data Model & LocalStorage](./docs/DATA_MODEL.md) - Understanding how state is persisted.
- [Components Guide](./docs/COMPONENTS.md) - UI Hierarchy.
- [Roadmap & AI Guidelines](./docs/ROADMAP.md) - Recommended next steps for development.

## Setup & Running Locally
This project leverages Vite and React.

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Start Development Server**
   ```bash
   npm run dev
   ```

## Constraints
This is a prototype system:
- **No Backend**: No APIs, no servers.
- **No Database**: Uses browser `localStorage` only.
- **Image Uploads**: Images are encoded in `Base64` and stored inside `localStorage`. There is a strict 5MB limit.
- **Mock Data**: If `localStorage` is empty upon running the app, it will automatically populate with dummy issues.
