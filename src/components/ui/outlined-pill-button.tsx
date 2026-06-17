import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

/** Coral outlined pill (no fill, 200px radius, uppercase 0.2em). Only interactive shape. */
export function OutlinedPillButton({ children, className = "", ...rest }: Props) {
  return (
    <button
      type="button"
      className={`rounded-pill border border-coral-vermillion bg-transparent px-8 py-3 uppercase text-coral-vermillion ${className}`}
      style={{ letterSpacing: "var(--ls-label)", fontSize: "var(--fs-body-sm)" }}
      {...rest}
    >
      {children}
    </button>
  );
}
