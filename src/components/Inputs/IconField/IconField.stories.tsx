import { Meta, StoryObj } from "@storybook/react";

import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import IconField from "./IconField";

const meta: Meta<typeof IconField> = {
  title: "Components/Inputs/IconField",
  component: IconField,
  argTypes: {
    ...inputArgTypes,
    iconColor: {
      table: {
        type: {
          summary: "HslValue | RgbValue | string(hex)",
          detail:
            "defaultValue can be passed as: \n - hsl `object` eq. { h: number; s: number; l: number } \n - rgb `object` eq. { r: number; g: number; b: number } \n - hex `string` eq. '#a01d1d'",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconField>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
