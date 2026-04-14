# Design System

This document describes the design principles and the visual framework for the StreetIssue Reporter.

## Principles
1. **Clarity**: Information hierarchy should be obvious.
2. **Trust**: Professional colors and clean layouts inspire confidence.
3. **Accessibility**: High contrast and readable font sizes.
4. **Motion**: Subtle animations (fade-ins) help guide the user's focus without being distracting.

## Color Palette
The app uses CSS variables defined in `src/styles/design-system.css`.
- **Primary**: `#2563eb` (Blue) - Used for primary actions and highlights.
- **Success**: `#10b981` (Green) - Used for "Resolved" status and success messages.
- **Warning**: `#f59e0b` (Amber) - Used for "In Progress" status.
- **Danger**: `#ef4444` (Red) - Used for errors and deletion actions.
- **Backgrounds**: A mix of pure white (`#ffffff`) for cards and soft gray (`#f8fafc`) for the page background.

## UI Tokens
- **Spacing**: Follows an 8px grid (`--space-sm`: 8px, `--space-md`: 16px, `--space-lg`: 24px, etc.).
- **Radius**: Large rounded corners (`--radius-lg`: 12px) for a modern, friendly feel.
- **Shadows**: Soft, multi-layered shadows to provide depth.

## Component Patterns
### Cards
Used as the primary container for grouping related content (Issue details, Map, Photo upload).
- Consistent padding (`var(--space-lg)`).
- Border and shadow for definition.

### Buttons
Standardized button styles for primary, outline, and ghost variants.
- High contrast for primary buttons.
- Hover states for all interactive elements.

### Status Badges
Pill-shaped badges with semantic colors. They provide immediate recognizable context for the status of a report.

## Typography
- **Font Stack**: `Inter`, system-ui, sans-serif.
- **Headers**: Bold weights with tight letter spacing for a modern look.
- **Body**: Regular weights with 1.5 line-height for optimal readability.

## Animations
All main content areas use the `.animate-fade-in` class to provide a smooth transition as elements enter the viewport.
