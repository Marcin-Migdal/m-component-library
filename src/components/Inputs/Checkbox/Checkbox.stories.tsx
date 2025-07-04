import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import Checkbox from "./Checkbox";
import { checkboxCssVariables } from "./Checkbox.stories.consts";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  argTypes: inputArgTypes,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={checkboxCssVariables} />,
  name: "CSS Variables",
};
