import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--input-height",
    description: "Height of the ColorPicker input and square.",
    defaultValue: "var(--small-input-height) | var(--medium-input-height) | var(--large-input-height)",
    rootValue: "24px | 34px | 41px",
  },
  {
    variable: "--radius-md",
    description: "Medium border radius for input and popup.",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--radius-full",
    description: "Full border radius for round elements (e.g., pointer).",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--border-base",
    description: "Base border width for pointer and canvas.",
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
    variable: "--spacing-4",
    description: "Spacing for popup padding and gap.",
    defaultValue: "1rem",
    rootValue: "16px",
  },
  {
    variable: "--spacing-2",
    description: "Spacing for popup and canvas gap/padding.",
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
    variable: "--shadow-base",
    description: "Base box-shadow for popup.",
    defaultValue: "0px 0px 3px 2px",
    rootValue: "0px 0px 3px 2px",
  },
  {
    variable: "--box-shadow-color",
    description: "Box-shadow color for popup.",
    defaultValue:
      "var(--primary-color_440) (light default) | var(--primary-color_580) (light custom) | var(--primary-color_700) (dark default) | var(--primary-color_680) (dark custom)",
    rootValue:
      "hsl(var(--hue), var(--saturation), 45%) | hsl(var(--hue), var(--saturation), 59%) | hsl(var(--hue), var(--saturation), 71%) | hsl(var(--hue), var(--saturation), 68%)",
  },
  {
    variable: "--popups-background-color",
    description: "Background color for the popup.",
    defaultValue: "var(--grey-color-050) (light) | var(--grey-color-600) (dark)",
    rootValue: "hsl(0, 0%, 98%) | hsl(0, 0%, 40%)",
  },
  {
    variable: "--color-picker-pointer",
    description: "Pointer color for the color picker canvas.",
    defaultValue: "var(--grey-color-000)",
    rootValue: "hsl(0, 0%, 100%)",
  },
  {
    variable: "--color-picker-dragged-pointer",
    description: "Pointer color when dragging on the color picker canvas.",
    defaultValue: "var(--grey-color-850)",
    rootValue: "hsl(0, 0%, 0%)",
  },
];
