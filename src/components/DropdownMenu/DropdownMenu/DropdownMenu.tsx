import classNames from "classnames";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { DropdownMenuItem } from "../DropdownMenuOption/DropdownMenuItem";
import { getDropdownPosition } from "../helpers/getDropdownPosition";

import {
  DropdownMenuConfig,
  DropdownMenuOption,
  DropdownMenuPosition,
  OpenConfig,
  OpenEvent,
  OpenPosition,
} from "../types";

import "./DropdownMenu.css";

type DropdownMenuProps = {
  className?: string;
  parentElement: HTMLDivElement;
  options: DropdownMenuOption[];
  closeMenu: () => void;
  emptyOptionsMessage: string;
  openEvent: `${OpenEvent}`;
  openPosition: `${OpenPosition}`;
  hideDisabled: boolean;
  openConfig: OpenConfig;
  zIndex: number;
  centerConsumer: boolean;
  optionHeightFit: number;
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
  hideDisabled,
  openConfig,
  zIndex,
  centerConsumer,
  optionHeightFit = 6,
}: DropdownMenuProps) => {
  const [dropdownMenuConfig, setDropdownMenuConfig] = useState<Partial<DropdownMenuConfig>>(initDropdownMenuConfig);

  const dropdownMenuContainerRef = useRef<HTMLUListElement>(null);
  const optionsHaveIcon = options.some((option) => !!option.icon);

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

      const children = Array.from(element.children) as HTMLLIElement[];

      const totalHeight = children.slice(0, optionHeightFit).reduce((sum, child) => sum + child.offsetHeight, 0);

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

  useEffect(() => {
    if (!dropdownMenuConfig) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (!dropdownMenuContainerRef.current) {
        return;
      }

      if (!dropdownMenuContainerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dropdownMenuConfig]);

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
            hideDisabled={hideDisabled}
            key={option.id ?? index}
            option={option}
            closeMenu={closeMenu}
          />
        ))
      ) : (
        <li className="m-dropdown-menu-empty-message">{emptyOptionsMessage}</li>
      )}
    </ul>
  );
};
