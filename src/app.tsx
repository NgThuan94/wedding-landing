import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./hooks/use-reduced-motion";
import { lockScroll } from "./lib/scroll-lock";
import { IntroGate } from "./components/intro-gate/intro-gate";
import { Hero } from "./components/hero/hero";
import { OurStory } from "./components/sections/our-story";
import { FunFacts } from "./components/sections/fun-facts";
import { EventDetails } from "./components/sections/event-details";
import { Rsvp } from "./components/sections/rsvp";
import { useSectionSnap } from "./animation/use-section-snap";

export function App() {
  const reducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(reducedMotion);
  const contentRef = useRef<HTMLDivElement>(null);
  const [sectionsCount, setSectionsCount] = useState(0);

  // Lock scroll while the gate is active (not in reduced-motion).
  useEffect(() => {
    if (!reducedMotion && !revealed) lockScroll();
  }, [reducedMotion, revealed]);

  // Derive snap section count from the rendered DOM (tolerates added/removed sections).
  useEffect(() => {
    if (!contentRef.current) return;
    setSectionsCount(contentRef.current.querySelectorAll("section").length);
  }, []);

  useSectionSnap({ sectionsCount, reducedMotion, enabled: revealed });

  return (
    <>
      {!reducedMotion && (
        <IntroGate reducedMotion={reducedMotion} onReveal={() => setRevealed(true)} />
      )}

      {/* Main content stays in the DOM for layout/GSAP measurement, but inert
          and hidden from the a11y tree until the gate reveals it. */}
      <div ref={contentRef} inert={!revealed} aria-hidden={!revealed}>
        <Hero revealed={revealed} reducedMotion={reducedMotion} />
        <OurStory />
        <FunFacts />
        <EventDetails />
        <Rsvp />
      </div>
    </>
  );
}
