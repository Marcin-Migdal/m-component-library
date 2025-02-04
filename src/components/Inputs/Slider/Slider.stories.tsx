import { Meta, StoryObj } from "@storybook/react";

import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Inputs/Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const SliderStory: Story = {
  args: {
    min: 0,
    max: 100,
    step: 0.1,
    label: "Range",
  },
};
