import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { inputArgTypes } from "../../../internalUtils/inputArgTypes";
import { Button } from "../../Button";
import { Alert, useAlert } from "../../Popups";
import ColorPicker from "./ColorPicker";
import { ColorPickerChangeEvent, ColorValue } from "./types";

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
    onClose: {
      control: false,
      description:
        "Callback triggered when the color picker closes. Format of the value is controlled by `returnedColorType` props.",
      table: {
        type: {
          summary: "(value: ColorValue | undefined) => void",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const [handleOpen, alertProps] = useAlert();
      const [color, setColor] = useState<ColorValue | null>(null);

      const handleChange = (event: ColorPickerChangeEvent) => {
        const { value } = event.target;

        setColor(value);
      };

      return (
        <div style={{ width: "300px" }}>
          <Alert header="Color picker alert" {...alertProps}>
            <ColorPicker value={color} onChange={handleChange} />
          </Alert>
          <Button text="Open" onClick={() => handleOpen()} />
        </div>
      );
    },
  ],
};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
