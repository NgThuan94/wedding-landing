import { SectionHeading } from "../ui/section-heading";
import { OutlinedPillButton } from "../ui/outlined-pill-button";
import { content } from "../../data/content";

/** Static RSVP — no handler, no network this phase (real form is a future phase). */
export function Rsvp() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-10 bg-blush-canvas px-6">
      <SectionHeading>{content.rsvp.heading}</SectionHeading>
      <OutlinedPillButton>{content.rsvp.cta}</OutlinedPillButton>
    </section>
  );
}
