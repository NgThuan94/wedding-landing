type Props = {
  children: React.ReactNode;
};

/**
 * Arched "open door" window echoing the watercolor intro: a tall arch framing a
 * flat-blocked sea view (sky · cliffs · sea bands) with two seagull strokes.
 * Names are rendered as `children`, centered over the sea. No gradients/shadows —
 * depth comes from flat color blocking, per the design system.
 */
export function ArchWindow({ children }: Props) {
  return (
    <div className="relative aspect-[3/4.2] w-full max-w-[400px] overflow-hidden rounded-t-full border-2 border-cobalt bg-sea">
      {/* Sky through the arch */}
      <div className="absolute inset-x-0 top-0 h-[40%] bg-sky-haze" aria-hidden />

      {/* Cliffs + horizon, sitting on the sky/sea boundary */}
      <svg
        className="absolute inset-x-0 top-[30%] w-full"
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 22 L0 13 C10 8 18 11 26 7 C32 4 38 9 44 10 L44 22 Z" fill="#9aa7a0" />
        <path d="M0 22 L0 16 C8 13 14 15 22 12 C28 10 34 13 40 14 L40 22 Z" fill="#7e8a83" />
      </svg>

      {/* Deeper sea band at the base */}
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-sea-deep" aria-hidden />

      {/* Seagulls — thin strokes in the sky */}
      <svg className="absolute left-[24%] top-[14%] w-16" viewBox="0 0 40 14" fill="none" aria-hidden>
        <path d="M2 12 C7 4 11 4 14 10 C17 4 21 4 26 12" stroke="#11223f" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <svg className="absolute right-[20%] top-[22%] w-10" viewBox="0 0 40 14" fill="none" aria-hidden>
        <path d="M2 12 C7 4 11 4 14 10 C17 4 21 4 26 12" stroke="#11223f" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      {/* Names, biased below the cliffs so they sit fully over the sea */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-[16%]">
        {children}
      </div>
    </div>
  );
}
