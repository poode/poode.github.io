# Abdulazeem M. Mohammed — Portfolio

A fast, modern, **fully bilingual (English / العربية, LTR + RTL)** personal portfolio,
built with [Astro](https://astro.build) and Tailwind CSS. Ships almost no JavaScript,
supports dark/light mode, and deploys to GitHub Pages.

- **Live:** https://poode.github.io
- **Languages:** English at `/`, Arabic at `/ar/` (Astro i18n)
- **Stack:** Astro 5 · Tailwind CSS 3 · TypeScript

## Develop (Docker Compose)

```bash
docker compose up
# → http://localhost:4321/  (EN)
# → http://localhost:4321/ar/  (AR)
```

Source is bind-mounted for hot reload. To stop: `docker compose down`.

## Develop (local Node, optional)

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build → dist/
npm run preview    # preview the production build
```

## Editing content

All content is data-driven — no need to touch markup:

- **Profile / bio / skills / socials:** [`src/data/profile.ts`](src/data/profile.ts)
- **Projects:** [`src/data/projects.ts`](src/data/projects.ts) (add `repo`/`live` URLs to show links)
- **UI strings (nav, buttons, headings):** [`src/i18n/ui.ts`](src/i18n/ui.ts)

Every content field has parallel `en` and `ar` values.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and deploys it to GitHub Pages.

**One-time setup:** in the repo's **Settings → Pages → Build and deployment**, set
**Source = GitHub Actions**.
