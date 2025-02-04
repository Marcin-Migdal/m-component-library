import { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Miscellaneous",
  component: Icon,
  args: { icon: ["fab", "facebook"] },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const icon: Story = {};
