import { ArgTypes } from "@storybook/react/*";
import { ComponentSize, InputLabel, SimpleInputLabel } from "../components/global-types";
import { InputProps, SimpleInputProps } from "../components/Inputs/_inputsComponents/input-types";

const commonInputArgTypes: Partial<ArgTypes<Omit<InputProps, "floatingInputWidth" | "labelType">>> = {
  size: {
    control: "radio",
    options: Object.values(ComponentSize),
    description: "Size of the input component. \n - `small` \n - `medium` default size. \n - `large`",
    table: {
      defaultValue: { summary: "medium" },
      type: { summary: "small | medium | large" },
    },
  },
  name: {
    control: "text",
    type: "string",
    description: "Name attribute of the input field.",
  },
  disabled: {
    control: "boolean",
    description: "Whether the input is disabled.",
  },
  readOnly: {
    control: "boolean",
    description: "Whether the input is read-only.",
  },
  labelWidth: {
    control: {
      type: "number",
      min: 15,
      max: 90,
    },
    description: "Width of the label as a percentage. `15` - `90`",
    table: { type: { summary: "number" } },
  },
  label: {
    control: "text",
    type: "string",
    description: "Text label displayed for the input.",
  },
  disableDefaultMargin: {
    control: "boolean",
    description: "Whether to disable the default input margin.",
  },
  error: {
    control: "text",
    type: "string",
    description: "Error message displayed below the input.",
  },
};

//! Simple input
export const simpleInputArgTypes: Partial<ArgTypes<SimpleInputProps>> = {
  ...commonInputArgTypes,
  labelType: {
    control: "radio",
    options: Object.values(SimpleInputLabel),
    description: "Type of label positioning. \n - `left` default label type. \n - `right`",
    table: {
      defaultValue: { summary: "left" },
      type: { summary: "left | right" },
    },
  },
};

//! Input
export const inputArgTypes: Partial<ArgTypes<InputProps>> = {
  ...commonInputArgTypes,
  labelType: {
    control: "radio",
    options: Object.values(InputLabel),
    description: "Type of label positioning. \n - `left` default label type. \n - `right` \n - `floating`",
    table: {
      defaultValue: { summary: "left" },
      type: { summary: "left | right | floating" },
    },
  },
  floatingInputWidth: {
    control: {
      type: "number",
      min: 15,
      max: 100,
    },
    description: "Width of the label as a percentage. `15` - `100`",
    table: { type: { summary: "number" } },
  },
};
