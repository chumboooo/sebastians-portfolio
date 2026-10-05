# Sebastian’s Portfolio

Personal website for my projects, experience, resume, and contact links.

Live site: https://sebasad.com/

## Built With

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel

## What’s Included

* Featured projects with screenshots and project links
* Awards section for the NextEra Energy Hackathon
* Experience and leadership timeline
* Toolkit/skills section
* About Me section with personal photos/art
* Contact links for email, LinkedIn, and GitHub
* Light/dark mode
* Responsive layout for desktop and mobile

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Build

```bash
npm run lint
npm run build
```

## Editing Content

Most of the site content is stored in:

```bash
src/data/site.ts
```

Use that file to update:

* Project names and descriptions
* Project links
* Contact links
* Skills
* Experience
* Awards
* Resume path
* Image paths

Images are stored in:

```bash
public/images
```

My resume is served from:

```bash
/Davalos_Sebastian_Resume.pdf
```

Replace the file at `public/Davalos_Sebastian_Resume.pdf` to update the resume.
The navigation and hero use the same path from `src/data/site.ts`.

## Checking Changes

Run lint and build, then use `npm run start` to review the production build.
Check both themes at 375px, 390px, 430px, 768px, and desktop widths.
Use the keyboard to open project cards, cycle through modal links, close with
Escape, and verify focus returns to the card. Also check the mobile menu,
reduced-motion settings, local resume, and external project demos.

The social preview is generated from site data at `/opengraph-image`.
Canonical URLs, `/sitemap.xml`, and `/robots.txt` use `site.links.portfolio`.

## Deployment

This site is deployed with Vercel. Pushing changes to the connected GitHub repo triggers a new deployment.

