type CssVariableNameType = "--checkbox-input-size" | "--checkbox-border-line-width" | "--error-icon-size" | "--error-icon-margin";

// Overloaded function signatures
export function getCssVariable(element: HTMLElement, cssProperty: CssVariableNameType): string | undefined;
export function getCssVariable(element: HTMLElement, cssProperty: CssVariableNameType, fallbackValue: string): string;

// Function implementation
export function getCssVariable(element: HTMLElement, cssProperty: CssVariableNameType, fallbackValue?: string): string | undefined {
    const result: string | undefined = window.getComputedStyle(element).getPropertyValue(cssProperty);
    return result ? result : fallbackValue;
}

export const setCssVariable = (element: HTMLElement, cssVariableName: CssVariableNameType, value: string | null) => {
    element.style.setProperty(cssVariableName, value);
};
