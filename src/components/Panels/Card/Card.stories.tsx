import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Card from "./Card";

const CardContent = () => {
  return (
    <>
      <h2 style={{ width: "100%", textAlign: "center", marginTop: "0px" }}>Card title</h2>
      <span style={{ display: "inline-block", width: "100%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </span>
    </>
  );
};

const meta: Meta<typeof Card> = {
  title: "Components/Panels/Card",
  component: Card,
  args: {
    style: { width: "300px", padding: "1rem" },
    children: <CardContent />,
  },

  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const VariantDefault: Story = {
  args: { variant: "default" },
};

export const VariantBorder: Story = {
  args: { variant: "border" },
};

export const VariantGradientBorder: Story = {
  args: { variant: "gradient-border" },
};

export const VariantGradientBorderGlow: Story = {
  args: { variant: "gradient-border-glow" },
};
