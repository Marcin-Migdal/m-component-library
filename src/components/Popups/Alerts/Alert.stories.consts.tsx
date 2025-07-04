import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--alert-border-radius",
    description: "Border radius for alert box and footer",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--alert-border-color",
    description: "Border color for alert box and footer",
    defaultValue: "var(--primary-color_300)",
    rootValue: "hsl(0, 0%, 40%)",
  },
  {
    variable: "--background-color",
    description: "Background color for alert box and buttons",
    defaultValue: "var(--grey-color-000)",
    rootValue: "hsl(0, 0%, 100%)",
  },
  {
    variable: "--background-hover-color",
    description: "Background color for alert header icon and button hover",
    defaultValue: "var(--grey-color-100)",
    rootValue: "hsl(0, 0%, 88%)",
  },
  {
    variable: "--background-active-color",
    description: "Background color for alert header icon and button active",
    defaultValue: "var(--grey-color-125)",
    rootValue: "hsl(0, 0%, 85%)",
  },
  {
    variable: "--alert-padding",
    description: "Padding for alert header and content",
    defaultValue: "1rem",
    rootValue: "16px",
  },
  { variable: "--icon-padding", description: "Padding for alert close icon", defaultValue: "0.5rem", rootValue: "8px" },
  {
    variable: "--radius-full",
    description: "Full border radius for round icons",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--transition-duration-normal",
    description: "Normal transition duration for icon and button hover",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--transition-duration-fast",
    description: "Fast transition duration for closing and icon active",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
  {
    variable: "--transition-duration-slow",
    description: "Slow transition duration for opening animation",
    defaultValue: "350ms",
    rootValue: "350ms",
  },
  {
    variable: "--font-weight-semibold",
    description: "Font weight for header and buttons",
    defaultValue: "600",
    rootValue: "600",
  },
  {
    variable: "--spacing-4",
    description: "Large spacing for content padding",
    defaultValue: "1rem",
    rootValue: "16px",
  },
  {
    variable: "--spacing-3",
    description: "Medium spacing for button padding",
    defaultValue: "0.75rem",
    rootValue: "12px",
  },
  { variable: "--spacing-0", description: "Zero spacing for button padding", defaultValue: "0", rootValue: "0" },
  {
    variable: "--primary-text-color_300",
    description: "Primary text color for alert buttons",
    defaultValue: "var(--grey-color-525)",
    rootValue: "hsl(0, 0%, 50%)",
  },
  {
    variable: "--alert-disabled-button-background-color",
    description: "Background color for disabled alert buttons",
    defaultValue: "var(--grey-color-050)",
    rootValue: "hsl(0, 0%, 94%)",
  },
];
