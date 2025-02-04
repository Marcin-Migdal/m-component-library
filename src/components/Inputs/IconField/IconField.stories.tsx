import { Meta, StoryObj } from "@storybook/react";

import IconField from "./IconField";

const meta: Meta<typeof IconField> = {
  title: "Components/Inputs/IconField",
  component: IconField,
};

export default meta;

type Story = StoryObj<typeof IconField>;

export const IconFieldStory: Story = {
  args: { label: "Icon" },
};
