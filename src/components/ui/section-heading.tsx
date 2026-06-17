type Props = {
  children: React.ReactNode;
};

/** Serif section heading (Cormorant), centered, ink-navy. */
export function SectionHeading({ children }: Props) {
  return (
    <h2
      className="font-display font-light text-center text-ink-navy"
      style={{ fontSize: "clamp(28px, 6vw, 48px)", lineHeight: "var(--lh-heading-lg)" }}
    >
      {children}
    </h2>
  );
}
