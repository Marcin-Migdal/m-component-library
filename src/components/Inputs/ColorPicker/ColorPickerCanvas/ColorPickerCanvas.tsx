import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import { useThrottling } from "../../../../hooks";
import { calculateIndicatorPosition, fillPickerGradientBackground } from "../helpers";
import { CanvasCoordinates, RgbValue } from "../types";

import "./ColorPickerCanvas.css";

type ColorPickerCanvasProps = {
  value: RgbValue;
  hue: number;
  onChange: (arg: RgbValue) => void;
};

export const ColorPickerCanvas = ({ value, hue, onChange }: ColorPickerCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState<CanvasCoordinates | undefined>(undefined);

  const [throttledChangeColor] = useThrottling((e: MouseEvent | React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const { left, top } = canvas.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const clampedX = Math.max(1, Math.min(x, canvas.width - 1));
    const clampedY = Math.max(1, Math.min(y, canvas.height));

    const imageData = ctx.getImageData(clampedX, clampedY, 1, 1).data;

    setIndicatorPosition({ x: clampedX, y: clampedY });

    onChange({
      r: imageData[0],
      g: imageData[1],
      b: imageData[2],
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    if (ctx) {
      ctx.rect(0, 0, width, height);
      fillPickerGradientBackground(ctx, width, height, hue);

      if (!indicatorPosition) {
        const initialPosition = calculateIndicatorPosition(ctx, value, width, height);
        setIndicatorPosition(initialPosition);
      }
    }
  }, [hue]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        throttledChangeColor(e);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, hue, value.r, value.g, value.b]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsDragging(true);
    throttledChangeColor(e);
  };

  return (
    <div className="color-picker-canvas-container">
      <canvas ref={canvasRef} width={300} height={200} onMouseDown={handleMouseDown} />
      {indicatorPosition && (
        <div
          className={classNames("color-picker-pointer", { dragging: isDragging })}
          style={{ top: `${indicatorPosition.y}px`, left: `${indicatorPosition.x}px` }}
        />
      )}
    </div>
  );
};
