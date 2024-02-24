// Theme
export { default as ThemeWrapper } from "./components/ThemeWrapper";

// Inputs
export { default as Input, InputProps } from "./components/Inputs/Input";
export { default as Checkbox, CheckboxProps } from "./components/Inputs/Checkbox";
export { default as Textarea, TextareaProps } from "./components/Inputs/Textarea";
export { default as Dropdown, DropdownProps } from "./components/Inputs/Dropdown";

//Form
export { default as Form, FormErrorsType } from "./components/Form";

// Buttons
export { default as Button, IButtonProps } from "./components/Button";

// Layout
export { default as Col } from "./components/Layout/Col";
export { default as Row } from "./components/Layout/Row";

// Messages
export { default as ToastsContainer, ToastHandler, ToastTypes, ToastsPositionTypes } from "./components/Toast";

// Overlay
export { default as Tooltip } from "./components/Tooltip";

// Panels
export { default as Card } from "./components/Panels/Card";

// Miscellaneous
export { default as Icon } from "./components/Miscellaneous/Icon";
export { default as ProgressSpinner } from "./components/Miscellaneous/ProgressSpinner";

//TODO* NOW

//! TOOLTIP
//? tooltip content nie może mieć break word
//? dodać że toast się nie zamyka na on hover
//? możliwość wysłania czasu trwania toast'a w funkcji addToast

//! TOAST
//? title powinien być wysyłany w funkcji addToast, oraz powinna być możliwość nadpisania default'owych tytułów, tytułami z tłumaczeniem

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
