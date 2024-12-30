import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottling = <T extends (...args: any[]) => void>(
  fn: T,
  limit: number = 8
): [(...args: Parameters<T>) => void] => {
  const lastUpdateTime = useRef<number>(0);

  const throttledFunction = (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastUpdateTime.current >= limit) {
      fn(...args);
      lastUpdateTime.current = now;
    }
  };

  return [throttledFunction];
};
