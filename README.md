# Sabari Girish Srinivasan — Portfolio

A dark-mode, glassmorphic, Bento-grid portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## What's inside

```
src/
  components/
    Background.jsx   gradient mesh + grain + grid backdrop
    Nav.jsx           desktop glass pill nav, mobile full-screen menu + sticky bottom nav
    Hero.jsx          headline, staggered entrance animation
    Projects.jsx      Bento-box case study grid + secondary project list
    About.jsx         bio, career timeline, certifications, icon-based skill grid
    Blog.jsx          masonry-style post cards with an API-ready empty state
    Contact.jsx       minimalist form (mailto by default, Formspree-ready)
    Magnetic.jsx      magnetic-pull wrapper for buttons/links (desktop only)
    Reveal.jsx        fade-up scroll-reveal wrapper (Framer Motion, IntersectionObserver-based)
    Footer.jsx
  data/
    content.js        all copy, project, skill and timeline data lives here
  App.jsx
  index.css           Tailwind layers + fluid clamp() type scale + glass utilities
```

Everything text-based (name, projects, skills, timeline, certifications) is centralised in
`src/data/content.js` — edit that one file to update the whole site.

## Run it locally

You'll need [Node.js 18+](https://nodejs.org).

```bash
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in your browser.
Edits hot-reload instantly.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploying to GitHub Pages

Since your target URL is `https://ssabarigirish.github.io/` (a **user/root** Pages site, not a
project subpath), `vite.config.js` is already set to `base: "/"` — don't change this unless you
move the site into a project repo like `github.com/SSabariGirish/portfolio`, in which case set
`base: "/portfolio/"` instead.

**Option A — GitHub Actions (recommended, zero local steps after setup)**

1. Push this project to the `SSabariGirish/SSabariGirish.github.io` repository, on the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. The included workflow at `.github/workflows/deploy.yml` will build and publish automatically
   on every push to `main`. First deploy usually takes 1–2 minutes.

**Option B — `gh-pages` package (manual deploys from your machine)**

```bash
npm install
npm run build
npm run deploy
```

This uses the `gh-pages` script already wired into `package.json` to push `dist/` to a `gh-pages`
branch. Point your repo's Pages settings at that branch if you go this route.

## Wiring up the blog feed

`src/components/Blog.jsx` ships with a polished empty state so the section never looks broken
with zero posts. To go live:

- **Dev.to:** set `BLOG_SOURCE` near the top of `Blog.jsx` to
  `https://dev.to/api/articles?username=yourhandle` — no key required, CORS-friendly.
- **Notion:** the Notion API requires a secret key and doesn't allow browser CORS, so proxy it
  through a small serverless function (Vercel/Netlify Function) and point `BLOG_SOURCE` at that
  endpoint instead.

## Wiring up the contact form

`Contact.jsx` currently opens the visitor's email client via a `mailto:` link — this works with
zero backend and zero config, which is ideal for a static GitHub Pages site. If you want silent
submission (no mail client popup), swap the body of `handleSubmit` for a POST to a form backend
such as [Formspree](https://formspree.io) or [Getform](https://getform.io) — the JSX markup
doesn't need to change, only the submit handler.

## Notes on the design system

- **Colors:** deep near-black (`#0a0a0a`) base with a teal/cyan accent (`#5EEBD6`) and a soft
  violet secondary, defined in `tailwind.config.js` under `theme.extend.colors`.
- **Type:** Inter for UI, Playfair Display for display/serif headings, JetBrains Mono for
  kickers/labels — all fluid via `clamp()` utilities in `index.css` (`.text-fluid-*`).
- **Glass:** `.glass` / `.glass-strong` utility classes in `index.css` handle the blur + border
  glassmorphism look consistently across nav, cards, and the contact form.
- **Motion:** scroll reveals use `Reveal.jsx` (Framer Motion `whileInView`), buttons use
  `Magnetic.jsx` for a subtle cursor-following pull on desktop (automatically disabled on touch).
- **Mobile:** sticky glass bottom nav + full-screen overlay menu, 44px minimum touch targets
  everywhere, and no fixed-width elements that could cause horizontal scroll.
