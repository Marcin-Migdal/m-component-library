export type Position = {
    left: number;
    top: number;
};

const sliderThumbRadius = 7;

export const getValuePosition = (inputElement: HTMLInputElement, max: number, value: number): Position => {
    const { top, left, width } = inputElement.getBoundingClientRect();

    const calcTop: number = top + 8;
    const offset: number = sliderThumbRadius - ((sliderThumbRadius * value) / max) * 2;

    if (value === 0) return { top: calcTop, left: left + offset };

    return { top: calcTop, left: left + offset + (value / max) * width };
};
