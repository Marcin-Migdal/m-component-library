import { CSSProperties } from "react";

const sliderThumbRadius = 7;
export const getSliderValueDynamicStyle = (inputElement: HTMLInputElement, max: number, value: number): CSSProperties => {
    const { width } = inputElement.getBoundingClientRect();
    const offset: number = sliderThumbRadius - ((sliderThumbRadius * value) / max) * 2;

    let rightPosition = 0;

    if (value === 0) rightPosition = width - offset;
    else rightPosition = width - offset - (value / max) * width;

    return {
        transform: `translateX(calc(50% - ${rightPosition}px))`,
    };
};
