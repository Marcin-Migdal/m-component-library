import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import Slider from "./Slider";
import { cssVariablesData } from "./Slider.stories.consts";

const meta: Meta<typeof Slider> = {
  title: "Components/Inputs/Slider",
  component: Slider,
  args: { min: 1, max: 100 },
  argTypes: {
    ...inputArgTypes,
    valuePreviewType: {
      table: { type: { summary: "top-dynamic | bottom-dynamic | top-static | bottom-static | none" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const ValuePreviewType: Story = { args: { valuePreviewType: "top-static" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const CSSVariables: Story = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
