import { Meta, StoryObj } from "@storybook/react";

import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import Textfield from "./Textfield";

const meta: Meta<typeof Textfield> = {
  title: "Components/Inputs/Textfield",
  component: Textfield,
  argTypes: {
    ...inputArgTypes,
    type: {
      control: "radio",
      description: "Defines the type of input field. \n - `text` default type. \n - `number` \n - `password`",
      options: ["text", "number", "password"],
      table: {
        defaultValue: { summary: "text" },
        type: { summary: "text | number | password" },
      },
    },
    prefix: {
      control: "text",
      description: "Optional text displayed before value in `TextField`",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textfield>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const Prefix: Story = { args: { prefix: "Prefix" } };
