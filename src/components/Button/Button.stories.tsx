import { Meta, StoryObj } from "@storybook/react";

import { generateHiddenArgTypes } from "../../internalUtils/generateHiddenArgTypes";
import { ComponentSize } from "../global-types";
import Button from "./Button";
import { ButtonIconPosition } from "./types";

// TODO! deploy storybooka chromiatic

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "children", "tooltipConfig"]),

    icon: { type: "string", defaultValue: undefined },
    text: { type: "string", defaultValue: "" },
    tooltip: { type: "string" },
    disabledTooltip: { type: "string" },
    iconPosition: {
      options: [ButtonIconPosition.LEFT, ButtonIconPosition.RIGHT],
    },
    size: {
      options: [ComponentSize.SMALL, ComponentSize.MEDIUM, ComponentSize.LARGE],
    },
  },
};

export default meta;

const commonArgs: Partial<typeof Button> = {
  icon: "",
  text: "Button Text",
};

export const Outlined: StoryObj<typeof Button> = {
  args: { ...commonArgs },
};

export const Full: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    variant: "full",
  },
};

export const Text: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    variant: "text",
  },
};

export const Neon: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    variant: "neon",
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    size: ComponentSize.SMALL,
  },
};

export const Medium: StoryObj<typeof Button> = {
  args: { ...commonArgs },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    size: ComponentSize.LARGE,
  },
};

export const IconLeft: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    icon: "plus",
    iconPosition: ButtonIconPosition.LEFT,
  },
};

export const IconRight: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    icon: "plus",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    disabled: true,
  },
};

export const WithTooltip: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    tooltip: "This is a tooltip!",
  },
};

export const DisabledWithTooltip: StoryObj<typeof Button> = {
  args: {
    ...commonArgs,
    disabled: true,
    disabledTooltip: "This button is disabled!",
  },
};
