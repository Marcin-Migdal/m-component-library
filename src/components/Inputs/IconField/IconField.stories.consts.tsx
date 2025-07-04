import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--square-size",
    description: "Size of the icon tile square (matches input height).",
    defaultValue: "var(--input-height)",
    rootValue: "24px | 34px | 41px (from --small-input-height, --medium-input-height, --large-input-height)",
  },
  {
    variable: "--alert-padding",
    description: "Padding for alert and icon tile.",
    defaultValue: "var(--spacing-6)",
    rootValue: "1.5rem (24px)",
  },
  {
    variable: "--spacing-1",
    description: "Small spacing for popup margin and padding.",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing for popup gap and padding.",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--spacing-4",
    description: "Large spacing for popup padding.",
    defaultValue: "1rem",
    rootValue: "16px",
  },
  {
    variable: "--spacing-5",
    description: "Extra large spacing for icon tile padding calculation.",
    defaultValue: "1.25rem",
    rootValue: "20px",
  },
  {
    variable: "--radius-md",
    description: "Medium border radius for icon tile and popup.",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--transition-duration-normal",
    description: "Normal transition duration for icon tile and popup.",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--transition-duration-fast",
    description: "Fast transition duration for icon tile.",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
  {
    variable: "--font-size-sm",
    description: "Small font size for popup text.",
    defaultValue: "0.875rem",
    rootValue: "14px",
  },
  {
    variable: "--icon-tile-background-color",
    description: "Background color for icon tile (light/dark mode).",
    defaultValue: "var(--grey-color-100) [light] | var(--grey-color-550) [dark]",
    rootValue: "hsl(0, 0%, 88%) [light] | hsl(0, 0%, 35%) [dark]",
  },
  {
    variable: "--icon-tile-hover-background-color",
    description: "Hover background color for icon tile (light/dark mode).",
    defaultValue: "var(--grey-color-125) [light] | var(--grey-color-525) [dark]",
    rootValue: "hsl(0, 0%, 85%) [light] | hsl(0, 0%, 38%) [dark]",
  },
  {
    variable: "--icon-tile-active-background-color",
    description: "Active background color for icon tile (light/dark mode).",
    defaultValue: "var(--grey-color-150) [light] | var(--grey-color-500) [dark]",
    rootValue: "hsl(0, 0%, 82%) [light] | hsl(0, 0%, 41%) [dark]",
  },
];
