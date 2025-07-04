import { CssVariableData } from "../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--radius-md",
    description: "Medium border radius for dropdown menu and items",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--font-size-base",
    description: "Base font size for dropdown menu text",
    defaultValue: "1rem",
    rootValue: "16px",
  },
  {
    variable: "--transition-duration-fast",
    description: "Fast transition duration for dropdown animations",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
  {
    variable: "--transition-duration-normal",
    description: "Normal transition duration for dropdown item interactions",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--spacing-0",
    description: "Zero spacing value for padding",
    defaultValue: "0",
    rootValue: "0",
  },
  {
    variable: "--spacing-1",
    description: "Small spacing value for padding",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing value for padding and gaps",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--spacing-6",
    description: "Large spacing value for margins",
    defaultValue: "1.5rem",
    rootValue: "24px",
  },
  {
    variable: "--dropdown-menu-background-color",
    description: "Background color for dropdown menu and items",
    defaultValue: "var(--grey-color-050)",
    rootValue: "hsl(0, 0%, 94%)",
  },
  {
    variable: "--dropdown-menu-disabled-background-color",
    description: "Background color for disabled dropdown menu items",
    defaultValue: "var(--grey-color-225)",
    rootValue: "hsl(0, 0%, 74%)",
  },
  {
    variable: "--dropdown-menu-hover-background-color",
    description: "Background color for dropdown menu items on hover",
    defaultValue: "var(--grey-color-100)",
    rootValue: "hsl(0, 0%, 88%)",
  },
  {
    variable: "--dropdown-menu-active-background-color",
    description: "Background color for active dropdown menu items",
    defaultValue: "var(--grey-color-150)",
    rootValue: "hsl(0, 0%, 82%)",
  },
  {
    variable: "--dropdown-menu-highlighted-color",
    description: "Text color for highlighted dropdown menu items",
    defaultValue: "var(--grey-color-600)",
    rootValue: "hsl(0, 0%, 29%)",
  },
  {
    variable: "--primary-text-color_300",
    description: "Primary text color for dropdown menu items",
    defaultValue: "var(--grey-color-525)",
    rootValue: "hsl(0, 0%, 50%)",
  },
];
