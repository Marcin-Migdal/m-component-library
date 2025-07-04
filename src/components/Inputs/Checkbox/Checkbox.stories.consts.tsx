// CSS variable documentation for Checkbox component
// Used for auto-generating the CSSVariables story table

import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const checkboxCssVariables: CssVariableData[] = [
  {
    variable: "--checkbox-input-size",
    description: "Size of the checkbox input (depends on size prop)",
    defaultValue: "calc(var(--input-height) - 6px) | -8px | -10px",
    rootValue: "Depends on --input-height (theme variable)",
  },
  {
    variable: "--checkbox-color",
    description: "Checkbox color (border and checkmark)",
    defaultValue:
      "var(--primary-color_300) [light-default] | var(--primary-color_580) [light-custom] | var(--primary-color_620) [dark-default] | var(--primary-color_680) [dark-custom]",
    rootValue:
      "hsl(0, 0%, 34%) [light-default] | hsl(var(--hue), var(--saturation), 59%) [light-custom] | hsl(0, 0%, 72%) [dark-default] | hsl(var(--hue), var(--saturation), 69%) [dark-custom]",
  },
  {
    variable: "--input-disabled-text-color",
    description: "Color for disabled checkbox",
    defaultValue: "var(--grey-color-325) [light] | var(--grey-color-450) [dark]",
    rootValue: "hsl(0, 0%, 62%) [light] | hsl(0, 0%, 47%) [dark]",
  },
  {
    variable: "--radius-md",
    description: "Border radius for checkbox",
    defaultValue: "theme value",
    rootValue: "theme value",
  },
  {
    variable: "--border-base",
    description: "Border width for checkbox",
    defaultValue: "theme value",
    rootValue: "theme value",
  },
  {
    variable: "--transition-duration-normal",
    description: "Transition duration for checkbox",
    defaultValue: "theme value",
    rootValue: "theme value",
  },
  {
    variable: "--transition-duration-fast",
    description: "Transition duration for check icon",
    defaultValue: "theme value",
    rootValue: "theme value",
  },
];
