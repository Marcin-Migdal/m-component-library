import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { cssVariablesData } from "./HueSliderCanvas.stories.consts";

import { HueSliderCanvas } from "./HueSliderCanvas";

const meta: Meta<typeof HueSliderCanvas> = {
  title: "Components/Miscellaneous/HueSliderCanvas",
  component: HueSliderCanvas,
};

export default meta;

type Story = StoryObj<typeof HueSliderCanvas>;

export const hueSlider: Story = {};

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
