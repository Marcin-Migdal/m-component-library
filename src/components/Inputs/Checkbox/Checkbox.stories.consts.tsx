// CSS variable documentation for Checkbox component
// Used for auto-generating the CSSVariables story table

import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const checkboxCssVariables: CssVariableData[] = [
  {
    variable: "--checkbox-input-size",
    description: "Size of the checkbox input (depends on size prop)",
    defaultValue:
      "calc(var(--input-height) - 6px) [small] | calc(var(--input-height) - 8px) [medium] | calc(var(--input-height) - 10px) [large]",
    rootValue:
      "18px [small] | 26px [medium] | 31px [large] (using --small-input-height: 24px, --medium-input-height: 34px, --large-input-height: 41px)",
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
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--border-base",
    description: "Border width for checkbox",
    defaultValue: "max(2px, 0.125em)",
    rootValue: "2px",
  },
  {
    variable: "--transition-duration-normal",
    description: "Transition duration for checkbox",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--transition-duration-fast",
    description: "Transition duration for check icon",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
];
