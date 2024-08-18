import { RgbValue } from "../ColorPicker-interfaces";

export const hexToRgb = (hex: string): RgbValue | undefined => {
    hex = hex.replace(/^#/, "");

    if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
        return undefined;
    }

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
    };
};
