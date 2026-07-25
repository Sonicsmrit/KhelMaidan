# KhelMaidan

A sports venue booking platform built to make finding and reserving futsal courts, basketball courts, and other sports venues simple and fast.

**Live demo:** [khelmaidan.onrender.com](https://khelmaidan.onrender.com)

## Overview

KhelMaidan connects players with sports venues across the Kathmandu Valley. Users can browse available venues, check details, and book time slots, while venue owners get a way to manage listings all through a fast, modern web interface.

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **React Router** — client-side routing and role-based navigation
- **CSS** — custom dark/moss theming
- **Render** — deployment

## Features

- Browse and search sports venues
- Role-based routing (players vs. venue owners)
- Persistent session/data handling via `localStorage`
- Dark, neon-mossy green UI theme

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Sonicsmrit/KhelMaidan.git
cd KhelMaidan
npm install
```

Run the development server:

```bash
npm run dev
```

This will start the app on your local host (Vite will print the exact port.

## Building for Production

```bash
npm run build
```

## Project Structure

```
KhelMaidan/
├── public/          # Static assets
├── src/             # Application source code
├── index.html       # App entry point
├── package.json     # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Contributing

This project follows a simple branch-based workflow — no direct commits to `master`.

1. **Create a feature branch**

   ```bash
   git checkout -b feature-your-feature-name
   ```

2. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add your feature"
   git push origin feature-your-feature-name
   ```

3. **Open a Pull Request**

   Go to the repo on GitHub, click **Compare & pull request**, and submit your branch for review. Once approved, it'll be merged into `master`.

### Commit message convention

To make it easy to track what changed and why, structure your commit/PR description like this:

```
Created Home.jsx, Score.jsx
Edited Home.jsx, Venue.jsx

Worked on: Landing page layout and venue score display
```

This keeps the history readable and makes debugging much faster for the whole team.

## License

No license specified yet — all rights reserved by the author unless stated otherwise.

## Author

Built by [Sonic](https://github.com/Sonicsmrit) as part of a BSc CSIT project.
