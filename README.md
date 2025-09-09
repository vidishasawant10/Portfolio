# Portfolio (React + TypeScript + Tailwind)

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. It showcases Home, About, Education & Experience, Projects, Skills, and Contact sections with a responsive, animated UI and a mobile-friendly navigation drawer.

If you’re looking for where to change content, see the “Edit Content” section below.

## Tech Stack

- React 18 + TypeScript
- React Router (`react-router-dom`)
- Tailwind CSS (+ PostCSS + Autoprefixer)
- Framer Motion (micro‑interactions and transitions)
- UI/Icons: MDB UI Kit CSS, MUI Icons, Devicon, Font Awesome, Bootstrap Icons

## Project Structure

Key source files and folders:

- `src/App.tsx`: App shell and routes
- `src/index.tsx`: App entry, global CSS imports
- `src/index.css`: Tailwind layers and global styles (including `.page-shell`)
- `src/navbar/`: Responsive navigation with desktop tabs and mobile drawer
- `src/home/`, `src/about/`, `src/work/`, `src/projects/`, `src/skills/`, `src/contact/`, `src/more/`: Page sections
- `src/components/`: Shared UI (e.g., `SectionTitle`, `WelcomeScreen`, `Layout`, `Loader`)
- `tailwind.config.js`, `postcss.config.js`: Styling configuration

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Install dependencies:
- `npm install`

Run locally:
- `npm start`
- Opens `http://localhost:3000`

Run tests:
- `npm test`

Build for production:
- `npm run build`
- Outputs to `build/`

## Routing

Routes are defined in `src/App.tsx` using `react-router-dom`:

- `/` → Home
- `/about` → About
- `/work` → Education & Experience
- `/projects` → Projects
- `/skills` → Skills (section component used in pages)
- `/contact` → Contact (mailto form)
- `/more` → Misc / Extras

The navbar also includes an external Resume link.

## Styling & Animation

- Tailwind is configured in `tailwind.config.js` and applied via `src/index.css`.
- Global utility classes like `.page-shell` are defined in `@layer components` within `index.css`.
- Animations and transitions use Framer Motion (see `src/home/Home.tsx`, `src/navbar/Navbar.tsx`, `src/skills/Skills.tsx`).

## Edit Content

- Header/Nav: `src/navbar/Navbar.tsx` (tabs, external resume link)
- Home hero: `src/home/Home.tsx` (intro text, social links, hero image)
- About: `src/about/About.tsx`
- Education & Experience: `src/work/Work.tsx`
- Projects: `src/projects/Projects.tsx`
- Skills: `src/skills/Skills.tsx` (categories and icons via Devicon)
- Contact: `src/contact/Contact.tsx` (opens default mail client via `mailto:`)

Update images and assets within their respective folders under `src/`.

## Accessibility & UX

- Keyboard and screen-reader friendly nav (focus rings, aria‑labels).
- Mobile drawer locks body scroll while open.
- Form validation and clear error messaging in Contact.
- Global `scroll-padding-top` adjusts for fixed navbar height.

## Deployment

This is a static React app. Common options:

- GitHub Pages: build with `npm run build`, then deploy `build/` with your preferred action or `gh-pages`.
- Netlify/Vercel: connect the repo, set build command to `npm run build` and output directory to `build`.

Tip: Set the site title and metadata in your host’s settings or add an HTML `<title>` tag and meta tags in the root HTML template if needed (CRA uses `public/index.html`).

## Notes

- Icons come from Devicon, Font Awesome, and Bootstrap Icons.
- MUI Icons are used where needed (e.g., Contact page button icon).
- The Contact form uses `mailto:`; there is no backend in this repo.

## License

No license specified. If you plan to open‑source, consider adding a LICENSE file.
