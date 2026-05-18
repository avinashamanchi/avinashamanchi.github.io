# Portfolio Migration & Feature Upgrade — Design Spec

**Date:** 2026-05-18
**Status:** Approved

## Overview

Migrate the static HTML portfolio to a Vite + React application with Tailwind CSS PostCSS compilation, and add four new features: live GitHub metrics, an embedded micro-demo with hybrid backend/fallback architecture, additional project cards, and system-aware dark mode.

## 1. Vite + React Migration

### Architecture
- Scaffold with `npm create vite@latest` using React + JavaScript template
- Install Tailwind CSS v3 via PostCSS (`tailwindcss`, `postcss`, `autoprefixer`)
- All Tesla design tokens move into `tailwind.config.js` `theme.extend`
- Custom CSS (scroll reveals, nav animations, hero line reveals) moves into `src/index.css`
- Deploy to GitHub Pages via `gh-pages` npm package — builds to `/dist`, pushes to `gh-pages` branch

### Component Decomposition
| Component | Responsibility |
|-----------|---------------|
| `App.jsx` | Root layout, section ordering, ThemeProvider wrapper |
| `Navbar.jsx` | Sticky nav, desktop links, mobile hamburger/drawer, resume CTA |
| `Hero.jsx` | Full-viewport intro, staggered text animation, CTA buttons |
| `About.jsx` | First-person bio, Berkeley Lab, EAA Detailing, CS Honors Society |
| `Skills.jsx` | 4-category grid of skill tags, no percentage charts |
| `Projects.jsx` | Section wrapper, renders ProjectCard array |
| `ProjectCard.jsx` | Case study layout: Context, Stack, Outcome, Links, GitHubMetrics |
| `MicroDemo.jsx` | Embedded ATS analyzer with hybrid backend/fallback |
| `GitHubMetrics.jsx` | Renders stars, last push, language from GitHub API |
| `Contact.jsx` | Dark footer with email/LinkedIn/GitHub, copyright |
| `ThemeToggle.jsx` | Sun/moon icon button, toggles dark mode |

### Data Layer
- `src/data/projects.js` — Array of project objects with title, category, description fields (Context, Stack, Outcome), links (live, github), repo identifier for GitHub metrics
- `src/utils/constants.js` — Tesla design tokens, API base URLs, ATS keyword lists

## 2. Live GitHub Metrics

### Hook: `useGitHubRepo(owner, repo)`
- Fetches `https://api.github.com/repos/{owner}/{repo}`
- Returns `{ stars, lastPush, language, loading, error }`
- Caches response in `sessionStorage` keyed by `gh-{owner}-{repo}` for the session
- TTL: session-scoped (clears on tab close) to stay under 60 req/hr unauthenticated limit
- On error: returns `{ error: true }` — component renders without metrics (no broken UI)

### Display
- Small metadata row under each project card's links: "★ {stars} · Updated {relative date} · {language}"
- Only shown when data loads successfully
- Subtle `text-silver-fog` styling, does not compete with project content

## 3. Micro-Demo: Hybrid Resume Analyzer

### Architecture
Embedded inside the AI Resume Analyzer project card as a collapsible/expandable panel.

### UI Flow
1. User sees "Try it live" button on the AI Resume Analyzer card
2. Click expands a panel with a `<textarea>` and "Analyze" button
3. User pastes resume text and clicks Analyze
4. Loading spinner appears
5. Results display: keyword chips, ATS compatibility score, improvement hints

### Race Controller Logic
```
1. User clicks "Analyze"
2. Create AbortController with 2500ms timeout
3. Fire Promise.race([
     fetch(RENDER_URL, { signal: controller.signal, body: resumeText }),
     new Promise((_, reject) => setTimeout(() => reject('timeout'), 2500))
   ])
4. If fetch wins → display real API response
5. If timeout wins → abort fetch, run mockAnalyzer(resumeText), show toast:
   "Render backend warming up — running local analysis engine"
6. Display results from whichever path resolved
```

