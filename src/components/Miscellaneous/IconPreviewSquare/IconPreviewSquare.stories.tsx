import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import IconPreviewSquare from "./IconPreviewSquare";
import { cssVariablesData } from "./IconPreviewSquare.stories.consts";

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

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
