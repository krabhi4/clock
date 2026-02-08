# Clock

**Live:** [https://clock.krabhi4.in](https://clock.krabhi4.in)

A creative clock that displays the current time using grids of small analog clocks. Each digit (and AM/PM letters) is formed by 24 clocks arranged in a 4×6 grid—hour and minute hands are set to specific angles to form the shape of digits 0–9 and letters A, M, P.

## Features

- **Live time** — 12-hour format (HH:MM:SS) with AM/PM
- **Theme toggle** — Light/dark mode with preference stored in `localStorage`
- **Dynamic favicon** — Tab icon shows a real clock that updates every second
- **Responsive** — Layout and clock styling adapt to viewport size

## Tech stack

- [Astro](https://astro.build) 5
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for deployment to Cloudflare (Pages/Workers)

## Project structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── seo.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

## Commands

All commands are run from the project root. This project uses **pnpm**.

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `pnpm install`    | Install dependencies                        |
| `pnpm dev`        | Start dev server at `localhost:4321`        |
| `pnpm build`      | Build for production to `./dist/`           |
| `pnpm preview`    | Preview the production build locally        |
| `pnpm astro ...`  | Run Astro CLI (e.g. `astro add`, `astro check`) |

## SEO

Pages use comprehensive SEO: canonical URLs, meta description and keywords, Open Graph and Twitter Card tags, JSON-LD (WebSite, WebPage, WebApplication), robots, and mobile/format meta. Defaults live in `src/data/seo.ts`; each page can override via the Layout `seo` prop. Production site URL is set to `https://clock.krabhi4.in` in `astro.config.mjs` and `src/data/seo.ts`.

## Deploy

The app is set up for [Cloudflare Pages](https://pages.cloudflare.com/) via `wrangler.jsonc`. After building with `pnpm build`, deploy with:

```sh
pnpm exec wrangler pages deploy dist
```

Or connect the repo to Cloudflare Pages and use the build command `pnpm build` with output directory `dist`.
