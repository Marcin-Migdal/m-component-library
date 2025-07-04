export const TOGGLE_SWITCH_CSS_VARIABLES = [
  {
    variable: "--toggle-switch-input-size",
    description: "Size of the toggle switch thumb, calculated based on size variant",
    defaultValue: "calc(var(--input-height) - 12px)",
    rootValue: "22px (medium size)",
  },
  {
    variable: "--input-height",
    description: "Base input height used for toggle switch sizing",
    defaultValue: "var(--medium-input-height)",
    rootValue: "34px (medium size)",
  },
  {
    variable: "--small-input-height",
    description: "Height for small size toggle switch variant",
    defaultValue: "24px",
    rootValue: "24px",
  },
  {
    variable: "--medium-input-height",
    description: "Height for medium size toggle switch variant",
    defaultValue: "34px",
    rootValue: "34px",
  },
  {
    variable: "--large-input-height",
    description: "Height for large size toggle switch variant",
    defaultValue: "41px",
    rootValue: "41px",
  },
  {
    variable: "--border-base",
    description: "Base border width for toggle switch thumb positioning",
    defaultValue: "max(2px, 0.125em)",
    rootValue: "2px",
  },
  {
    variable: "--radius-full",
    description: "Border radius for toggle switch thumb (circular)",
    defaultValue: "9999px",
    rootValue: "9999px",
  },
  {
    variable: "--transition-duration-normal",
    description: "Transition duration for toggle switch animations",
    defaultValue: "250ms",
    rootValue: "250ms",
  },
  {
    variable: "--toggle-switch-color",
    description: "Color for toggle switch when checked",
    defaultValue: "var(--checkbox-color)",
    rootValue:
      "var(--primary-color_300) (light default) / var(--primary-color_620) (dark default) / var(--primary-color_580) (light custom) / var(--primary-color_680) (dark custom)",
  },
  {
    variable: "--input-background-color",
    description: "Background color for toggle switch track",
    defaultValue: "var(--grey-color-125)",
    rootValue: "hsl(0, 0%, 85%) (light mode) / hsl(0, 0%, 35%) (dark mode)",
  },
  {
    variable: "--input-hover-background-color",
    description: "Background color for toggle switch thumb on hover when checked",
    defaultValue: "var(--grey-color-175)",
    rootValue: "hsl(0, 0%, 79%) (light mode) / hsl(0, 0%, 41%) (dark mode)",
  },
  {
    variable: "--checkbox-color",
    description: "Primary color used for toggle switch (inherited from checkbox)",
    defaultValue: "var(--primary-color_300)",
    rootValue:
      "hsl(0, 0%, 34%) (light default) / hsl(0, 0%, 40%) (dark default) / hsl(var(--hue), var(--saturation), 31%) (light custom) / hsl(var(--hue), var(--saturation), 31%) (dark custom)",
  },
];
