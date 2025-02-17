import { CssVariableNameType } from "./getCssProperty";

export const setCssProperty = (element: HTMLElement, cssVariableName: CssVariableNameType, value: string | null) => {
  element.style.setProperty(cssVariableName, value);
};
