import React, { useLayoutEffect, useRef, useState } from "react";

import { DropdownMenuItem } from "../DropdownMenuOption/DropdownMenuItem";
import { DropdownMenuConfig, DropdownMenuOption, DropdownMenuPosition, OpenDirectionType } from "../types";

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

      const { right, left } = parentElement.getBoundingClientRect();
      const { width: subMenuWidth } = dropdownSubMenuElement.getBoundingClientRect();

      const previousOpenDirection =
        (parentElement.parentElement?.getAttribute("data-menu-direction") as OpenDirectionType) || null;

      const position: DropdownMenuPosition = { top: "-1px", right: "unset", left: "unset" };

      const fitOnRightSide = (): boolean => right + subMenuWidth + margin < window.innerWidth - margin;
      const fitOnLeftSide = (): boolean => left - (subMenuWidth + margin) > 0;

      if (previousOpenDirection === "left" || previousOpenDirection === "right-fit") {
        if (fitOnLeftSide()) {
          position.right = `calc(100% + ${margin}px)`;
          position.openDirection = "left";
        } else if (fitOnRightSide()) {
          position.left = `calc(100% + ${margin}px)`;
          position.openDirection = "right";
        } else {
          position.right = `calc(100% + ${left - subMenuWidth - margin}px)`;
          position.openDirection = "left-fit";
        }
      } else {
        if (fitOnRightSide()) {
          position.left = `calc(100% + ${margin}px)`;
          position.openDirection = "right";
        } else if (fitOnLeftSide()) {
          position.right = `calc(100% + ${margin}px)`;
          position.openDirection = "left";
        } else {
          position.left = `calc(100% + ${window.innerWidth - margin - (subMenuWidth + right)}px)`;
          position.openDirection = "right-fit";
        }
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
      data-menu-direction={subMenuConfig.openDirection}
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
