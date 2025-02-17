import { RgbValue } from "../types";

export const hslToRgb = (h: number, s: number = 100, l: number = 50): RgbValue => {
  s /= 100;
  l /= 100;

  const a = s * Math.min(l, 1 - l);

  const k = (n: number) => (n + h / 30) % 12;
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const r = Math.round(255 * f(0));
  const g = Math.round(255 * f(8));
  const b = Math.round(255 * f(4));

  return { r, g, b };
};
