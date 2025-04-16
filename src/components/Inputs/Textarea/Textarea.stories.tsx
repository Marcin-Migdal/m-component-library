import { Meta, StoryObj } from "@storybook/react";

import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Inputs/Textarea",
  component: Textarea,
  argTypes: {
    ...inputArgTypes,
    enableResize: {
      control: { type: "boolean" },
      description: "Enable textarea vertical resize",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const EnableResize: Story = { args: { enableResize: true } };
