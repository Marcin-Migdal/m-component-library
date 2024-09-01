import { ColorValue, defaultColorPickerValue, RgbValue } from "../types";
import { hexToRgb } from "./hexToRgb";
import { hslToRgb } from "./hslToRgb";

export const valueToRgb = (value: ColorValue): RgbValue => {
    if (typeof value === "string") {
        return hexToRgb(value) || defaultColorPickerValue;
    } else if ("r" in value && "g" in value && "b" in value) {
        return value;
    } else {
        return hslToRgb(value.h, value.s, value.l);
    }
};
