# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Architecture

React 19 SPA powered by **Storyblok** as a headless CMS. All page content (text, images, articles) is fetched from Storyblok at runtime.

### Routing

`src/router.jsx` — React Router with language-prefixed URLs (`/:lang/...`). On load, the root `/` redirects to `/de-de` or `/en` based on `navigator.language`. Routes: home, about, articles/:slug, index, imprint, 404.

### CMS Integration

Two ways to fetch Storyblok content:

1. **`useStoryblokfetch` hook** (`src/Hook/useStoryblokfetch.jsx`) — for single stories by slug + language. Returns `{ story, loading, error }`.
2. **`src/Services/fetchingAPI.js`** — singleton `StoryblokClient` with utility functions for batch fetching articles by UUID, tag filtering, and extracting image blocks from article content.

`src/App.jsx` initializes Storyblok with the access token and registers top-level Storyblok components (Header, Footer, About, Index, Imprint) before rendering the router `<Outlet />`.

### Styling

- **styled-components** for all component styles (each component has a co-located `styles.js`)
- Global styles defined in `src/styles.js` via `createGlobalStyle`
- Design tokens: dark text `#1a1a1a`, light gray background `#D6D6D6`, orange accent `#F55321`
- Fonts: IBM Plex Sans, IBM Plex Mono, Helvetica
- Fluid typography via CSS `clamp()` with utility classes `.headline-h1`–`h4` and `.text-xs`–`.text-3xl`

### Key Patterns

- Pages (`src/Pages/`) compose layout by importing and rendering Header + Footer + feature components directly — no shared layout wrapper.
- The Header reads the current URL to apply an `"orange"` class when on `/about`.
- Carousel (`src/Components/Carousel/`) uses **Embla Carousel** with wheel-event hijacking (300ms throttle) and auto-detects `.mp4` files to render `<video>` vs `<img>`.
- Responsive images use two Storyblok fields: `Image` (desktop) and `PhoneSize` (mobile), selected via `useWindowSize`.
- No global state management — state is local React hooks only.
