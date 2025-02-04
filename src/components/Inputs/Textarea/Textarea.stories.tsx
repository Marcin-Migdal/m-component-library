import { Meta, StoryObj } from "@storybook/react";

import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Inputs/Textarea",
  component: Textarea,
  args: {
    label: "Textarea label",
    placeholder: "Textarea placeholder",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Simple: Story = {};
