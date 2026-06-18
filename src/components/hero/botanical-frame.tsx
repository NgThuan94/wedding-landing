// Mediterranean foliage that frames the arch like the watercolor intro:
// magenta bougainvillea climbing from the top corners + terracotta pots at the
// base. Flat color blocking only — NO shadows/gradients. Three depth groups
// drive parallax via [data-depth] (read by use-parallax-layers). Decorative.

/** A stylized bougainvillea cluster: three papery magenta bracts + a leaf. */
function Sprig({ flip = false }: { flip?: boolean }) {
  return (
    <g transform={flip ? "scale(-1,1) translate(-120,0)" : undefined}>
      <path d="M10 0 C40 14 64 36 78 72" stroke="#3f6b46" strokeWidth="2.5" fill="none" />
      <path d="M30 14 C22 8 14 10 8 2 C18 4 26 8 34 8 Z" fill="#4f7a52" />
      <path d="M52 30 C44 24 36 26 30 18 C40 20 48 24 56 24 Z" fill="#4f7a52" />
      {/* bract clusters (groups of three) */}
      <g fill="#cf3a6f">
        <path d="M40 26 l8 -5 l3 9 Z" />
        <path d="M48 24 l9 -2 l-2 9 Z" />
        <path d="M45 33 l8 4 l3 -8 Z" />
      </g>
      <g fill="#b62e5e">
        <path d="M64 44 l8 -5 l3 9 Z" />
        <path d="M72 42 l9 -2 l-2 9 Z" />
        <path d="M69 51 l8 4 l3 -8 Z" />
      </g>
      <circle cx="50" cy="29" r="1.6" fill="#f6bba4" />
      <circle cx="74" cy="47" r="1.6" fill="#f6bba4" />
    </g>
  );
}

/** A simple terracotta pot with a green geranium and a few coral blooms. */
function Pot() {
  return (
    <svg viewBox="0 0 80 96" className="w-full" aria-hidden>
      <path d="M18 44 h44 l-6 40 h-32 Z" fill="#c2683f" />
      <rect x="14" y="38" width="52" height="8" fill="#a8552f" />
      <g fill="#3f6b46">
        <circle cx="32" cy="30" r="12" />
        <circle cx="48" cy="28" r="11" />
        <circle cx="40" cy="18" r="10" />
      </g>
      <circle cx="34" cy="22" r="3" fill="#ff5734" />
      <circle cx="46" cy="20" r="3" fill="#cf3a6f" />
      <circle cx="40" cy="30" r="3" fill="#ff5734" />
    </svg>
  );
}

export function BotanicalFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Back layer — bougainvillea bleeding from the top-left, slowest */}
      <svg
        data-depth="0.25"
        className="absolute -left-[6%] -top-[4%] w-[46vw] max-w-[440px]"
        viewBox="0 0 120 90"
      >
        <Sprig />
      </svg>

      {/* Mid layer — bougainvillea bleeding from the top-right */}
      <svg
        data-depth="0.55"
        className="absolute -right-[6%] -top-[2%] w-[42vw] max-w-[400px]"
        viewBox="0 0 120 90"
      >
        <Sprig flip />
      </svg>

      {/* Front layer — terracotta pots flanking the arch base, fastest */}
      <div data-depth="0.9" className="absolute bottom-[4%] left-0 right-0 flex justify-between px-[6vw]">
        <div className="w-[18vw] max-w-[120px]">
          <Pot />
        </div>
        <div className="w-[18vw] max-w-[120px]">
          <Pot />
        </div>
      </div>
    </div>
  );
}
