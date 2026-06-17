type Props = {
  children: React.ReactNode;
};

/** Inter 300 / 20px body copy, left-aligned inside a centered 600px container. */
export function BodyParagraph({ children }: Props) {
  return (
    <div className="mx-auto max-w-[600px]">
      <p
        className="font-body font-light text-left text-ink-navy"
        style={{ fontSize: "var(--fs-body)", lineHeight: 1.8 }}
      >
        {children}
      </p>
    </div>
  );
}
