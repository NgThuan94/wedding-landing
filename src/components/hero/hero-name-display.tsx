import { forwardRef } from "react";
import { couple } from "../../data/content";

/**
 * The couple's names in Cormorant ultra-light with a thin coral × between them.
 * `clamp()` keeps the display size responsive; line-height 0.85 per the type scale.
 * VN diacritics ("Hải Dương", "Ngọc Châu") come from the Vietnamese font subset.
 */
export const HeroNameDisplay = forwardRef<HTMLHeadingElement>(function HeroNameDisplay(
  _props,
  ref
) {
  return (
    <h1
      ref={ref}
      className="font-display font-light leading-[0.85] text-center text-ink-navy"
      style={{ fontSize: "clamp(48px, 14vw, 120px)" }}
    >
      <span className="whitespace-nowrap">{couple.bride}</span>
      <span className="text-coral-vermillion font-thin mx-[0.1em]" aria-hidden>
        {couple.separator}
      </span>
      <span className="whitespace-nowrap">{couple.groom}</span>
    </h1>
  );
});
