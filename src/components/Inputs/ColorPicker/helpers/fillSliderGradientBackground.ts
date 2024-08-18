export const fillSliderGradientBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const grdWhite = ctx.createLinearGradient(0, 0, width, 0);

    const divider = 1 / 8;

    grdWhite.addColorStop(0, "red");
    grdWhite.addColorStop(divider, "magenta");
    grdWhite.addColorStop(divider * 2, "blue");
    grdWhite.addColorStop(divider * 3, "cyan");
    grdWhite.addColorStop(divider * 4, "lime");
    grdWhite.addColorStop(divider * 5, "yellow");
    grdWhite.addColorStop(divider * 6, "orange");
    grdWhite.addColorStop(1, "red");

    ctx.fillStyle = grdWhite;
    ctx.fillRect(0, 0, width, height);
};
