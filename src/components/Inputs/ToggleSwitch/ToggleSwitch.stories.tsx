import { Meta, StoryObj } from "@storybook/react";

import { simpleInputArgTypes } from "../../../internalUtils/inputArgTypes";
import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/Inputs/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: simpleInputArgTypes,
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
