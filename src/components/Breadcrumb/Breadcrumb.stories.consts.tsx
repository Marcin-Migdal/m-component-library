import { CssVariableData } from "../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--crumb-height",
    description: "Calculated height for breadcrumb items based on padding and line height",
    defaultValue: "calc((var(--crumb-vertical-padding) * 2) + (1rem * var(--line-height-normal)))",
    rootValue: "calc((0.5em * 2) + (1rem * 1.5))",
  },
  {
    variable: "--crumb-vertical-padding",
    description: "Vertical padding for breadcrumb items",
    defaultValue: "0.5em",
    rootValue: "0.5em",
  },
  {
    variable: "--crumb-horizontal-padding",
    description: "Horizontal padding for breadcrumb items",
    defaultValue: "1em",
    rootValue: "1em",
  },
  {
    variable: "--pseudo-element-size",
    description: "Size for pseudo-elements (arrows) in breadcrumb navigation",
    defaultValue: "calc(var(--crumb-vertical-padding) + 0.75em)",
    rootValue: "calc(0.5em + 0.75em)",
  },
  {
    variable: "--square-size",
    description: "Size for square pseudo-elements in breadcrumb navigation",
    defaultValue: "calc(var(--crumb-height) / 1.414)",
    rootValue: "calc(calc((0.5em * 2) + (1rem * 1.5)) / 1.414)",
  },
  {
    variable: "--transition-duration-normal",
    description: "Normal transition duration for breadcrumb hover effects",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing for margins between breadcrumb elements",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--line-height-normal",
    description: "Normal line height for breadcrumb text",
    defaultValue: "1.5",
    rootValue: "1.5",
  },
  {
    variable: "--font-weight-semibold",
    description: "Font weight for the last (active) breadcrumb item",
    defaultValue: "600",
    rootValue: "600",
  },
  {
    variable: "--current-crumb-background-color",
    description: "Dynamic background color for current breadcrumb item",
    defaultValue: "var(--crumb-background-color)",
    rootValue: "hsl(0, 0%, 91%)",
  },
  {
    variable: "--crumb-background-color",
    description: "Default background color for breadcrumb items",
    defaultValue: "var(--grey-color-075)",
    rootValue: "hsl(0, 0%, 91%)",
  },
  {
    variable: "--crumb-active-background-color",
    description: "Background color for the active (last) breadcrumb item",
    defaultValue: "var(--grey-color-275)",
    rootValue: "hsl(0, 0%, 68%)",
  },
  {
    variable: "--crumb-hover-background-color",
    description: "Background color for breadcrumb items on hover",
    defaultValue: "var(--grey-color-125)",
    rootValue: "hsl(0, 0%, 85%)",
  },
  {
    variable: "--crumb-hover-active-background-color",
    description: "Background color for active breadcrumb item on hover",
    defaultValue: "var(--grey-color-400)",
    rootValue: "hsl(0, 0%, 53%)",
  },
  {
    variable: "--background-color",
    description: "Text color for active breadcrumb item (contrasts with active background)",
    defaultValue: "var(--grey-color-000)",
    rootValue: "hsl(0, 0%, 100%)",
  },
  {
    variable: "--primary-highlighted-text-color",
    description: "Text color for compact breadcrumb items on hover",
    defaultValue: "var(--grey-color-625)",
    rootValue: "hsl(0, 0%, 27%)",
  },
  {
    variable: "--icon-color",
    description: "Color for breadcrumb indicator icons",
    defaultValue: "var(--grey-color-525)",
    rootValue: "hsl(0, 0%, 50%)",
  },
];
