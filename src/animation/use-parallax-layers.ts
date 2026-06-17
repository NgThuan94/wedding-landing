import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger, registerGsap } from "./register-gsap";

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  reducedMotion: boolean;
  enabled: boolean;
};

/**
 * Parallax botanical layers: each `[data-depth]` element scrubs at a depth-scaled
 * speed as the hero scrolls past. reduced-motion → no-op.
 */
export function useParallaxLayers({ rootRef, reducedMotion, enabled }: Options) {
  useEffect(() => {
    if (reducedMotion || !enabled || !rootRef.current) return;
    registerGsap();
    const root = rootRef.current;
    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]"));
    const ctx = gsap.context(() => {
      layers.forEach((el) => {
        const depth = Number(el.dataset.depth ?? 0); // 0..1
        gsap.to(el, {
          yPercent: depth * 20,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [rootRef, reducedMotion, enabled]);
}
