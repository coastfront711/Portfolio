# Jordan Reyes — Portfolio (Next.js)

A Next.js 14 (App Router) port of the video-editing portfolio, using
`next/font` for Anton / Inter / IBM Plex Mono, and a small client component
(`PillNav`) for the scroll-based nav highlighting.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

- `app/page.tsx` — all page content: name, bio, projects, contact info.
  The project list lives in the `PROJECTS` array near the top of the file —
  edit the `title`, `meta`, and `gradient` fields, or swap `gradient` for a
  real thumbnail image later.
- `app/globals.css` — all styling (colors, chrome-text effect, masonry
  grid, etc.), ported directly from the original CSS.
- `components/PillNav.tsx` — the floating top nav; add/remove tabs in the
  `LINKS` array.
- `app/layout.tsx` — page `<title>`/meta description, and font setup.

## Adding real photos

The circular "JR" placeholders in `app/page.tsx` (`.photo-halo .frame`) are
plain text. To use a real photo, swap the `<span>JR</span>` for a Next.js
`<Image>`:

```tsx
import Image from "next/image";

<div className="frame">
  <Image src="/me.jpg" alt="Jordan Reyes" fill style={{ objectFit: "cover" }} />
</div>
```

Drop the image file in `public/` first (e.g. `public/me.jpg`).

## Build for production

```bash
npm run build
npm run start
```
