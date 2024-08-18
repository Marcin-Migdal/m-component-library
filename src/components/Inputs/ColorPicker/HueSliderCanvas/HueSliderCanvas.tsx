import React, { useEffect, useRef, useState } from "react";

import { useThrottling } from "../../../../hooks";
import { CanvasCoordinates } from "../ColorPicker-interfaces";
import { calculateIndicatorPosition, fillSliderGradientBackground, hslToRgb, rgbToHsl } from "../helpers";

import "./HueSliderCanvas.css";

type HueSliderCanvasProps = {
    hue: number;
    onChange: (hue: number) => void;
};

export const HueSliderCanvas = ({ hue, onChange }: HueSliderCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [indicatorPosition, setIndicatorPosition] = useState<CanvasCoordinates | undefined>(undefined);

    const [throttledChangeColor] = useThrottling(changeColor);

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
            fillSliderGradientBackground(ctx, width, height);

            if (!indicatorPosition) {
                const initialPosition = calculateIndicatorPosition(ctx, hslToRgb(hue, 100, 50), width, height);
                setIndicatorPosition(initialPosition);
            }
        }
    }, []);

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
    }, [isDragging, hue]);

    function changeColor(e: MouseEvent | React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(x, canvas.width));

        const imageData = ctx.getImageData(clampedX, canvas.height / 2, 1, 1).data;

        setIndicatorPosition({ x: clampedX, y: 0 });

        onChange(rgbToHsl(imageData[0], imageData[1], imageData[2]).h);
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDragging(true);
        throttledChangeColor(e);
    };

    return (
        <div className="hue-slider-canvas-container">
            <canvas ref={canvasRef} height={16} width={212} onMouseDown={handleMouseDown} />
            {indicatorPosition && (
                <div
                    className={`hue-picker-pointer ${isDragging ? "dragging" : ""}`}
                    style={{ backgroundColor: `hsl(${hue}, 100%, 50%)`, left: `${indicatorPosition.x}px` }}
                />
            )}
        </div>
    );
};
