import { Meta, StoryObj } from "@storybook/react";

import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Miscellaneous/Overlay",
  component: Overlay,
  args: { children: "Overlay content" },
  tags: ["!autodocs"],
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const overlay: Story = {};
