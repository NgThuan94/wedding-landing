// Body scroll lock used while the intro gate is active. Try-catch guarded so a
// DOM access failure never breaks the gate state machine.

let previousOverflow = "";

export function lockScroll(): void {
  try {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } catch {
    /* no-op: scrolling stays enabled, not fatal */
  }
}

export function unlockScroll(): void {
  try {
    document.body.style.overflow = previousOverflow;
  } catch {
    /* no-op */
  }
}
