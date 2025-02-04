import type { Meta, StoryObj } from "@storybook/react";

import { InputLabel } from "../../global-types";
import Dropdown from "./Dropdown";

const options = [
  { label: "test 1", value: 1 },
  { label: "test 2", value: 2 },
  { label: "test 3", value: 3 },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Inputs/Dropdown",
  component: Dropdown,
  args: { options: options },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const dropdown: Story = {
  args: {
    label: "Name",
    labelType: InputLabel.FLOATING,
  },
};
