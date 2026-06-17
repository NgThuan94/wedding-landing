import { SectionHeading } from "../ui/section-heading";
import { BodyParagraph } from "../ui/body-paragraph";
import { content } from "../../data/content";

export function OurStory() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-10 bg-blush-canvas px-6">
      <SectionHeading>{content.story.heading}</SectionHeading>
      <BodyParagraph>{content.story.body}</BodyParagraph>
    </section>
  );
}
