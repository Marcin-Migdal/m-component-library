import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import DropdownMenu from "./DropdownMenu";
import { DropdownMenuOption, OpenEvent as OpenEventEnum, OpenPosition as OpenPositionEnum } from "./types";

const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, option: DropdownMenuOption) => {
  // eslint-disable-next-line no-console
  console.log(event); // console log used for documentation

  // eslint-disable-next-line no-console
  console.log(option); // console log used for documentation
};

export const dropdownMenuOptions: DropdownMenuOption[] = [
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
    disabled: true,
  },
];

const DropdownMenuTriggerButton = () => {
  return <Button style={{ width: "fit-content" }} text="Currency" icon="money-bill-wave" onClick={() => {}} />;
};

export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  args: {
    options: dropdownMenuOptions,
    children: <DropdownMenuTriggerButton />,
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
      control: "radio",
      options: Object.values(OpenEventEnum),
      table: {
        defaultValue: { summary: "context-click" },
        type: { summary: "click | hover | context-click" },
      },
    },
    openPosition: {
      control: "radio",
      options: Object.values(OpenPositionEnum),
      table: {
        defaultValue: { summary: "bottom" },
        type: { summary: "bottom | auto-bottom | top | auto-top | occurred-event" },
      },
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
    children: {
      table: { type: { summary: "ReactNode" } },
    },
  },
} as Meta<typeof DropdownMenu>;

export const Default: StoryObj<typeof DropdownMenu> = {};

export const OpenEvent: StoryObj<typeof DropdownMenu> = {
  args: {
    openEvent: "hover",
  },
};

export const OpenPosition: StoryObj<typeof DropdownMenu> = {
  args: {
    openPosition: "occurred-event",
  },
};

export const NoOptions: StoryObj<typeof DropdownMenu> = {
  args: { options: [] },
};

export const HideDisabled: StoryObj<typeof DropdownMenu> = {
  args: { hideDisabled: true },
};

export const CenterDropdownMenu: StoryObj<typeof DropdownMenu> = {
  args: { centerConsumer: true },
};
