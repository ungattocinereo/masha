# Repository Guidelines

## Project Structure & Module Organization

This repository contains an Astro site for a Russian/English Amalfi guide website. The active app lives in `site/`. Pages are in `site/src/pages`, reusable UI is in `site/src/components`, shared layouts are in `site/src/layouts`, and typed content/data lives in `site/src/data`, `site/src/lib`, and `site/src/content/blog`. Static assets served by the site belong in `site/public`, especially `site/public/images` and `site/public/video`. Root-level `doc_*.md`, `about.md`, and `Blog/` files are source copy and drafting material; keep production page changes synchronized with the Astro data/content files.

## Build, Test, and Development Commands

Run commands from `site/`:

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Astro dev server.
- `npm run build` builds the static site into `site/dist` and catches Astro/TypeScript errors.
- `npm run preview` serves the latest production build locally.

There is no separate test script configured. Treat `npm run build` as the required validation before handing off changes.

## Coding Style & Naming Conventions

Use TypeScript and Astro conventions already present in the codebase. Keep two-space indentation in `.astro`, `.ts`, `.mjs`, and JSON files. Prefer explicit interfaces for shared data shapes, as in `site/src/data/tours.ts`. Use `camelCase` for variables/functions, `PascalCase` for Astro components such as `TourCard.astro`, and kebab-case for route slugs and image filenames. Keep content text in the appropriate language path: default Russian pages under `site/src/pages`, English pages under `site/src/pages/en`.

## Testing Guidelines

When changing routes, data, Markdown content, images, SEO metadata, or sitemap behavior, run `npm run build`. For UI changes, also run `npm run dev` and manually inspect affected desktop and mobile layouts. Check that images referenced from data files exist under `site/public` and include useful alt text.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, scope-prefixed messages such as `Blog: add two new posts` and `Hero: drop masha.jpg overlay`. Follow that style: `Area: concise action`. Pull requests should include a short summary, affected pages or data files, validation performed (`npm run build`, manual preview), and screenshots for visible UI changes. Link related issues or content requests when available.

## Security & Configuration Tips

Do not commit secrets, private contact exports, or large unoptimized media. Keep canonical site settings in `site/astro.config.mjs`. Optimize new photos before adding them to `site/public/images`; prefer `.webp` for production tour and blog imagery.
