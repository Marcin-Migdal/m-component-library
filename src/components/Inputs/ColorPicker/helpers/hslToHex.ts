import { hslToRgb } from "./hslToRgb";
import { rgbToHex } from "./rgbToHex";

export const hslToHex = (h: number, s: number, l: number): string => {
  const rgb = hslToRgb(h, s, l);

  return rgbToHex(rgb);
};
