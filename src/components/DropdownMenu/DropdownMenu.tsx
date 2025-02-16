import classNames from "classnames";
import React, { PropsWithChildren, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { DropdownMenuProps, OpenConfig, OpenEvent, OpenPosition } from "./types";

import "./DropdownMenu.scss";

const DropdownMenuContainer = ({
  triggerContainerClassName,
  popupClassName,
  children,
  options,
  hideDisabled = false,
  emptyOptionsMessage = "No options",
  openEvent = OpenEvent.CONTEXT_CLICK,
  openPosition = OpenPosition.BOTTOM,
  zIndex = 1,
  centerConsumer = false,
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

  return (
    <>
      <div
        ref={dropdownTriggerContainerRef}
        onClick={(event) => openMenu(event, OpenEvent.CLICK)}
        onContextMenu={(event) => openMenu(event, OpenEvent.CONTEXT_CLICK)}
        onMouseEnter={(event) => openMenu(event, OpenEvent.HOVER)}
        className={classNames("m-dropdown-menu-trigger-container", triggerContainerClassName)}
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
            hideDisabled={hideDisabled}
            openEvent={openEvent}
            openPosition={openPosition}
            openConfig={openConfig}
            zIndex={zIndex}
            centerConsumer={centerConsumer}
            // optionHeightFit={optionHeightFit}
          />,
          document.body
        )}
    </>
  );
};

export default DropdownMenuContainer;
