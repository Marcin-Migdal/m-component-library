import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--tooltip-color",
    description: "Text color for tooltip",
    defaultValue: "var(--grey-color-000)",
    rootValue: "hsl(0, 0%, 100%)",
  },
  {
    variable: "--tooltip-background-color",
    description: "Background color for tooltip",
    defaultValue: "var(--grey-color-800)",
    rootValue: "hsl(0, 0%, 6%)",
  },
  {
    variable: "--spacing-1",
    description: "Small spacing for tooltip padding",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing for tooltip padding",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--radius-base",
    description: "Base border radius for tooltip",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--font-size-xs",
    description: "Extra small font size for tooltip text",
    defaultValue: "0.8rem",
    rootValue: "12px",
  },
];
