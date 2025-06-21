import classNames from "classnames";
import React, { useLayoutEffect, useRef, useState } from "react";

import { useKeyboardClose, useOutsideClick } from "../../../hooks";
import { DropdownMenuItem } from "../DropdownMenuOption/DropdownMenuItem";
import { DropdownSubMenu } from "../DropdownSubMenu/DropdownSubMenu";
import { getDropdownPosition } from "../helpers/getDropdownPosition";

import {
  DropdownMenuConfig,
  DropdownMenuOption,
  DropdownMenuPosition,
  OpenConfig,
  OpenEvent,
  OpenPosition,
} from "../types";

import "./DropdownMenu.scss";

type DropdownMenuProps = {
  className?: string;
  parentElement: HTMLDivElement;
  options: DropdownMenuOption[];
  closeMenu: () => void;
  emptyOptionsMessage: string;
  openEvent: `${OpenEvent}`;
  openPosition: `${OpenPosition}`;
  hideDisabledOptions: boolean;
  openConfig: OpenConfig;
  zIndex: number;
  centerConsumer: boolean;
  // optionHeightFit: number;
};

const initDropdownMenuConfig: Partial<DropdownMenuConfig> = { opacity: 0 };

export const DropdownMenu = ({
  className,
  parentElement,
  options,
  closeMenu,
  emptyOptionsMessage,
  openEvent,
  openPosition,
  hideDisabledOptions,
  openConfig,
  zIndex,
  centerConsumer,
}: // optionHeightFit = 6,
DropdownMenuProps) => {
  const [dropdownMenuConfig, setDropdownMenuConfig] = useState<Partial<DropdownMenuConfig>>(initDropdownMenuConfig);

  const dropdownMenuContainerRef = useRef<HTMLUListElement>(null);
  const optionsHaveIcon = options.some((option) => !!option.icon);

  useOutsideClick(dropdownMenuContainerRef, closeMenu);
  useKeyboardClose(closeMenu);

  useLayoutEffect(() => {
    const calculateDropdownMenuPosition = (dropdownMenuElement: HTMLUListElement) => {
      if (openEvent === OpenEvent.HOVER && dropdownMenuConfig.opacity === 1) {
        return;
      }

      let dropdownPosition: DropdownMenuPosition = {
        left: "unset",
        top: "unset",
      };

      switch (openPosition) {
        case OpenPosition.OCCURRED_EVENT: {
          dropdownPosition = {
            top: openConfig.eventPosition.top,
            left: openConfig.eventPosition.left,
          };

          break;
        }

        default: {
          dropdownPosition = getDropdownPosition(
            parentElement,
            dropdownMenuElement,
            openPosition.includes("top") ? "top" : "bottom",
            openPosition.includes("auto"),
            centerConsumer
          );

          break;
        }
      }

      const element = dropdownMenuContainerRef.current;

      if (!element) {
        return;
      }

      // const children = Array.from(element.children) as HTMLLIElement[];

      // const totalHeight =
      //   children.length > optionHeightFit
      //     ? children.slice(0, optionHeightFit).reduce((sum, child) => sum + child.offsetHeight, 0)
      //     : "fit-content";

      const totalHeight = "fit-content";

      setDropdownMenuConfig({
        zIndex: zIndex,
        opacity: 1,
        horizontalOpenDirection: "right",
        maxHeight: totalHeight,
        ...dropdownPosition,
      });
    };

    dropdownMenuContainerRef.current && calculateDropdownMenuPosition(dropdownMenuContainerRef.current);
  }, []);

  return (
    <ul
      className={classNames("m-dropdown-menu", "m-scroll slim-scroll", className)}
      data-z-index={1}
      ref={dropdownMenuContainerRef}
      style={dropdownMenuConfig}
    >
      {options.length > 0 ? (
        options.map((option, index) => (
          <DropdownMenuItem
            useIconPlaceholder={optionsHaveIcon}
            hideDisabledOptions={hideDisabledOptions}
            key={option.id ?? index}
            option={option}
            closeMenu={closeMenu}
            DropdownSubMenu={DropdownSubMenu}
          />
        ))
      ) : (
        <li className="m-dropdown-menu-empty-message">{emptyOptionsMessage}</li>
      )}
    </ul>
  );
};
