import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import ToggleSwitch from "./ToggleSwitch";
import { TOGGLE_SWITCH_CSS_VARIABLES } from "./ToggleSwitch.stories.consts";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/Inputs/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: inputArgTypes,
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };

export const CSSVariables: Story = {
  render: () => <ComponentCssVariableTable data={TOGGLE_SWITCH_CSS_VARIABLES} />,
};
