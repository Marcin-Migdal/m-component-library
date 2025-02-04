import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import DropdownMenu from "./DropdownMenu";
import { DropdownMenuOption } from "./types";

const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, option: DropdownMenuOption) => {
  console.log(event);
  console.log(option);
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
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof DropdownMenu>;

export const OpenEventOnClick: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu options={dropdownMenuOptions} openEvent="click">
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const OpenEventOnHover: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu options={dropdownMenuOptions} openEvent="hover">
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const OpenPositionOnClick: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu options={dropdownMenuOptions} openPosition="occurred-event">
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

export const CenterDropdownPosition: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu options={dropdownMenuOptions} centerConsumer openEvent="click">
      <DropdownMenuTriggerButton />
    </DropdownMenu>
  ),
};

const DropdownMenuTriggerButton = ({ text = "Currency" }: { text?: string }) => {
  return <Button style={{ width: "fit-content" }} text={text} icon="money-bill-wave" onClick={() => {}} />;
};
