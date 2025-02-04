import { Meta, StoryObj } from "@storybook/react";

import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/Inputs/ToggleSwitch",
  component: ToggleSwitch,
  args: { label: "ToggleSwitch label" },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Simple: Story = {};
