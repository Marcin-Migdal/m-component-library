import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from ".";
import { Placement } from "../../../utils";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Miscellaneous/Tooltip",
  component: Tooltip,
  args: {
    children: "Tooltip content",
    openDelay: 0,
    placement: Placement.BOTTOM,
  },
  argTypes: {
    className: {
      description: "Additional CSS class for the tooltip.",
      type: "string",
    },
    style: {
      description: "Inline styles for the tooltip.",
      control: "object",
    },
    children: { type: "string" },
    placement: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "select" as any,
      options: [Placement.BOTTOM, Placement.LEFT, Placement.RIGHT, Placement.TOP],
    },
    openDelay: { type: "number" },
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
