import { useEffect, useRef, type RefObject } from "react";
import { gsap, registerGsap } from "./register-gsap";

type Options = {
  revealed: boolean;
  reducedMotion: boolean;
  eyebrowRef: RefObject<HTMLElement | null>;
  nameRef: RefObject<HTMLElement | null>;
};

/**
 * Hero entrance timeline, built paused; `.play()` only once the gate reveals.
 * reduced-motion: no timeline, elements stay statically visible.
 */
export function useHeroEntrance({ revealed, reducedMotion, eyebrowRef, nameRef }: Options) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    registerGsap();
    const tl = gsap.timeline({ paused: true });
    if (eyebrowRef.current) {
      tl.from(eyebrowRef.current, { autoAlpha: 0, y: 16, duration: 0.6, ease: "power2.out" });
    }
    if (nameRef.current) {
      tl.from(
        nameRef.current,
        { autoAlpha: 0, y: 24, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    }
    tlRef.current = tl;
    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [reducedMotion, eyebrowRef, nameRef]);

  useEffect(() => {
    if (revealed && !reducedMotion) tlRef.current?.play();
  }, [revealed, reducedMotion]);
}
