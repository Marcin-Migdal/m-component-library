import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import ColorPicker from "./ColorPicker";
import { cssVariablesData } from "./ColorPicker.stories.consts";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/Inputs/ColorPicker",
  component: ColorPicker,
  argTypes: {
    ...inputArgTypes,
    defaultValue: {
      table: {
        type: {
          summary: "HslValue | RgbValue | string(hex)",
          detail:
            "defaultValue can be passed as: \n - hsl `object` eq. { h: number; s: number; l: number } \n - rgb `object` eq. { r: number; g: number; b: number } \n - hex `string` eq. '#a01d1d'",
        },
      },
    },
    returnedColorType: {
      control: false,
      description: "Decides format of the returned color \n - `hsl` \n - `rgb` \n - `hex`",
      table: { type: { summary: "hsl | rgb | hex" } },
    },
    onChange: {
      description:
        "Callback triggered when color changes. Format of the value is controlled by `returnedColorType` props.",
      table: { type: { summary: "(event: { target: { name: string; value: ColorValue } }) => void" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = { args: {} };
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
export const CSSVariables: Story = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
