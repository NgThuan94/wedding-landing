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
      className="flex flex-col items-center text-center font-display font-light leading-[0.9] text-pure-white"
      style={{ fontSize: "clamp(34px, 10vw, 76px)" }}
    >
      <span className="whitespace-nowrap">{couple.bride}</span>
      <span
        className="my-0.5 font-thin text-coral-vermillion"
        style={{ fontSize: "0.82em", lineHeight: 1 }}
        aria-hidden
      >
        {couple.separator}
      </span>
      <span className="whitespace-nowrap">{couple.groom}</span>
    </h1>
  );
});
