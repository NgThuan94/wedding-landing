import { forwardRef } from "react";
import { dateEyebrow } from "../../data/content";

/** Small-caps eyebrow above the names (Inter, uppercase, 0.2em tracking). */
export const DateEyebrow = forwardRef<HTMLParagraphElement>(function DateEyebrow(_props, ref) {
  return (
    <p
      ref={ref}
      className="font-body font-medium uppercase text-ink-navy text-center"
      style={{ letterSpacing: "var(--ls-label)", fontSize: "var(--fs-body-sm)" }}
    >
      {dateEyebrow.label} · {dateEyebrow.value}
    </p>
  );
});
