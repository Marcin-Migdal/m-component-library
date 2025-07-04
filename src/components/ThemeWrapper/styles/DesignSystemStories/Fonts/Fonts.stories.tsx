import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ExampleList } from "../../../../../internalUtils/components/ExampleList/ExampleList";
import { fontSizes, fontWeights, lineHeights } from "./consts";

const meta: Meta = {
  title: "Design System/Fonts",
  tags: ["!autodocs"],
};

export default meta;

export const FontSizes: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={fontSizes}>
      {({ cssVariable }) => <span style={{ fontSize: `var(${cssVariable})` }}>Lorem ipsum dolor sit amet</span>}
    </ExampleList>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={fontWeights}>
      {({ cssVariable }) => <span style={{ fontWeight: `var(${cssVariable})` }}>Lorem ipsum dolor sit amet</span>}
    </ExampleList>
  ),
};

export const LineHeights: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={lineHeights}>
      {({ cssVariable }) => (
        <span style={{ lineHeight: `var(${cssVariable})` }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit
        </span>
      )}
    </ExampleList>
  ),
};
