import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from ".";
import { PrimaryPlacement } from "../../../utils";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Miscellaneous/Tooltip",
  component: Tooltip,
  args: { children: "Tooltip content" },
  argTypes: {
    className: {
      description: "Additional CSS class for the tooltip.",
      type: "string",
    },
    style: {
      description: "Inline styles for the tooltip.",
      control: "object",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
    },
    children: {
      description: "Content of the tooltip passed as `ReactNode`",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    primaryPlacement: {
      control: "radio",
      options: [PrimaryPlacement.BOTTOM, PrimaryPlacement.LEFT, PrimaryPlacement.RIGHT, PrimaryPlacement.TOP],
      description: "The position of the tooltip relative to the target element.",
      table: {
        type: { summary: "top | bottom | right | left" },
        defaultValue: { summary: "bottom" },
      },
    },
    openDelay: {
      type: "number",
      description: "Delay (in milliseconds) before the tooltip opens.",
      table: {
        defaultValue: { summary: "0" },
        type: { summary: "Number" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const tooltip: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<SVGSVGElement>(null);

    return (
      <>
        <FontAwesomeIcon ref={ref} icon="search" />
        <Tooltip {...args} targetRef={ref}></Tooltip>
      </>
    );
  },
};
