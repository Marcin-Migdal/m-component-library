import { Meta, StoryObj } from "@storybook/react";

import { HueSliderCanvas } from "./HueSliderCanvas";

const meta: Meta<typeof HueSliderCanvas> = {
  title: "Components/Miscellaneous/HueSliderCanvas",
  component: HueSliderCanvas,
};

export default meta;

type Story = StoryObj<typeof HueSliderCanvas>;

export const hueSlider: Story = {};
