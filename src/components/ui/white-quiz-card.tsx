import { Heart, Coffee, MapPin, Music, type LucideIcon } from "lucide-react";
import type { FunFact } from "../../data/content";

const ICONS: Record<FunFact["icon"], LucideIcon> = {
  heart: Heart,
  coffee: Coffee,
  "map-pin": MapPin,
  music: Music,
};

type Props = {
  icon: FunFact["icon"];
  label: string;
};

/** Pure-white card: NO border, NO shadow, NO radius. Line-art icon + Inter label. */
export function WhiteQuizCard({ icon, label }: Props) {
  const Icon = ICONS[icon];
  return (
    <div className="flex flex-col items-center gap-3 bg-pure-white p-8 text-ink-navy">
      <Icon size={28} strokeWidth={1.5} aria-hidden />
      <span className="font-body" style={{ fontSize: "var(--fs-body-sm)" }}>
        {label}
      </span>
    </div>
  );
}
