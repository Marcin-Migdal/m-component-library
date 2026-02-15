import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ComponentCssVariableTable } from "../../internalUtils/components/ComponentCssVariableTable";
import { Button } from "../Button";
import { cssVariablesData } from "./DropdownMenu.stories.consts";
import DropdownMenu from "./DropdownMenuContainer";
import {
  DropdownMenuOption,
  DropdownMenuOptionTemplate,
  OpenEvent as OpenEventEnum,
  OpenPosition as OpenPositionEnum,
} from "./types";

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
            disabled: true,
            options: [
              {
                label: "Full dollar",
                onClick: handleClick,
                icon: "dollar",
                disabled: true,
              },
              {
                label: "Cent",
                onClick: handleClick,
                icon: "dollar",
                disabled: true,
              },
            ],
          },
          {
            label: "Canadian dollar",
            onClick: handleClick,
            icon: "dollar",
            disabled: true,
          },
        ],
      },
      {
        label: "euro",
        onClick: handleClick,
        icon: "euro",
        disabled: true,
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
    hideDisabledOptions: {
      control: "boolean",
    },
    hideOnDisabledOptions: {
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
    positionAlignment: {
      control: {
        type: "radio",
        options: ["start", "center", "end"],
      },
      table: {
        type: { summary: "start | center | end" },
      },
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
    openPosition: "auto-bottom",
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

export const HideDisabledOptions: StoryObj<typeof DropdownMenu> = {
  args: { hideDisabledOptions: true },
};

export const CenterDropdownMenu: StoryObj<typeof DropdownMenu> = {
  args: { positionAlignment: "center" },
};

export const CSSVariables: StoryObj = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};

const template: DropdownMenuOptionTemplate = ({ option, handleClick, className, SubMenu }) => (
  <li className={className} onClick={handleClick} style={{ border: "1px solid red", padding: "10px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontWeight: "bold" }}>⭐ {option.label}</span>
      <span>{option.options ? "➡" : ""}</span>
    </div>
    {SubMenu}
  </li>
);

export const CustomTemplateWithSubMenu: StoryObj<typeof DropdownMenu> = {
  args: {
    options: [
      {
        label: "Custom Item 1",
        options: [
          {
            label: "Nested Item 1",
            onClick: handleClick,
            template,
          },
          {
            label: "Nested Item 2",
            onClick: handleClick,
            template,
            options: [
              {
                label: "Nested Item 2.1",
                onClick: handleClick,
                template,
              },
              {
                label: "Nested Item 2.2",
                onClick: handleClick,
                template,
              },
            ],
          },
        ],
        template,
      },
      {
        label: "Normal Item",
        onClick: handleClick,
        template,
      },
    ],
  },
};
