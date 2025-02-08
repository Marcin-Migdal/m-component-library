import { Meta, StoryObj } from "@storybook/react";

import { generateHiddenArgTypes } from "../../internalUtils/generateHiddenArgTypes";
import { ComponentSize } from "../global-types";
import Button from "./Button";
import { ButtonIconPosition } from "./types";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    text: "Button Text",
  },
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "children", "tooltipConfig"]),
    icon: { type: "string", defaultValue: undefined },
    iconPosition: {
      control: "radio",
      options: [ButtonIconPosition.LEFT, ButtonIconPosition.RIGHT],
      table: {
        type: { summary: "right | left" },
        defaultValue: { summary: "right" },
      },
    },
    variant: {
      table: { type: { summary: "outlined | full | text | neon" } },
      options: ["outlined", "full", "text", "neon"],
    },
    size: {
      control: "radio",
      options: [ComponentSize.SMALL, ComponentSize.MEDIUM, ComponentSize.LARGE],
      table: {
        type: { summary: "small | medium | large" },
        defaultValue: { summary: "medium" },
      },
    },
    type: {
      control: "radio",
      options: ["submit", "reset", "button"],
      description: "The type of the button,",
      table: { type: { summary: "submit | reset | button" } },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Button> = {};

export const Variant: StoryObj<typeof Button> = {
  args: {
    variant: "full",
  },
};

export const Size: StoryObj<typeof Button> = {
  args: {
    size: "small",
  },
};

export const Busy: StoryObj<typeof Button> = {
  args: {
    busy: true,
  },
};

export const Icon: StoryObj<typeof Button> = {
  args: {
    icon: "plus",
  },
};

export const Tooltip: StoryObj<typeof Button> = {
  args: {
    tooltip: "Tooltip content",
  },
};
