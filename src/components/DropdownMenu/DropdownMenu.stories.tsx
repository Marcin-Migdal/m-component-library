import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import DropdownMenu from "./DropdownMenu";
import { DropdownMenuOption, OpenEvent, OpenPosition } from "./types";

const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, option: DropdownMenuOption) => {
  // eslint-disable-next-line no-console
  console.log(event); // console log used for documentation

  // eslint-disable-next-line no-console
  console.log(option); // console log used for documentation
};

const dropdownMenuOptions: DropdownMenuOption[] = [
  {
    label: "Add currency",
    onClick: handleClick,
    icon: "plus",
    options: [
      {
        label: "yen",
        onClick: handleClick,
        icon: "yen",
      },
      {
        label: "dollar",
        onClick: handleClick,
        icon: "dollar",
        options: [
          {
            label: "American dollar",
            onClick: handleClick,
            icon: "dollar",
            options: [
              {
                label: "Full dollar",
                onClick: handleClick,
                icon: "dollar",
              },
              {
                label: "Cent",
                onClick: handleClick,
                icon: "dollar",
              },
            ],
          },
          {
            label: "Canadian dollar",
            onClick: handleClick,
            icon: "dollar",
          },
        ],
      },
      {
        label: "euro",
        onClick: handleClick,
        icon: "euro",
      },
    ],
  },
  {
    label: "Delete currency",
    onClick: handleClick,
    icon: "trash",
    disabled: true,
  },
];

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  decorators: [(Story) => <Story />],
  args: {
    hideDisabled: false,
    emptyOptionsMessage: "No options",
    openEvent: OpenEvent.CONTEXT_CLICK,
    openPosition: OpenPosition.BOTTOM,
    zIndex: 1,
    centerConsumer: false,
    optionHeightFit: 6,
    options: dropdownMenuOptions,
  },
  argTypes: {
    triggerContainerClassName: {
      control: "text",
      table: {
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    popupClassName: {
      control: "text",
      table: { defaultValue: { summary: "undefined" } },
    },
    options: {
      control: "object",
      table: { defaultValue: { summary: "DropdownMenuOption[]" } },
    },
    hideDisabled: {
      control: "boolean",
    },
    emptyOptionsMessage: {
      control: "text",
    },
    openEvent: {
      control: "select",
      options: Object.values(OpenEvent),
      table: { defaultValue: { summary: "context-click" } },
    },
    openPosition: {
      control: "select",
      options: Object.values(OpenPosition),
      table: { defaultValue: { summary: "bottom" } },
    },
    zIndex: {
      control: "number",
    },
    centerConsumer: {
      control: "boolean",
    },
    optionHeightFit: {
      control: "number",
    },
    onOpen: {
      action: "onOpen",
      table: { defaultValue: { summary: "undefined" } },
    },
    onClose: {
      action: "onClose",
      table: { defaultValue: { summary: "undefined" } },
    },
  },
} as Meta<typeof DropdownMenu>;

const DropdownMenuTriggerButton = ({ text = "Currency" }: { text?: string }) => {
  return <Button style={{ width: "fit-content" }} text={text} icon="money-bill-wave" onClick={() => {}} />;
};

export const Default: StoryObj<typeof DropdownMenu> = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const NoOptions: StoryObj<typeof DropdownMenu> = {
  args: { options: [] },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const HideDisabled: StoryObj<typeof DropdownMenu> = {
  args: { hideDisabled: true },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const CenterDropdownMenu: StoryObj<typeof DropdownMenu> = {
  args: { centerConsumer: true },
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};
