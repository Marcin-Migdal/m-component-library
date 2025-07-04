import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--radius-sm",
    description: "Small border radius for slider bar",
    defaultValue: "0.125rem",
    rootValue: "2px",
  },
  {
    variable: "--spacing-2",
    description: "Small spacing for pointer position",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--border-base",
    description: "Base border width for pointer",
    defaultValue: "max(2px, 0.125em)",
    rootValue: "2px",
  },
  {
    variable: "--radius-full",
    description: "Full border radius for round pointer",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--color-picker-pointer",
    description: "Pointer color for hue slider",
    defaultValue: "var(--grey-color-000)",
    rootValue: "hsl(0, 0%, 100%)",
  },
  {
    variable: "--color-picker-dragged-pointer",
    description: "Pointer color when dragging",
    defaultValue: "var(--primary-color_300)",
    rootValue: "hsl(0, 0%, 40%)",
  },
];
