import { SectionHeading } from "../ui/section-heading";
import { content } from "../../data/content";

export function EventDetails() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-8 bg-blush-canvas px-6">
      <SectionHeading>{content.details.heading}</SectionHeading>
      <ul className="flex flex-col items-center gap-3">
        {content.details.lines.map((line, i) => (
          <li
            key={i}
            className="font-body font-light text-ink-navy"
            style={{ fontSize: "var(--fs-body)" }}
          >
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
