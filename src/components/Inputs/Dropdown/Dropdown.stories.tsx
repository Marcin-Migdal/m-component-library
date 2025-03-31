import type { Meta, StoryObj } from "@storybook/react";

import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import Dropdown from "./Dropdown";
import { DropdownNumberOption } from "./types";

export const options: DropdownNumberOption[] = [
  { label: "test 1", value: 1 },
  { label: "test 2", value: 2 },
  { label: "test 3", value: 3 },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Inputs/Dropdown",
  component: Dropdown,
  args: { options: options },
  argTypes: {
    ...inputArgTypes,
    options: {
      table: {
        type: {
          summary: "object[]",
          detail:
            "It is possible to pass whatever the object you want, and the set the `labelKey`, `valueKey` to related fields keys in the object. \n By default it is:  \n - labelKey = `label`  \n - valueKey = `value`",
        },
      },
    },
    value: {
      table: {
        type: {
          summary: "object",
          detail: "Value has to be in the same format as the options object",
        },
      },
    },
    labelKey: {
      description: "The keyof options/value object that represents the label to be displayed.",
      table: {
        type: {
          summary: "string",
          detail: "key of the options/value object",
        },
      },
    },
    valueKey: {
      description: "The keyof options/value object that represents the value associated with the option.",
      table: {
        type: {
          summary: "string",
          detail: "key of the options/value object",
        },
      },
    },
    prefix: {
      control: "text",
      description: "Optional text displayed before the value in `Control/TextField`",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const Filter: Story = { args: { filter: true } };
