import { Meta, StoryObj } from "@storybook/react";

import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import IconPreviewSquare from "./IconPreviewSquare";

const meta: Meta<typeof IconPreviewSquare> = {
  title: "Components/Miscellaneous/IconPreviewSquare",
  component: IconPreviewSquare,
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "disabled", "className"]),
  },
};

export default meta;

type Story = StoryObj<typeof IconPreviewSquare>;

export const Default: Story = {
  args: { icon: "home" },
};
