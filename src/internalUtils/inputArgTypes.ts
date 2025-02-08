import { ArgTypes } from "@storybook/react/*";
import { ComponentSize, InputLabel, SimpleInputLabel } from "../components/global-types";
import { InputProps } from "../components/Inputs/_inputsComponents/input-types";
import { defaultInputPropsValue } from "../components/Inputs/_inputUtils/defaultInputPropsValue";

const commonInputArgTypes: Partial<ArgTypes<Omit<InputProps, "floatingInputWidth">>> = {
  size: {
    control: "radio",
    options: Object.values(ComponentSize),
    description: "Size of the input component.",
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
    control: "number",
    description: "Width of the label as a percentage.",
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
export const simpleInputArgTypes: Partial<ArgTypes<InputProps<SimpleInputLabel>>> = {
  ...commonInputArgTypes,
  labelType: {
    control: "radio",
    options: Object.values(SimpleInputLabel),
    description: "Type of label positioning.",
  },
};

export const simpleInputArgs: Partial<InputProps<SimpleInputLabel>> = {
  ...defaultInputPropsValue,
  floatingInputWidth: undefined,
  labelType: SimpleInputLabel.LEFT,
};

export const simpleInputStoriesConfig: {
  args: Partial<InputProps<SimpleInputLabel>>;
  argTypes: Partial<ArgTypes<InputProps<SimpleInputLabel>>>;
} = {
  args: simpleInputArgs,
  argTypes: simpleInputArgTypes,
};

//! Input
export const inputArgTypes: Partial<ArgTypes<InputProps>> = {
  ...commonInputArgTypes,
  labelType: {
    control: "radio",
    options: Object.values(InputLabel),
    description: "Type of label positioning.",
  },
  floatingInputWidth: {
    control: "number",
    description: "Width of the floating input field.",
  },
};

export const inputArgs: Partial<InputProps> = {
  ...defaultInputPropsValue,
  labelType: SimpleInputLabel.LEFT,
};

export const inputStoriesConfig: {
  args: Partial<InputProps>;
  argTypes: Partial<ArgTypes<InputProps>>;
} = {
  args: inputArgs,
  argTypes: inputArgTypes,
};
