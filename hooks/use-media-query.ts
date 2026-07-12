"use client";

import { useEffect, useState } from "react";

/**
 * Layout is driven by Tailwind breakpoints, not JS. This exists only for the
 * cases CSS cannot express — closing the mobile drawer when the viewport grows
 * past the breakpoint that hides its trigger.
 *
 * Returns false on the server and on first paint so markup stays stable.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    setMatches(list.matches);

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
