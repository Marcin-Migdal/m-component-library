import { Meta, StoryObj } from "@storybook/react";

import { DateField } from ".";
import { inputArgTypes } from "../../../internalUtils/inputArgTypes";

const meta: Meta<typeof DateField> = {
  title: "Components/Inputs/DateField",
  component: DateField,
  argTypes: {
    ...inputArgTypes,
    range: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    value: {
      control: false,
      table: {
        type: {
          summary: "Date | [Date, Date]",
          detail:
            "Value type is dependant on the props `range` \n - `Date` when `range` === false (DEFAULT) \n - `[Date, Date]` when `range` === true",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {};
export const Range: Story = { args: { range: true } };
export const Locale: Story = { args: { locale: "pl-PL" } };
export const Label: Story = { args: { label: "Input label", labelType: "left" } };
export const Size: Story = { args: { size: "small" } };
export const Error: Story = { args: { error: "Input error" } };
