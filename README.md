# Virtual Sponsor

Marketing site for Virtual Sponsor, an influencer-marketing agency —
"Where brands meet creators."

## Stack

React + Vite + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Before you deploy

1. **Set your Google Form URL.** Open `src/config/googleForm.js` and
   replace the placeholder with your real form link. Every "Start a
   Campaign" button on the site imports `GOOGLE_FORM_URL` from this one
   file.
2. **Swap in real brand and creator assets.** Sample/portfolio entries
   live in `src/data/brands.js` and `src/data/creators.js`. Drop real,
   permitted logos and images into `public/images/brands/` and
   `public/images/creators/`, then update the `logo` / `image` paths in
   those data files. Until real assets are added, the site uses neutral
   placeholder illustrations (initials-based, no invented photos of real
   people).
3. **Add real creator profile links.** Set `profileUrl` in
   `src/data/creators.js` once you have a valid link for a creator — until
   then, that creator's "View Creator" button renders in a disabled state
   rather than linking anywhere invented.

## Project structure

```
src/
  components/   Navbar, Hero, Brands, BrandCard, Creators, CreatorCard,
                HowItWorks, WhyVirtualSponsor, CTA, Footer
  data/         brands.js, creators.js — sample/portfolio content
  config/       googleForm.js — single source of truth for the campaign link
public/
  images/brands/     brand logo + campaign placeholders
  images/creators/   creator avatar placeholders
```

## Build

```bash
npm run build
```

Outputs a static `dist/` folder.

## Deploying

The build output in `dist/` is a static site and can be deployed to
GitHub Pages, Vercel, Netlify, or any static host. For GitHub Pages:

1. Push this project to a GitHub repository.
2. Run `npm run build`.
3. Deploy the `dist/` folder (via GitHub Actions, the `gh-pages` package,
   or your host's Git integration).

## Notes on content

All brand and creator entries are sample/portfolio content, clearly
labeled as such (`Sample Campaign`, `Portfolio Example`, `Sample
Creator`). None of it implies an active partnership, endorsement, or
real campaign result — replace with real client data only once
permission is confirmed.
