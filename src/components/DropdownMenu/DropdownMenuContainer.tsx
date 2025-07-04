import classNames from "classnames";
import React, { PropsWithChildren, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { SecondaryPlacement } from "../../utils";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { hasEnabledOptions } from "./helpers/hasEnabledOptions";
import { DropdownMenuProps, OpenConfig, OpenEvent, OpenPosition } from "./types";

import "./DropdownMenu.scss";

const DropdownMenuContainer = ({
  triggerContainerClassName,
  popupClassName,
  children,
  options,
  hideDisabledOptions = false,
  hideOnDisabledOptions = false,
  emptyOptionsMessage = "No options",
  openEvent = OpenEvent.CONTEXT_CLICK,
  openPosition = OpenPosition.BOTTOM,
  zIndex = 1,
  positionAlignment = SecondaryPlacement.START,
  // optionHeightFit = 6,
  onOpen,
  onClose,
}: PropsWithChildren<DropdownMenuProps>) => {
  const dropdownTriggerContainerRef = useRef<HTMLDivElement>(null);

  const [openConfig, setOpenConfig] = useState<OpenConfig | undefined>(undefined);

  const closeMenu = () => {
    setOpenConfig(undefined);

    onClose && onClose();
  };

  const openMenu = (event: React.MouseEvent<HTMLDivElement>, firedOpenEvent: OpenEvent) => {
    if (openEvent !== firedOpenEvent) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    setOpenConfig({
      eventPosition: { top: event.clientY, left: event.clientX },
      openedBy: firedOpenEvent,
    });

    onOpen && onOpen();
  };

  const hideDropdown = useMemo(() => {
    if (!hideOnDisabledOptions) {
      return false;
    }

    return !hasEnabledOptions(options);
  }, [options, hideOnDisabledOptions]);

  if (hideDropdown) {
    return null;
  }

  return (
    <>
      <div
        ref={dropdownTriggerContainerRef}
        onClick={(event) => openMenu(event, OpenEvent.CLICK)}
        onContextMenu={(event) => openMenu(event, OpenEvent.CONTEXT_CLICK)}
        onMouseEnter={(event) => openMenu(event, OpenEvent.HOVER)}
        className={classNames(
          "m-dropdown-menu-trigger-container",
          triggerContainerClassName,
          openConfig ? "opened" : "closed"
        )}
      >
        {children}
      </div>
      {openConfig &&
        dropdownTriggerContainerRef.current &&
        createPortal(
          <DropdownMenu
            className={popupClassName}
            parentElement={dropdownTriggerContainerRef.current}
            emptyOptionsMessage={emptyOptionsMessage}
            options={options}
            closeMenu={closeMenu}
            hideDisabledOptions={hideDisabledOptions}
            openEvent={openEvent}
            openPosition={openPosition}
            openConfig={openConfig}
            zIndex={zIndex}
            positionAlignment={positionAlignment}
            // optionHeightFit={optionHeightFit}
          />,
          document.body
        )}
    </>
  );
};

export default DropdownMenuContainer;
