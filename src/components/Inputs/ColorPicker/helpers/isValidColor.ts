import { ColorValue } from "../types";

export const isValidColor = (value: ColorValue): boolean => {
  if (typeof value === "string") {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

    return hexColorRegex.test(value);
  }

  if ("h" in value && "l" in value && "s" in value) {
    const { h, s, l } = value;

    return (
      typeof h === "number" &&
      typeof s === "number" &&
      typeof l === "number" &&
      h >= 0 &&
      h <= 360 &&
      s >= 0 &&
      s <= 100 &&
      l >= 0 &&
      l <= 100
    );
  }

  if ("r" in value && "g" in value && "b" in value) {
    const { r, g, b } = value;

    return (
      typeof r === "number" &&
      typeof g === "number" &&
      typeof b === "number" &&
      r >= 0 &&
      r <= 255 &&
      g >= 0 &&
      g <= 255 &&
      b >= 0 &&
      b <= 255
    );
  }

  return false;
};
