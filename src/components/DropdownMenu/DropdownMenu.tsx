import React, { PropsWithChildren, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { DropdownMenuProps, OpenConfig, OpenEvent, OpenPosition } from "./types";

const DropdownMenuContainer = ({
  children,
  options,
  hideDisabled = false,
  emptyOptionsMessage,
  openEvent = OpenEvent.CONTEXT_CLICK,
  openPosition = OpenPosition.BOTTOM,
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
        className="m-dropdown-menu-trigger-container"
      >
        {children}
      </div>
      {openConfig &&
        dropdownTriggerContainerRef.current &&
        createPortal(
          <DropdownMenu
            parentElement={dropdownTriggerContainerRef.current}
            emptyOptionsMessage={emptyOptionsMessage || "No options"}
            options={options}
            closeMenu={closeMenu}
            hideDisabled={hideDisabled}
            openEvent={openEvent}
            openPosition={openPosition}
            openConfig={openConfig}
          />,
          document.body
        )}
    </>
  );
};

export default DropdownMenuContainer;
