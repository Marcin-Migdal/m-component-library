import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Miscellaneous",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const tooltip: Story = {
  render: (args) => {
    const ref = useRef<SVGSVGElement>(null);

    return (
      <>
        <FontAwesomeIcon ref={ref} icon="search" />
        <Tooltip placement="right" targetRef={ref} {...args}>
          Tooltip content
        </Tooltip>
      </>
    );
  },
};
