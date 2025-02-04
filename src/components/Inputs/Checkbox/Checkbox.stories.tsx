import { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
    onChange: (event) => {
      // eslint-disable-next-line no-console
      console.log(event); // console log used for documentation
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {};
