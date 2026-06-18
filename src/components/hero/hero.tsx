import { useRef } from "react";
import { DateEyebrow } from "./date-eyebrow";
import { HeroNameDisplay } from "./hero-name-display";
import { BotanicalFrame } from "./botanical-frame";
import { ArchWindow } from "./arch-window";
import { useHeroEntrance } from "../../animation/use-hero-entrance";
import { useParallaxLayers } from "../../animation/use-parallax-layers";

type Props = {
  revealed: boolean;
  reducedMotion: boolean;
};

/** Full-viewport hero: botanical frame + date eyebrow + couple names. */
export function Hero({ revealed, reducedMotion }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useHeroEntrance({ revealed, reducedMotion, eyebrowRef, nameRef });
  useParallaxLayers({ rootRef, reducedMotion, enabled: revealed });

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-blush-canvas px-6"
    >
      <BotanicalFrame />
      <div className="relative z-10 flex w-full flex-col items-center gap-6">
        <DateEyebrow ref={eyebrowRef} />
        <ArchWindow>
          <HeroNameDisplay ref={nameRef} />
        </ArchWindow>
      </div>
    </section>
  );
}
