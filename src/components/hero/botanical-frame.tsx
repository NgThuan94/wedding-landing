// Placeholder flat-vector botanical foliage that bleeds off the hero edges.
// Artwork-palette only, NO shadows/gradients. Three depth groups drive parallax
// via [data-depth] (read by use-parallax-layers). Decorative → aria-hidden.
// Real illustration assets are a future art phase (plan Q3).

export function BotanicalFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Back layer — slowest, large sage leaves bleeding top-left */}
      <svg
        data-depth="0.2"
        className="absolute -left-[12%] -top-[10%] w-[55vw] max-w-[640px]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M20 180 C40 120 80 80 160 40 C120 90 90 130 60 190 Z" fill="#c6d7d0" />
        <path d="M30 175 C55 130 95 100 150 70" stroke="#7e813c" strokeWidth="2" />
      </svg>

      {/* Mid layer — olive stems bleeding bottom-right */}
      <svg
        data-depth="0.5"
        className="absolute -right-[10%] bottom-[-8%] w-[48vw] max-w-[560px]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M190 20 C150 70 120 110 70 180 C110 120 140 80 180 30 Z" fill="#7e813c" />
        <circle cx="60" cy="170" r="8" fill="#e5ba2b" />
        <circle cx="95" cy="135" r="6" fill="#f6bba4" />
      </svg>

      {/* Front layer — fastest, small coral sprig top-right */}
      <svg
        data-depth="0.9"
        className="absolute right-[6%] top-[8%] w-[24vw] max-w-[260px]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M60 110 C60 70 70 40 100 20" stroke="#193c35" strokeWidth="2" />
        <path d="M62 70 C50 60 40 62 30 50 C46 52 54 60 64 60 Z" fill="#ff5734" />
        <path d="M66 90 C56 82 44 84 36 74 C50 76 58 82 68 80 Z" fill="#f6bba4" />
      </svg>
    </div>
  );
}
