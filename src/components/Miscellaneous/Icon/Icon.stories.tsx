import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import Icon from "./Icon";
import { cssVariablesData } from "./Icon.stories.consts";

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

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
