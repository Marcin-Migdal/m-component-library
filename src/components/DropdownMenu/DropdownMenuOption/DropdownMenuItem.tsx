import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { DropdownSubMenuProps } from "../DropdownSubMenu/DropdownSubMenu";
import { DropdownMenuOption } from "../types";

import "./DropdownMenuItem.scss";

type DropdownMenuItemProps = {
  option: DropdownMenuOption;
  hideDisabledOptions: boolean;
  useIconPlaceholder: boolean;
  closeMenu: () => void;
  DropdownSubMenu: (props: DropdownSubMenuProps) => React.JSX.Element;
};

export const DropdownMenuItem = ({
  option,
  hideDisabledOptions,
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

  if (disabled && hideDisabledOptions) {
    return null;
  }

  const className = classNames("m-dropdown-menu-item", {
    disabled,
    "icon-placeholder": useIconPlaceholder,
    "item-active": isSubMenuOpen,
  });

  const SubMenu =
    isSubMenuOpen && indicatorPresent ? (
      <DropdownSubMenu options={options!} closeMenu={closeMenu} hideDisabledOptions={hideDisabledOptions} />
    ) : null;

  if (template) {
    return template({ className, indicatorPresent, option, handleClick, closeMenu, SubMenu });
  }

  return (
    <li onClick={handleClick} className={className}>
      {icon && <FontAwesomeIcon className="m-dropdown-menu-item-icon" icon={icon} />}
      {label && (
        <p className={classNames("m-dropdown-menu-item-text", { "indicator-present": indicatorPresent })}>{label}</p>
      )}
      {indicatorPresent && <FontAwesomeIcon className="m-dropdown-menu-item-icon indicator" icon="chevron-right" />}
      {SubMenu}
    </li>
  );
};
