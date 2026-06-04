# Sebastian Portfolio

A personal portfolio for Sebastian Davalos, a Computer Engineering student at Florida State University. The site highlights featured projects, awards, experience, skills, and contact links in a clean dark/light responsive interface.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Features

- Responsive single-page portfolio layout
- Light/dark theme toggle with persisted preference
- Featured project cards with accessible link modals
- Awards, experience, toolkit, about, and contact sections
- Editable content data in one place

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to review the site.

## Build

```bash
npm run lint
npm run build
```

## Editing Content

Most portfolio text, links, skills, projects, highlights, and leadership entries live in:

```text
src/data/site.ts
```

Update that file first when changing resume links, project descriptions, contact URLs, or section copy.

Images live in:

```text
public/images
```

The resume file is served at:

```text
/Davalos_Sebastian_Resume.pdf
```

## Deployment

This project is ready to deploy on Vercel. Connect the repository, keep the default Next.js build settings, and Vercel will run `npm run build`.
