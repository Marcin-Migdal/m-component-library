import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import { Dropdown } from "../Dropdown";
import NumberField from "./NumberField";

const meta: Meta<typeof NumberField> = {
  title: "Components/Inputs/NumberField",
  component: NumberField,
  argTypes: {
    ...inputArgTypes,
    prefix: {
      control: "text",
      description: "Optional text displayed before value in `NumberField`",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "number",
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const InputWithChilrenInput: Story = { args: { standAloneTextfieldChildren: <Dropdown /> } };
