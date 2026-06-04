# Sebastian’s Portfolio

Personal website for my projects, experience, resume, and contact links.

Live site: https://sebastians-portfolio-six.vercel.app/

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

## Deployment

This site is deployed with Vercel. Pushing changes to the connected GitHub repo triggers a new deployment.

