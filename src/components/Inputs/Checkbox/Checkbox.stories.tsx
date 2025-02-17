import { Meta, StoryObj } from "@storybook/react";

import { simpleInputArgTypes } from "../../../internalUtils/inputArgTypes";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  argTypes: simpleInputArgTypes,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
