import { StoryObj } from "@storybook/react";

import Textfield from "./Textfield";

export default {
  title: "Components/Inputs/Textfield",
  component: Textfield,
};

type Story = StoryObj<typeof Textfield>;

export const TextfieldSmall: Story = {
  args: {
    label: "Label",
    labelType: "floating",
    size: "small",
  },
};

export const TextfieldMedium: Story = {
  args: {
    label: "Label",
    labelType: "floating",
    size: "medium",
  },
};

export const TextfieldLarge: Story = {
  args: {
    label: "Label",
    labelType: "floating",
    size: "large",
  },
};

export const LabelLeft: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    labelType: "left",
    size: "medium",
  },
};

export const LabelRight: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    labelType: "right",
    size: "medium",
  },
};

export const TextfieldWithPrefix: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    prefix: "Prefix",
    labelType: "right",
    size: "medium",
  },
};
