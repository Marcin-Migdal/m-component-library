import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import DropdownMenu from "./DropdownMenu";
import { DropdownMenuOption } from "./types";

export default {
  title: "M-component-library/ContextMenu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const handleClick = (event: any, option: DropdownMenuOption) => {
  console.log(event);
  console.log(option);
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
      {
        label: "euro",
        onClick: handleClick,
        icon: "euro",
      },
      {
        label: "euro",
        onClick: handleClick,
        icon: "euro",
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

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <ThemeWrapper darkMode>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <DropdownMenu options={dropdownMenuOptions}>
        <Button style={{ width: "fit-content" }} text="Currency" icon="money-bill-wave" onClick={() => {}} />
      </DropdownMenu>
    </div>
  </ThemeWrapper>
);

export const contextMenu = Template.bind({});

contextMenu.args = {};
