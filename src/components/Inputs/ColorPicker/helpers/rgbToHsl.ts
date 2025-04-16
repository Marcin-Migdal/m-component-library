import { HslValue, RgbValue } from "../types";

export const rgbToHsl = <TRgbValue extends RgbValue | null>(
  rgb: TRgbValue
): TRgbValue extends null ? null : HslValue => {
  if (rgb === null) {
    return null as TRgbValue extends null ? null : HslValue;
  }

  let { r, g, b } = rgb;

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;

  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h *= 60;
  }

  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) } as TRgbValue extends null
    ? null
    : HslValue;
};
