import { StoryObj } from "@storybook/react";

import { DateField } from ".";

export default {
  title: "Components/Inputs/DateField",
  component: DateField,
};

type Story = StoryObj<typeof DateField>;

export const SingleDateField: Story = {
  args: {
    label: "Select a date",
    labelType: "floating",
  },
};

export const RangeDateField: Story = {
  args: {
    label: "Select a date",
    labelType: "floating",
    range: true,
  },
};

export const PolishLocaleDateField: Story = {
  args: {
    label: "Select a date",
    labelType: "floating",
    locale: "pl-PL",
    range: true,
  },
};

export const JapaneseDateField: Story = {
  args: {
    label: "Select a date",
    labelType: "floating",
    locale: "ja-JP",
    range: true,
  },
};

export const GermanDateField: Story = {
  args: {
    label: "Select a date",
    labelType: "floating",
    locale: "de-DE",
    range: true,
  },
};
