import { useIntroGate } from "./use-intro-gate";
import { couple } from "../../data/content";

type Props = {
  reducedMotion: boolean;
  onReveal: () => void;
};

/** Full-viewport intro gate: poster → tap-to-play video w/ sound → GSAP reveal → hero. */
export function IntroGate({ reducedMotion, onReveal }: Props) {
  const gate = useIntroGate({ reducedMotion, onReveal });

  if (gate.state === "done") return null;

  const isPlaying = gate.state === "playing";

  return (
    <div
      ref={gate.gateRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blush-canvas"
      role="dialog"
      aria-label="Mở thiệp cưới"
    >
      {/* Poster still (instant) / video on play */}
      {isPlaying ? (
        <video
          ref={gate.videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          preload="auto"
          poster="/intro-poster.jpg"
          onEnded={gate.handleEnded}
          onError={gate.handleError}
          onWaiting={gate.handleWaiting}
          onPlaying={gate.handlePlaying}
        >
          <source src="/intro.webm" type="video/webm" />
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/intro-poster.jpg)" }}
          aria-hidden
        />
      )}

      {/* Idle prompt overlay */}
      {gate.state === "idle" && (
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <p
            className="font-display text-pure-white"
            style={{ fontSize: "clamp(32px, 8vw, 56px)", lineHeight: 1.1 }}
          >
            {couple.bride}
            <span className="text-coral-vermillion mx-[0.15em]" aria-hidden>
              {couple.separator}
            </span>
            {couple.groom}
          </p>
          <button
            type="button"
            onClick={gate.startPlay}
            className="rounded-pill border border-coral-vermillion px-8 py-3 text-coral-vermillion uppercase bg-blush-canvas"
            style={{ letterSpacing: "var(--ls-label)", fontSize: "var(--fs-body-sm)" }}
          >
            Mở thiệp
          </button>
        </div>
      )}

      {/* Skip control (always available pre-/mid-play) */}
      {gate.state !== "revealing" && (
        <button
          type="button"
          onClick={gate.skip}
          className="absolute top-5 right-5 z-10 text-pure-white uppercase opacity-80"
          style={{ letterSpacing: "var(--ls-label)", fontSize: "var(--fs-caption)" }}
        >
          Bỏ qua
        </button>
      )}

      {/* Spinner only while genuinely buffering */}
      {gate.waiting && (
        <div
          className="absolute z-20 h-10 w-10 animate-spin rounded-full border-2 border-pure-white border-t-transparent"
          role="status"
          aria-label="Đang tải"
        />
      )}
    </div>
  );
}
