import { RgbValue } from "../types";

export const calculateIndicatorPosition = (
  ctx: CanvasRenderingContext2D,
  color: RgbValue,
  width: number,
  height: number
): { x: number; y: number } => {
  const imageData = ctx.getImageData(0, 0, width, height).data;
  let closestX = 0;
  let closestY = 0;
  let minDistance = Infinity;

  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];

    const x = (i / 4) % width;
    const y = Math.floor(i / 4 / width);

    const distance = Math.sqrt(Math.pow(r - color.r, 2) + Math.pow(g - color.g, 2) + Math.pow(b - color.b, 2));

    if (distance < minDistance) {
      minDistance = distance;
      closestX = x;
      closestY = y;
    }
  }

  return { x: closestX, y: closestY };
};
