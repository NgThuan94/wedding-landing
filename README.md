# Wedding Landing — Hải Dương × Ngọc Châu

Mobile-first online wedding invitation landing page. Video-intro gate → full hero →
placeholder later sections (Our Story, Fun Facts, Event Details, RSVP).

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `@theme`)
- GSAP (ScrollTrigger — parallax + snap, free tier only)
- pnpm 10 / Node 20

## Design system (Daniela & Moe — botanical blush)

Blush-canvas page bg (never pure white), ink-navy text (never `#000`),
coral-vermillion as the only warm accent. Flat color blocking — no shadows, no gradients.
Pills = 200px radius (only interactive shape); cards/inputs = sharp 0px.
Fonts: Cormorant Garamond (display) + Inter (body), Vietnamese subsets.

## Develop

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # static dist/
pnpm preview
pnpm lint
```

## Intro video assets

`public/intro.mp4` (H.264+AAC, faststart), `public/intro.webm` (VP9+Opus), and
`public/intro-poster.jpg` are generated from a source `.mov` via ffmpeg. The `.mov`
is gitignored and never shipped. To regenerate:

```bash
SRC="/path/to/source.mov"
ffmpeg -i "$SRC" -vf "scale='min(1080,iw)':-2" -c:v libx264 -profile:v main \
  -crf 24 -preset slow -c:a aac -b:a 128k -movflags +faststart public/intro.mp4
ffmpeg -i "$SRC" -vf "scale='min(1080,iw)':-2" -c:v libvpx-vp9 -crf 33 -b:v 0 \
  -c:a libopus -b:a 128k public/intro.webm
ffmpeg -ss 0.5 -i "$SRC" -frames:v 1 -q:v 3 public/intro-poster.jpg
```

## Accessibility

`prefers-reduced-motion` is respected everywhere: the intro gate is skipped, parallax and
snap-scroll are disabled, and a static layout is shown.
