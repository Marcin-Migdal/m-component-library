import { Meta, StoryObj } from "@storybook/react";

import ColorPicker from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/Inputs/ColorPicker",
  component: ColorPicker,
  args: { label: "Color picker" },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const colorPicker: Story = {};
