import { useEffect, useState } from "react";

type BreakpointKey = "sm" | "md" | "lg" | "xl";

type BreakpointMap = Record<BreakpointKey, boolean>;

const queries: Record<BreakpointKey, string> = {
  sm: "(max-width: 768px)",
  md: "(min-width: 768px) and (max-width: 992px)",
  lg: "(min-width: 992px) and (max-width: 1200px)",
  xl: "(min-width: 1200px)",
};

export function useBreakpoint<K extends BreakpointKey>(
  breakpointsToCheck: Record<K, boolean>,
): [Record<K, boolean>, K | undefined];
export function useBreakpoint(breakpointsToCheck: Partial<Record<BreakpointKey, boolean>>) {
  const keys = Object.keys(breakpointsToCheck) as BreakpointKey[];

  const [breakpoints, setBreakpoints] = useState(() => {
    const initialState: Partial<BreakpointMap> = {};

    keys.forEach((key) => {
      initialState[key] = false; // Initialize to false (SSR safe) or matchMedia if CSR

      if (typeof window !== "undefined") {
        initialState[key] = window.matchMedia(queries[key]).matches;
      }
    });

    return initialState as BreakpointMap;
  });

  const activeBreakpoint = keys
    .filter((key) => breakpoints[key])
    .sort((a, b) => {
      const order: BreakpointKey[] = ["sm", "md", "lg", "xl"];
      return order.indexOf(b) - order.indexOf(a); // Sort descending (xl > lg > md > sm)
    })[0];

  useEffect(() => {
    const mediaQueryLists: Record<string, MediaQueryList> = {};

    keys.forEach((key) => {
      mediaQueryLists[key] = window.matchMedia(queries[key]);
    });

    const updateBreakpoints = () => {
      setBreakpoints((prev) => {
        const next = { ...prev };
        let changed = false;

        keys.forEach((key) => {
          const matches = mediaQueryLists[key].matches;

          if (next[key] !== matches) {
            next[key] = matches;
            changed = true;
          }
        });

        return changed ? next : prev;
      });
    };

    // Initial check in effect to ensure synchronization
    updateBreakpoints();

    keys.forEach((key) => {
      mediaQueryLists[key].addEventListener("change", updateBreakpoints);
    });

    return () => {
      keys.forEach((key) => {
        mediaQueryLists[key].removeEventListener("change", updateBreakpoints);
      });
    };
  }, [JSON.stringify(keys)]);

  return [breakpoints, activeBreakpoint];
}
