# Alex & Diane · 22 November 2026

*A little corner of the internet, saved for one day and the people who matter.*

This repository holds our **digital wedding invitation**: one scroll, many chapters—hero film, our story, the day’s rhythm, gifts, details, dress code, RSVP, travel tips, and a footer that still makes us smile.

The experience itself lives in **`public/page1.html`** (fonts, motion, music toggle, bilingual copy, the works). The React shell in `src/` is a slim frame: it loads that page so we can host, build, and deploy with the usual toolchain—nothing more, nothing less.

---

## Quick start

```bash
npm install
npm start
```

Open **http://localhost:3000** — you’ll land straight on the invitation.

| Command        | What it does                          |
|----------------|----------------------------------------|
| `npm start`    | Dev server + hot reload                |
| `npm run build`| Production bundle in `build/`          |
| `npm test`     | Jest smoke test for the shell          |

---

## Where to edit what

| You want to…              | Look here |
|---------------------------|------------|
| Change copy, layout, RSVP | `public/page1.html` |
| Swap hero / entry videos  | `public/assests/` (`video1.MP4`, `entry animation.MP4`, …) |
| Static cover before entry | `assests/entry-animation-cover.jpg` (or `.png` / `.webp`), or `public/animation cover.jpg` |
| Favicon & install icons   | `public/favicon.svg`, `public/icon-192.png`, `public/icon-512.png` |
| App shell / iframe        | `src/App.js`, `src/App.css` |

After editing `page1.html`, refresh the browser; no bundler step required for that file.

---

## Deploy

Build, then serve the `build/` folder on any static host (Netlify, Vercel, GitHub Pages, your own server). The build copies everything under `public/`, including `page1.html` and `assests/`.

---

## Tech notes

- **React 19** + Create React App 5 — iframe loads `/page1.html` full-viewport.
- **No backend** in this demo: RSVP alerts are client-side only; wire your own endpoint if you ship it for real guests.

---

Made with intention for a single Saturday in late autumn—and for everyone who will fill the room.

**#AlexAndDiane2026**
