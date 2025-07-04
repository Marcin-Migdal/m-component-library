import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import ColorPreviewSquare from "./ColorPreviewSquare";
import { cssVariablesData } from "./ColorPreviewSquare.stories.consts";

const meta: Meta<typeof ColorPreviewSquare> = {
  title: "Components/Miscellaneous/ColorPreviewSquare",
  component: ColorPreviewSquare,
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "disabled", "className"]),
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

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
