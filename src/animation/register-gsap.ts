import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins exactly once. ScrollTrigger (free) covers parallax
// scrub + section snap; ScrollSmoother (paid Club plugin) is intentionally not used.
let registered = false;

export function registerGsap(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
