# M Component Library

## Summary

This project is a private collection of reusable UI components designed to streamline the development process in other projects.

## Demo

[Live Preview](https://m-component-library.vercel.app)

## Description

This component library includes:

- A design system with design tokens
- Support for dark and light mode
- A default (gray) theme and customizable themes
- A variety of components, such as:
  - Inputs
  - Buttons
  - Dropdown Menus
  - Accordions
  - Breadcrumbs
  - Hue Sliders
  - Icons
  - Overlays
  - Progress Spinners
  - Tooltips
  - Cards
  - Alerts
  - Toasts

### Theming

For component styling to work correctly, the entire application should be wrapped in the `ThemeWrapper` component.

`ThemeWrapper` accepts the following props:

- `children`: `ReactNode` (required)
- `darkMode`: `boolean` (default: `false`)
- `hue`: `number | undefined` (default: `undefined`)

#### Theme Behavior:

- If `hue` is `undefined`, the application uses the default gray theme.
- If a `number` is passed to `hue`, a custom theme is enabled, and the primary color of the application is determined by the provided hue value.
