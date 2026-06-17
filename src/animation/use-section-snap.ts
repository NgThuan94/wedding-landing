import { useEffect } from "react";
import { ScrollTrigger, registerGsap } from "./register-gsap";

type Options = {
  sectionsCount: number;
  reducedMotion: boolean;
  enabled: boolean;
};

/**
 * Snap scrolling across full-viewport sections using free ScrollTrigger snap.
 * Snap interval derives from section count so it tolerates added/removed sections.
 * reduced-motion or <2 sections → no-op.
 */
export function useSectionSnap({ sectionsCount, reducedMotion, enabled }: Options) {
  useEffect(() => {
    if (reducedMotion || !enabled || sectionsCount < 2) return;
    registerGsap();
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / (sectionsCount - 1),
        duration: 0.4,
        ease: "power1.inOut",
      },
    });
    return () => trigger.kill();
  }, [sectionsCount, reducedMotion, enabled]);
}
