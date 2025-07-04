import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--input-height",
    description: "Height of the image field input (3x input size).",
    defaultValue:
      "calc(var(--small-input-height) * 3) | calc(var(--medium-input-height) * 3) | calc(var(--large-input-height) * 3)",
    rootValue: "72px [small] | 102px [medium] | 123px [large]",
  },
  {
    variable: "--spacing-1",
    description: "Small spacing for padding.",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--spacing-2",
    description: "Medium spacing for gap between elements.",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--radius-full",
    description: "Full border radius for round image previews.",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--font-size-2xs",
    description: "Extra small font size for image field text.",
    defaultValue: "0.75rem",
    rootValue: "12px",
  },
  {
    variable: "--icon-color",
    description: "Icon color for image field (light/dark mode).",
    defaultValue: "var(--grey-color-525) [light] | var(--grey-color-100) [dark]",
    rootValue: "hsl(0, 0%, 38%) [light] | hsl(0, 0%, 88%) [dark]",
  },
  {
    variable: "--input-image-icon-color",
    description: "Icon color for image preview (light/dark mode).",
    defaultValue: "var(--grey-color-100)",
    rootValue: "hsl(0, 0%, 88%)",
  },
];
