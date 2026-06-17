import { SectionHeading } from "../ui/section-heading";
import { WhiteQuizCard } from "../ui/white-quiz-card";
import { content } from "../../data/content";

export function FunFacts() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-10 bg-blush-canvas px-6">
      <SectionHeading>{content.funFacts.heading}</SectionHeading>
      {/* Blush frame (never white) wrapping a 4px-gap white-card grid. */}
      <div className="w-full max-w-[800px] bg-blush-canvas">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {content.funFacts.items.map((f) => (
            <WhiteQuizCard key={f.id} icon={f.icon} label={f.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
