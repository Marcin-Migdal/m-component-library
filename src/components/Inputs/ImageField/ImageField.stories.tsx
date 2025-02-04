import { Meta, StoryObj } from "@storybook/react";

import { ImageField } from "./ImageField";

const meta: Meta<typeof ImageField> = {
  title: "Components/Inputs/ImageField",
  component: ImageField,
};

export default meta;

type Story = StoryObj<typeof ImageField>;

export const Simple: Story = {
  args: {
    label: "Image input",
  },
};

export const BoundedResolution: Story = {
  args: {
    label: "Image input",
  },
};

export const BoundedSize: Story = {
  args: {
    label: "Image input",
  },
};

export const ImageFieldCustomDropzoneMessage: Story = {
  args: {
    label: "Image input",
  },
};
