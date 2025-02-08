import { Meta, StoryObj } from "@storybook/react";

import ProgressSpinner from "./ProgressSpinner";

const meta: Meta<typeof ProgressSpinner> = {
  title: "Components/Miscellaneous/ProgressSpinner",
  component: ProgressSpinner,
  argTypes: {
    strokeWidth: {
      control: {
        type: "number",
        min: 1,
        max: 20,
      },
      table: { type: { summary: "string", detail: "Number from 1 to 20 passed as string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressSpinner>;

export const progressSpinner: Story = {};
