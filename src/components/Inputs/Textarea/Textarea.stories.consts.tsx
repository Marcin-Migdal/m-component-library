export const TEXTAREA_CSS_VARIABLES = [
  {
    variable: "--input-height",
    description: "Height of the textarea input field, calculated based on size variant",
    defaultValue: "var(--medium-input-height) * 3.5",
    rootValue: "34px * 3.5 = 119px (medium size)",
  },
  {
    variable: "--small-input-height",
    description: "Height for small size textarea variant",
    defaultValue: "24px",
    rootValue: "24px",
  },
  {
    variable: "--medium-input-height",
    description: "Height for medium size textarea variant",
    defaultValue: "34px",
    rootValue: "34px",
  },
  {
    variable: "--large-input-height",
    description: "Height for large size textarea variant",
    defaultValue: "41px",
    rootValue: "41px",
  },
  {
    variable: "--spacing-1",
    description: "Top padding for textarea content",
    defaultValue: "0.25rem",
    rootValue: "4px",
  },
  {
    variable: "--input-padding-left",
    description: "Left padding for textarea content",
    defaultValue: "var(--medium-input-padding-left)",
    rootValue: "8px (medium size)",
  },
  {
    variable: "--radius-md",
    description: "Border radius for textarea corners",
    defaultValue: "0.375rem",
    rootValue: "6px",
  },
  {
    variable: "--input-font-size",
    description: "Font size for textarea text",
    defaultValue: "var(--font-size-base)",
    rootValue: "16px (medium size)",
  },
  {
    variable: "--transition-duration-normal",
    description: "Transition duration for hover effects",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--transition-duration-fast",
    description: "Transition duration for active/focus states",
    defaultValue: "150ms",
    rootValue: "150ms",
  },
];
