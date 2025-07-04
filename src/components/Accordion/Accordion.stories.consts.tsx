import { CssVariableData } from "../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--content-height",
    description: "Maximum height for expanded accordion content",
    defaultValue: "auto",
    rootValue: "auto",
  },
  {
    variable: "--spacing-1",
    description: "Small spacing value for compact padding and margins",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing value for default padding and margins",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--transition-duration-normal",
    description: "Normal transition duration for accordion animations",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--accordion-background",
    description: "Background color for accordion toggle and content",
    defaultValue: "var(--grey-color-075)",
    rootValue: "hsl(0, 0%, 91%)",
  },
  {
    variable: "--accordion-hover-background",
    description: "Background color for accordion toggle hover state",
    defaultValue: "var(--grey-color-125)",
    rootValue: "hsl(0, 0%, 85%)",
  },
  {
    variable: "--highlighted-accordion-background",
    description: "Background color for selected or expanded accordion items",
    defaultValue: "var(--grey-color-175)",
    rootValue: "hsl(0, 0%, 79%)",
  },
  {
    variable: "--radius-md",
    description: "Medium border radius for default accordion items",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--radius-sm",
    description: "Small border radius for compact accordion items",
    defaultValue: "0.125rem",
    rootValue: "2px",
  },
  {
    variable: "--radius-none",
    description: "No border radius for expanded accordion items",
    defaultValue: "0",
    rootValue: "0",
  },
  {
    variable: "--font-size-sm",
    description: "Small font size for compact accordion text",
    defaultValue: "0.875rem",
    rootValue: "14px",
  },
  {
    variable: "--font-size-2xs",
    description: "Extra small font size for compact accordion indicators",
    defaultValue: "0.75rem",
    rootValue: "12px",
  },
  {
    variable: "--line-height-normal",
    description: "Normal line height for accordion text",
    defaultValue: "1.5",
    rootValue: "1.5",
  },
  {
    variable: "--line-height-tight",
    description: "Tight line height for compact accordion text",
    defaultValue: "1.25",
    rootValue: "1.25",
  },
  {
    variable: "--accordion-item-background",
    description: "Background color for individual accordion items",
    defaultValue: "var(--grey-color-225)",
    rootValue: "hsl(0, 0%, 74%)",
  },
];
