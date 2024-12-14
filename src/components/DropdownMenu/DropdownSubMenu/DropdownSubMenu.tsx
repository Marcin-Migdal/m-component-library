import React, { useLayoutEffect, useRef, useState } from "react";

import { DropdownMenuItem } from "../DropdownMenuOption/DropdownMenuItem";
import { DropdownMenuConfig, DropdownMenuOption, DropdownMenuPosition, HorizontalOpenDirection } from "../types";

import "./DropdownSubMenu.css";

type DropdownSubMenuProps = {
  options: DropdownMenuOption[];
  closeMenu: () => void;
  hideDisabled: boolean;
};

export const DropdownSubMenu = ({ options, closeMenu, hideDisabled }: DropdownSubMenuProps) => {
  const dropdownSubMenuRef = useRef<HTMLUListElement>(null);

  const [subMenuConfig, setSubMenuConfig] = useState<Partial<DropdownMenuConfig>>({ opacity: 0 });

  const optionsHaveIcon = options.some((option) => !!option.icon);

  useLayoutEffect(() => {
    const calculateDropdownMenuPosition = (parentElement: HTMLElement, dropdownSubMenuElement: HTMLUListElement) => {
      const margin = 4;

      const {
        top: parentTop,
        right: parentRight,
        bottom: parentBottom,
        left: parentLeft,
        height: parentHeight,
      } = parentElement.getBoundingClientRect();
      const { width: subMenuWidth, height: subMenuHeight } = dropdownSubMenuElement.getBoundingClientRect();

      const previousHorizontalOpenDirection =
        (parentElement.parentElement?.getAttribute("data-x-open-direction") as HorizontalOpenDirection) || null;

      const position: DropdownMenuPosition = {
        top: "unset",
        right: "unset",
        left: "unset",
      };

      const fitOnRightSide = (): boolean => parentRight + subMenuWidth + margin < window.innerWidth - margin;
      const fitOnLeftSide = (): boolean => parentLeft - (subMenuWidth + margin) > 0;

      if (previousHorizontalOpenDirection === "left" || previousHorizontalOpenDirection === "right-fit") {
        if (fitOnLeftSide()) {
          position.right = `calc(100% + ${margin}px)`;
          position.horizontalOpenDirection = "left";
        } else if (fitOnRightSide()) {
          position.left = `calc(100% + ${margin}px)`;
          position.horizontalOpenDirection = "right";
        } else {
          position.right = `calc(100% + ${parentLeft - subMenuWidth - margin}px)`;
          position.horizontalOpenDirection = "left-fit";
        }
      } else {
        if (fitOnRightSide()) {
          position.left = `calc(100% + ${margin}px)`;
          position.horizontalOpenDirection = "right";
        } else if (fitOnLeftSide()) {
          position.right = `calc(100% + ${margin}px)`;
          position.horizontalOpenDirection = "left";
        } else {
          position.left = `calc(100% + ${window.innerWidth - margin - (subMenuWidth + parentRight)}px)`;
          position.horizontalOpenDirection = "right-fit";
        }
      }

      if (parentBottom - subMenuHeight - margin > 0) {
        position.top = "-1px";
      } else if (parentTop + subMenuHeight + margin < window.innerHeight) {
        position.top = `calc(-${subMenuHeight}px + ${parentHeight}px)`;
      } else {
        position.top = `${margin - parentTop}px`;
      }

      setSubMenuConfig({
        opacity: 1,
        zIndex: parentElement.parentElement?.getAttribute("data-z-index") ?? "unset",
        ...position,
      });
    };

    dropdownSubMenuRef.current?.parentElement &&
      dropdownSubMenuRef.current &&
      calculateDropdownMenuPosition(dropdownSubMenuRef.current?.parentElement, dropdownSubMenuRef.current);
  }, []);

  return (
    <ul
      className="m-dropdown-submenu"
      data-z-index={subMenuConfig.zIndex}
      data-x-open-direction={subMenuConfig.horizontalOpenDirection}
      ref={dropdownSubMenuRef}
      style={subMenuConfig}
    >
      {options.map((option, index) => (
        <DropdownMenuItem
          useIconPlaceholder={optionsHaveIcon}
          hideDisabled={hideDisabled}
          key={option.id ?? index}
          option={option}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};
