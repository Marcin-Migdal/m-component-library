import { ArgTypes } from "@storybook/react/*";
import { ComponentSize, InputLabel } from "../components/global-types";
import { InputProps } from "../components/Inputs/_inputsComponents/input-types";

export const inputArgTypes: Partial<ArgTypes<InputProps>> = {
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
      min: 0,
      max: 100,
    },
    description: "Width of the label as a percentage.",
    table: { type: { summary: "number" } },
  },
  label: {
    control: "text",
    type: "string",
    description: "Text label displayed for the input.",
  },
  marginBottomType: {
    required: false,
    control: "radio",
    table: {
      type: { summary: "dynamic | large | small | none" },
    },
  },
  error: {
    control: "text",
    type: "string",
    description: "Error message displayed below the input.",
  },
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
      min: 0,
      max: 100,
    },
    description: "Width of the label as a percentage.",
    table: { type: { summary: "number" } },
  },
};
