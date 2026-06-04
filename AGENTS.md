# Sebastian Portfolio Agent Notes

This project is a personal portfolio for Sebastian Davalos, a Computer Engineering student at Florida State University. Keep future changes recruiter-friendly, personal, and easy to maintain.

## Tech Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS
- Reusable React components

## Content Rules

- Keep editable portfolio copy in `src/data/site.ts`.
- Do not hard-code project descriptions, links, skills, leadership items, or contact links in components unless there is a strong reason.
- Use placeholder links as `#` until real links are available.
- Do not invent achievements, metrics, employers, awards, or project outcomes.
- Featured projects are currently limited to StudyStack AI, The Actuary, and SmartGallery.
- The NextEra Energy Hackathon content belongs under an "Awards" section, not as a featured project.
- Do not add Anchor RSO App, Handshake AI, or Project Hedgehog until Sebastian asks.
- Prefer minimal copy. Do not add explanatory section paragraphs unless Sebastian specifically asks for them. The site should feel like a personal website, not a resume rewritten as a landing page.
- NextBud wording should say Sebastian conceptualized and pitched it with a team, not that he solely built it.
- The About section heading should be "About Me!".
- Do not add a separate photo of Sebastian unless he specifically asks.
- Contact should include Email, LinkedIn, and GitHub only.

## Design Direction

- Modern, clean, human, polished, and easy to skim.
- Use strong typography, generous spacing, subtle borders/shadows, responsive mobile-first layout, and accessible contrast.
- Use one tasteful FSU-inspired garnet accent.
- Avoid particle backgrounds, neon cyberpunk visuals, generic glowing blobs, fake dashboards, excessive gradients, overdone animations, robotic copy, lorem ipsum, fake metrics, and random buzzwords.
- Desktop navigation should not duplicate hamburger navigation.
- Header nav links should be centered rounded pills on desktop.
- Hamburger menu is mobile-only unless Sebastian specifically asks otherwise.
- The header should not repeat Sebastian's name or show an SD logo unless Sebastian specifically asks for it.
- The hero is the main identity moment.
- Use subtle reveal-on-scroll animations.
- Avoid scroll-jacking, parallax-heavy effects, and excessive motion.
- Reveal-on-scroll may hide and reveal again on viewport enter/exit if Sebastian asks to test that behavior.
- Respect prefers-reduced-motion.
- Fix hydration issues properly; do not use client-only values during initial render.
- About section is allowed to be more visual/personal with Chewie, friends, and art.
- Contact buttons should use icons/logos and should not use arrow-only styling.
- Sections should not visually appear nested inside each other.

## Implementation Notes

- Prefer focused components in `src/components`.
- Keep cards clear and scannable, with room for future screenshots or photos.
- Make mobile layouts first-class.
- Before handing off changes, run `npm run lint` and `npm run build` when possible.
