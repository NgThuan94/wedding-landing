import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { unlockScroll } from "../../lib/scroll-lock";

export type GateState = "idle" | "playing" | "revealing" | "done";

type Options = {
  reducedMotion: boolean;
  onReveal: () => void;
};

/**
 * Intro-gate state machine + media handlers.
 * idle (poster+prompt) → playing → revealing (GSAP) → done.
 * reduced-motion initializes directly at `done` (no gate, no video fetch).
 */
export function useIntroGate({ reducedMotion, onReveal }: Options) {
  const [state, setState] = useState<GateState>(reducedMotion ? "done" : "idle");
  const [waiting, setWaiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);

  // If reduced-motion resolves after mount, jump straight to done.
  useEffect(() => {
    if (reducedMotion) {
      setState((s) => (s === "done" ? s : "done"));
      unlockScroll();
      onReveal();
    }
    // Intentionally runs only when reducedMotion changes.
  }, [reducedMotion]);

  const reveal = useCallback(() => {
    setState("revealing");
    const finish = () => {
      unlockScroll();
      onReveal();
      setState("done");
    };
    if (reducedMotion || !gateRef.current) {
      finish();
      return;
    }
    gsap.to(gateRef.current, {
      autoAlpha: 0,
      scale: 1.04,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: finish,
    });
  }, [reducedMotion, onReveal]);

  const startPlay = useCallback(async () => {
    setState("playing");
    const video = videoRef.current;
    if (!video) {
      reveal();
      return;
    }
    try {
      video.muted = false;
      await video.play();
    } catch {
      // Autoplay-with-sound blocked → retry muted; if that fails, skip.
      try {
        video.muted = true;
        await video.play();
      } catch {
        reveal();
      }
    }
  }, [reveal]);

  const handleEnded = useCallback(() => reveal(), [reveal]);
  const skip = useCallback(() => reveal(), [reveal]);
  const handleError = useCallback(() => reveal(), [reveal]);
  const handleWaiting = useCallback(() => setWaiting(true), []);
  const handlePlaying = useCallback(() => setWaiting(false), []);

  return {
    state,
    waiting,
    videoRef,
    gateRef,
    startPlay,
    handleEnded,
    handleError,
    handleWaiting,
    handlePlaying,
    skip,
  };
}
