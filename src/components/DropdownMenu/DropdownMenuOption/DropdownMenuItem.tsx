import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { DropdownSubMenuProps } from "../DropdownSubMenu/DropdownSubMenu";
import { DropdownMenuOption } from "../types";

import "./DropdownMenuItem.scss";

type DropdownMenuItemProps = {
  option: DropdownMenuOption;
  hideDisabled: boolean;
  useIconPlaceholder: boolean;
  closeMenu: () => void;
  DropdownSubMenu: (props: DropdownSubMenuProps) => React.JSX.Element;
};

export const DropdownMenuItem = ({
  option,
  hideDisabled,
  useIconPlaceholder,
  closeMenu,
  DropdownSubMenu,
}: DropdownMenuItemProps) => {
  const { label, icon, onClick, disabled, options, template } = option;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const indicatorPresent = !!options && options.length > 0;

  const toggleSubMenu = () => setIsSubMenuOpen((prevState) => !prevState);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();

    if (disabled) {
      return;
    }

    if (indicatorPresent) {
      toggleSubMenu();

      return;
    }

    closeMenu();
    onClick && onClick(event, option);
  };

  if (disabled && hideDisabled) {
    return null;
  }

  const className = classNames("m-dropdown-menu-item", {
    disabled,
    "icon-placeholder": useIconPlaceholder,
    "item-active": isSubMenuOpen,
  });

  if (template) {
    return template({ className, indicatorPresent, option, handleClick, closeMenu });
  }

  return (
    <li onClick={handleClick} className={className}>
      {icon && <FontAwesomeIcon className="m-dropdown-menu-item-icon" icon={icon} />}
      {label && (
        <p className={classNames("m-dropdown-menu-item-text", { "indicator-present": indicatorPresent })}>{label}</p>
      )}
      {indicatorPresent && <FontAwesomeIcon className="m-dropdown-menu-item-icon indicator" icon="chevron-right" />}
      {isSubMenuOpen && <DropdownSubMenu options={options!} closeMenu={closeMenu} hideDisabled={hideDisabled} />}
    </li>
  );
};
