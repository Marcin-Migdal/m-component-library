import { Meta, StoryObj } from "@storybook/react";

import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import ColorPreviewSquare from "./ColorPreviewSquare";

const meta: Meta<typeof ColorPreviewSquare> = {
  title: "Components/Miscellaneous/ColorPreviewSquare",
  component: ColorPreviewSquare,
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "disabled"]),
    color: {
      description: "Color of the square.",
      control: {
        type: "color",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPreviewSquare>;

export const Default: Story = {
  args: {
    color: "red",
  },
};
