# Avinash Amanchi — portfolio

This repository contains Avinash Amanchi’s single-page portfolio: a dark editorial site for showing applied AI, accessibility, healthcare research, and product systems through evidence-led case studies.

## Stack

- React 19 with JavaScript/JSX
- Vite 8 for the static build
- Tailwind CSS 3 plus a focused handwritten stylesheet
- Self-hosted Space Grotesk, DM Mono, and DM Serif Display fonts
- GitHub Pages for production hosting

The site intentionally has no runtime API calls, analytics, form backend, or external font dependency.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The production-like build can be checked with:

```bash
npm run build
npm run preview
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite’s local development server |
| `npm run lint` | Run ESLint across the repository |
| `npm run build` | Create the static production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally |
| `npm run deploy` | Publish `dist/` to the `gh-pages` branch |

## Deployment

The site is a GitHub Pages user site at [avinashamanchi.github.io](https://avinashamanchi.github.io/). Vite uses the root base `/`, so deployment is:

```bash
npm run lint
npm run build
npm run deploy
```

The repository also runs lint and build checks through GitHub Actions on pushes and pull requests targeting `main`.

## Structure

```text
src/
  App.jsx                 page composition
  components/             navigation, hero, work, impact, experience, about, contact
  data/projects.js        project and evidence content
  hooks/useReveal.js      native IntersectionObserver reveal behavior
  index.css               design tokens, layout, responsive rules, motion, focus states
public/
  fonts/                  self-hosted typefaces
  *.webp / *.jpg          optimized project and portrait imagery
  robots.txt              crawler permission and sitemap reference
  sitemap.xml             canonical homepage sitemap
```

## Design and quality principles

- Keep the dark editorial palette and project-first hierarchy distinctive.
- Use plain language, verified evidence, and explicit research limitations.
- Prefer native HTML interactions and restrained motion.
- Keep keyboard navigation, focus visibility, reduced motion, and responsive layout working.
- Keep the static build lean and compatible with GitHub Pages.
