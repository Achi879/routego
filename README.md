
# RouteGo

**RouteGo** is a modern travel and route management web application built with React. The platform is designed to help users explore travel routes and manage route information through a convenient and responsive interface.

## Project Overview

RouteGo provides a user-friendly interface for browsing routes and managing travel-related information. The project includes a main application interface and an administrative dashboard.

## Features

- Browse and search available routes.
- Filter routes using a custom React Hook.
- Display route information through reusable components.
- Manage route information through the dashboard.
- Add and edit routes using a modal form.
- Validate form data before submission.
- Responsive layout for desktop, tablet, and mobile devices.
- Reusable UI components and organized project structure.

## Technologies Used

### Main Technologies
- React 19
- JavaScript (ES Modules)
- Vite

### Form Handling and Validation
- React Hook Form
- Zod
- @hookform/resolvers

### Development Tools
- ESLint
- CSS3
- HTML5
- Git and GitHub

## Project Structure

```text
routego/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   ├── Layout/
│   │   ├── ProductCard/
│   │   ├── RouteModal/
│   │   ├── Sidebar/
│   │   └── StatCard/
│   ├── data/
│   │   └── products.js
│   ├── hooks/
│   │   └── useFilterRoutes.js
│   ├── App.jsx
│   ├── App.css
│   ├── DashboardApp.jsx
│   ├── DashboardApp.css
│   ├── ErrorBoundary.jsx
│   ├── globals.css
│   ├── index.css
│   ├── main.jsx
│   └── dashboard-main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

Make sure you have installed:
- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Achi879/routego.git
```

### 2. Navigate to the project directory

```bash
cd routego
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local URL where you can open the application in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint code analysis |
| `npm run preview` | Previews the production build |

## Code Quality and Testing

The project uses ESLint to identify code quality issues and maintain consistent development practices.

The following checks have been performed:

- ESLint validation.
- Production build verification.
- Cross-browser visual testing in Google Chrome and Microsoft Edge.
- Responsive layout testing on mobile and tablet screen sizes.

## Responsive Design

RouteGo is designed to adapt to different screen sizes, including:

- Desktop computers
- Tablets
- Mobile devices

## Project Repository

GitHub: https://github.com/Achi879/routego

---

**RouteGo — Find Your Route. Travel with Ease.**
