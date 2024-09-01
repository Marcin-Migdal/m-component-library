import { RgbValue } from "../types";
import { hslToRgb } from "./hslToRgb";

export const fillPickerGradientBackground = (ctx: CanvasRenderingContext2D, width: number, height: number, hue: number) => {
    const rgb: RgbValue = hslToRgb(hue);

    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
    ctx.fillRect(0, 0, width, height);

    const grdWhite = ctx.createLinearGradient(0, 0, width, 0);
    grdWhite.addColorStop(0, "rgba(255,255,255,1)");
    grdWhite.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grdWhite;
    ctx.fillRect(0, 0, width, height);

    const grdBlack = ctx.createLinearGradient(0, 0, 0, height);
    grdBlack.addColorStop(0, "rgba(0,0,0,0)");
    grdBlack.addColorStop(1, "rgba(0,0,0,1)");
    ctx.fillStyle = grdBlack;
    ctx.fillRect(0, 0, width, height);
};
