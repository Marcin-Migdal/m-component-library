import { Meta, StoryObj } from "@storybook/react";

import { simpleInputArgTypes } from "../../../internalUtils/inputArgTypes";
import { ImageField } from "./ImageField";

const meta: Meta<typeof ImageField> = {
  title: "Components/Inputs/ImageField",
  component: ImageField,
  argTypes: {
    ...simpleInputArgTypes,
    value: { table: { type: { summary: "File" } } },
    dropzoneMessage: {
      description: " Messages displayed in the dropzone area.",
      table: { type: { summary: "[defaultMessage, draggingMessage]" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageField>;

export const Default: Story = {};
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };

export const SizeConstrain: Story = {
  args: {
    minSize: 500000,
    maxSize: 30000000,
  },
};

export const ResolutionConstrain: Story = {
  args: {
    minResolution: { width: 400, height: 300 },
    maxResolution: { width: 3840, height: 2160 },
  },
};
