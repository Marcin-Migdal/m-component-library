import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--date-picker-popup-padding",
    description: "Padding for the date picker popup.",
    defaultValue: "var(--spacing-2)",
    rootValue: "0.5rem (8px)",
  },
  {
    variable: "--popups-background-color",
    description: "Background color for the popup.",
    defaultValue: "var(--grey-color-050) (light) | var(--grey-color-600) (dark)",
    rootValue: "hsl(0, 0%, 94%) (light) | hsl(0, 0%, 29%) (dark)",
  },
  {
    variable: "--radius-md",
    description: "Medium border radius for popup and day buttons.",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--border-base",
    description: "Base border width for day buttons.",
    defaultValue: "max(2px, 0.125em)",
    rootValue: "2px",
  },
  {
    variable: "--transition-duration-slow",
    description: "Transition duration for popup and interactive elements.",
    defaultValue: "350ms",
    rootValue: "350ms",
  },
  {
    variable: "--transition-duration-fast",
    description: "Transition duration for fast transitions in popup.",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
  {
    variable: "--spacing-2",
    description: "Spacing for popup gap, padding, and day button margin.",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--spacing-0",
    description: "Zero spacing for popup padding.",
    defaultValue: "0",
    rootValue: "0",
  },
  {
    variable: "--popup-date-button-highlighted-color",
    description: "Background and border color for highlighted day buttons.",
    defaultValue:
      "var(--primary-color_660) [light-default, light-custom, dark-default] | var(--primary-color_680) [dark-custom]",
    rootValue:
      "hsl(0, 0%, 70%) [light-default] | hsl(var(--hue), var(--saturation), 67%) [light-custom, dark-default] | hsl(var(--hue), var(--saturation), 69%) [dark-custom]",
  },
];
