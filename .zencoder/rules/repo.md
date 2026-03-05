---
description: Repository Information Overview
alwaysApply: true
---

# VC Project Information

## Summary
The **VC** project is a modern, responsive web application built using **React** and **Vite**. It features a smooth user experience with custom cursor effects, scroll progress indicators, and intersection observer-based animations. The application is structured with several key pages including Home, About, Services, Projects, Blog, and Contact, making it suitable for a professional or portfolio website.

## Structure
- **`src/`**: Main source code directory.
  - **`components/`**: Reusable UI components such as `Navbar`, `Footer`, `Hero`, `WhatsAppButton`, and `ScrollToTop`.
  - **`pages/`**: Page-level components like `Home.jsx`, `AboutPage.jsx`, and `ContactPage.jsx` which define the application's routes.
  - **`assets/`**: Static resources like project images (`CompletedSites_*.jpeg`) and icons.
  - **`App.jsx`**: Main application component handling routing with `react-router-dom` and site-wide side effects (animations, custom cursor).
  - **`main.jsx`**: Application entry point where the React app is mounted to the DOM.
- **`public/`**: Contains static assets like `vite.svg` that are served directly.
- **Root Configuration**:
  - `vite.config.js`: Vite build tool configuration.
  - `eslint.config.js`: ESLint rules for code quality.
  - `package.json`: Project metadata, dependencies, and scripts.

## Language & Runtime
**Language**: JavaScript (React / JSX)  
**Version**: React ^19.2.0  
**Build System**: Vite ^7.3.1  
**Package Manager**: npm (implied by `package-lock.json`)

## Dependencies
**Main Dependencies**:
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `react-router-dom`: ^7.13.1

**Development Dependencies**:
- `vite`: ^7.3.1
- `@vitejs/plugin-react`: ^5.1.1
- `eslint`: ^9.39.1
- `globals`: ^16.5.0

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Testing
**Framework**: No testing framework is currently configured in the project.
**Location**: N/A
**Convention**: N/A
**Configuration**: N/A

**Run Command**:
```bash
# No test scripts are defined in package.json.
```
