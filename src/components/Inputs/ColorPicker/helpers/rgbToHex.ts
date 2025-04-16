import { RgbValue } from "../types";

export const rgbToHex = <TRgbValue extends RgbValue | null>(rgb: TRgbValue): TRgbValue extends null ? null : string => {
  if (rgb === null) {
    return null as TRgbValue extends null ? null : string;
  }

  const { r, g, b } = rgb;

  const clamp = (value: number) => Math.max(0, Math.min(255, value));
  const toHex = (value: number) => clamp(value).toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}` as TRgbValue extends null ? null : string;
};
