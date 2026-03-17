"use client";

import { useEffect, useState } from "react";

// Module-level set: resets on page refresh (JS module reloads),
// but persists during client-side navigation (module stays in memory).
const played = new Set<string>();

export function usePlayOnce(key: string): boolean {
  // useState lazy initializer runs synchronously at render time —
  // before any effects, so all components sharing the same key
  // in the same render pass all read the same value from `played`.
  const [shouldPlay] = useState<boolean>(
    () => typeof window === "undefined" ? true : !played.has(key)
  );

  useEffect(() => {
    played.add(key);
  }, [key]);

  return shouldPlay;
}
