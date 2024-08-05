// Theme
export { default as ThemeWrapper } from "./components/ThemeWrapper";

// Inputs
export { default as Checkbox, type CheckboxProps } from "./components/Inputs/Checkbox";
export { default as Dropdown, type DropdownProps } from "./components/Inputs/Dropdown";
export { default as Slider } from "./components/Inputs/Slider";
export { default as Textarea, type TextareaProps } from "./components/Inputs/Textarea";
export { default as Textfield, type TextfieldProps } from "./components/Inputs/Textfield";

//Form
export { default as Form, type FormErrorsType } from "./components/Form";

// Buttons
export { default as Button, type IButtonProps } from "./components/Button";

// Layout
export { default as Col } from "./components/Layout/Col";
export { default as Row } from "./components/Layout/Row";

// Popups 
export * from "./components/Popups/Alerts";
export { default as ToastsContainer, defaultToastConfig } from "./components/Popups/Toast";
export type { ToastConfigType, ToastHandler, ToastsPositionTypes, VariantTypes } from "./components/Popups/Toast";

// Panels
export { default as Card } from "./components/Panels/Card";

// Miscellaneous
export { default as Icon } from "./components/Miscellaneous/Icon";
export { default as Overlay } from "./components/Miscellaneous/Overlay";
export { default as ProgressSpinner } from "./components/Miscellaneous/ProgressSpinner";
export { default as Tooltip } from "./components/Tooltip";

// Helpers
export * from './helpers';

// Hooks
export * from './hooks';

// TODO! export theme variable
// TODO! dynamic theme functionality

// TODO! input refactor
//?     InputContainer wrapper
//?     all containers classes changed to one class in preferably in InputContainer
//?     change _value prefixes

// TODO! export refactor
//?     moving ALL types to component types.ts file
//?     changing all index.tsx file to index.ts, wrong file extension
//?     exporting all types(mostly, only those that might be needed) in component index.ts
//?     changing this file to export like this "export * from './<component_path>"
//*     (options, to think about) aggregate all the exports of components like Miscellaneous, Inputs, Popups, in their respective folders in index.ts, then inly export here eq. "export * from "./components/Inputs";" under "// Inputs"

//! TOOLTIP 
// TODO? Not closing tooltip if cursor is over it (settimeout when closing tooltip, and canceling closing if onMouseEnter on tooltip ??? OR some back-ground div under tooltip, that will be of size (tooltipSize + tooltipMargin) )

// TODO! ACCORDION
// TODO! Change theme story wrapper to use accordion for each section

// TODO! Input components
// TODO? Multi Dropdown
// TODO? File Component
// TODO? Image Component
// TODO? Date input, with range

// TODO! Navigational components
// TODO? Breadcrumb
// TODO? Nav bar
// TODO? Dropdown Menu (open on ref that can be attached to anything(button, icon))
// TODO? Side bar

//TODO! Data Display
// TODO? TABLE
// TODO? TREE

//! add env. var. that will change depending if lib is used in this storybook or if used as installed dependency, then fix tooltip scroll problem that only occurs in story book
