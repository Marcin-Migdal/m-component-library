import { hslToRgb } from "./hslToRgb";
import { rgbToHex } from "./rgbToHex";

export const hslToHex = (h: number, s: number, l: number): string => {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
};
