import { useRef } from "react";

export const useThrottling = <TEvent>(fn: (event: TEvent) => void, limit: number = 8) => {
  const lastUpdateTime = useRef<number>(0);

  const throttledFunction = (event: TEvent) => {
    const now = Date.now();

    if (now - lastUpdateTime.current >= limit) {
      fn(event);
      lastUpdateTime.current = now;
    }
  };

  return [throttledFunction];
};