### Mock Analyzer (`src/utils/mockAnalyzer.js`)
- Curated keyword lists: hard skills (Python, React, AWS, etc.), action verbs (built, deployed, optimized, etc.), metrics patterns (regex for percentages, numbers + nouns)
- Scans input text, extracts matches, calculates a score (0-100) based on keyword density and variety
- Returns `{ keywords: [], score: number, suggestions: [] }`
- Deterministic: same input always produces same output

### Render Endpoint
- URL: `https://resume-analyzer-al3g.onrender.com/` (existing deployment)
- If the API doesn't have a JSON endpoint for programmatic analysis, the mock engine becomes the primary path and the fetch attempt is a best-effort enhancement

## 4. Additional Projects

### EAA Detailing (New Card)
- Category: "entrepreneurship · web"
- Context: Co-founded automotive detailing business needing online presence and booking system
- Stack: Web Development, Social Media Marketing, Business Operations
- Outcome: Scaled to 100+ clients across 4 cities, built website handling 20+ monthly bookings, increased client acquisition by 30%
- Links: Live site (eaadetailingservices.com), no GitHub repo

### In-Development Section
- Rendered after the main project cards
- Subtle visual distinction: lighter opacity or "in progress" badge
- Shows forward momentum and continuous building
- Cards are simpler: title, one-line description, tech stack, status

## 5. System-Aware Dark Mode

### State Management
- `useTheme()` custom hook with React context
- On mount: check `localStorage.getItem('theme')`
  - If set → use stored preference
  - If not set → check `window.matchMedia('(prefers-color-scheme: dark)').matches`
- Listen to OS theme changes via `matchMedia.addEventListener('change', ...)`
- Manual toggle saves to `localStorage` and overrides OS preference

### Implementation
- Add `darkMode: 'class'` to `tailwind.config.js`
- `<ThemeProvider>` wraps `<App>`, toggles `dark` class on `<html>` element
- All color classes get `dark:` variants:
  - `bg-white` → `dark:bg-carbon`
  - `text-carbon` → `dark:text-white`
  - `text-graphite` → `dark:text-[#B0B3B8]`
  - `bg-ash` → `dark:bg-[#1E2128]`
  - `border-cloud` → `dark:border-[#2D3139]`
  - `bg-electric-blue` stays `bg-electric-blue` (accent unchanged)
- Toggle button: sun icon in dark mode, moon icon in light mode
- Positioned in navbar, left of the resume CTA

### Dark Palette (Tesla-derived)
| Token | Light | Dark |
|-------|-------|------|
| Background | `#FFFFFF` | `#171A20` (Carbon) |
| Surface | `#F4F4F4` (Ash) | `#1E2128` |
| Text Primary | `#171A20` | `#FFFFFF` |
| Text Secondary | `#393C41` | `#B0B3B8` |
| Text Tertiary | `#5C5E62` | `#8E8E8E` |
| Border | `#EEEEEE` | `#2D3139` |
| Accent | `#3E6AE1` | `#3E6AE1` (unchanged) |

## File Structure

```
personal portfolio/
├── public/
│   └── avinash-amanchi-resume.pdf
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── MicroDemo.jsx
│   │   ├── GitHubMetrics.jsx
│   │   ├── Contact.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/
│   │   ├── useGitHubRepo.js
│   │   └── useTheme.js
│   ├── data/
│   │   └── projects.js
│   └── utils/
│       ├── mockAnalyzer.js
│       └── constants.js
├── index.html                    (Vite entry point)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Deployment

- `npm run build` outputs to `/dist`
- `gh-pages` package pushes `/dist` to `gh-pages` branch
- GitHub Pages serves from `gh-pages` branch
- `vite.config.js` sets `base: '/avinashamanchi.github.io/'` or `'/'` depending on repo name
- Since the repo IS `avinashamanchi.github.io`, base stays `'/'`

## Testing Strategy

- Manual browser testing across Chrome, Safari, Firefox
- Mobile responsiveness check at 375px, 768px, 1024px, 1440px breakpoints
- Dark mode toggle + OS preference detection verification
- Micro-demo: test both live path (Render awake) and fallback path (simulate timeout)
- GitHub metrics: verify graceful degradation when API returns error
