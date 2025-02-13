import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Card from "./Card";

const CardContent = () => {
  return (
    <>
      <h2 className="w-100-percent text-center mt-unset">Card title</h2>
      <span className="inline-block w-100-percent">
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
  args: { className: "w-300-px p-4-rem", children: <CardContent /> },
  argTypes: { children: { control: false } },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Variant: Story = {
  args: { variant: "gradient-border" },
};
