import { CssVariableNameType } from "./getCssProperty";

const parseCssValue = (element: HTMLElement, value: string, fallbackValue?: number): number | undefined => {
    if (value.endsWith("px")) {
        return parseFloat(value);
    } else if (value.endsWith("em")) {
        const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
        return parseFloat(value) * fontSize;
    } else if (value.endsWith("rem")) {
        return parseFloat(value) * 16;
    }

    return fallbackValue;
};

export function getCssPropertyAsNumber(element: HTMLElement, cssProperty: CssVariableNameType): number | undefined;
export function getCssPropertyAsNumber(element: HTMLElement, cssProperty: CssVariableNameType, fallbackValue: number): number;

export function getCssPropertyAsNumber(element: HTMLElement, cssProperty: CssVariableNameType, fallbackValue?: number): number | undefined {
    const cssValue = window.getComputedStyle(element).getPropertyValue(cssProperty);

    if (!cssValue) {
        return fallbackValue;
    }

    if (cssValue.includes("max(")) {
        const match = cssValue.match(/max\(([^,]+),\s*([^,]+)\)/);

        if (match) {
            const value1 = parseCssValue(element, match[1].trim(), fallbackValue);
            const value2 = parseCssValue(element, match[2].trim(), fallbackValue);

            if (!value1 || !value2) {
                return fallbackValue;
            }

            return Math.max(value1, value2);
        }
    }

    return parseCssValue(element, cssValue, fallbackValue);
}
