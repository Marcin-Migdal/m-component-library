import { CSSProperties } from "react";

export type CssVariableNameType =
  | "--checkbox-input-size"
  | "--border-width"
  | "--error-icon-size"
  | "--error-icon-margin"
  | "--input-padding-left"
  | keyof CSSProperties;

// Overloaded function signatures
export function getCssProperty(element: HTMLElement, cssProperty: CssVariableNameType): string | undefined;
export function getCssProperty(element: HTMLElement, cssProperty: CssVariableNameType, fallbackValue: string): string;

// Function implementation
export function getCssProperty(
  element: HTMLElement,
  cssProperty: CssVariableNameType,
  fallbackValue?: string
): string | undefined {
  const result: string | undefined = window.getComputedStyle(element).getPropertyValue(cssProperty);
  return result ? result : fallbackValue;
}
