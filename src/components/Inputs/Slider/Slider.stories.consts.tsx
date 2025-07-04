import { CssVariableData } from "../../../internalUtils/components/ComponentCssVariableTable";

export const cssVariablesData: CssVariableData[] = [
  {
    variable: "--radius-base",
    description: "Base border radius for slider track.",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--radius-full",
    description: "Full border radius for round slider thumb.",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--font-size-sm",
    description: "Small font size for slider value preview.",
    defaultValue: "0.875rem",
    rootValue: "14px",
  },
  {
    variable: "--spacing-2",
    description: "Spacing for slider value preview offset.",
    defaultValue: "0.5rem",
    rootValue: "8px",
  },
  {
    variable: "--slider-value-preview-y-offset",
    description: "Y offset for dynamic/static value preview.",
    defaultValue: "var(--spacing-2)",
    rootValue: "8px",
  },
  {
    variable: "--slider-value-preview-static-x-offset",
    description: "X offset for static value preview.",
    defaultValue: "var(--spacing-2)",
    rootValue: "8px",
  },
  {
    variable: "--input-disabled-text-color",
    description: "Color for disabled slider track (light/dark mode).",
    defaultValue: "var(--grey-color-325) [light] | var(--grey-color-450) [dark]",
    rootValue: "hsl(0, 0%, 62%) [light] | hsl(0, 0%, 47%) [dark]",
  },
  {
    variable: "--slider-thumb-color",
    description: "Color for slider thumb (theme-dependent).",
    defaultValue:
      "var(--primary-color_320) [light-default] | var(--primary-color_580) [light-custom] | var(--primary-color_780) [dark-default] | var(--primary-color_680) [dark-custom]",
    rootValue:
      "hsl(0, 0%, 36%) [light-default] | hsl(var(--hue), var(--saturation), 59%) [light-custom] | hsl(0, 0%, 88%) [dark-default] | hsl(var(--hue), var(--saturation), 69%) [dark-custom]",
  },
];
