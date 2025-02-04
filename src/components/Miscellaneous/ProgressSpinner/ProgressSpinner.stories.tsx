import { Meta, StoryObj } from "@storybook/react";

import ProgressSpinner from "./ProgressSpinner";

const meta: Meta<typeof ProgressSpinner> = {
  title: "Components/Miscellaneous",
  component: ProgressSpinner,
};

export default meta;

type Story = StoryObj<typeof ProgressSpinner>;

export const progressSpinner: Story = {};
