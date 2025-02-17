import { Meta, StoryObj } from "@storybook/react";

import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Miscellaneous/Icon",
  component: Icon,
  args: { icon: ["fab", "facebook"] },
  argTypes: {
    ...generateHiddenArgTypes(["onClick"]),
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const icon: Story = {};
