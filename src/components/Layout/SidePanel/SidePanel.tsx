import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { SidePanelOpenState, SidePanelProps } from "./types";

import "./SidePanel.scss";

/**
 * A side panel component that can be positioned on the left or right side of the screen.
 * Supports opening, closing, and always-open states.
 */
const SidePanel = ({
  children,
  handleClose,
  sidePanelOpen,
  className,
  position = "left",
  alwaysOpen = false,
  closeOnOutsideClick = false,
}: PropsWithChildren<SidePanelProps>) => {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnOutsideClick) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (!alertRef.current) {
        return;
      }

      if (!alertRef.current.contains(target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnOutsideClick, handleClose]);

  if (!alwaysOpen && sidePanelOpen === SidePanelOpenState.CLOSED) {
    return null;
  }

  return createPortal(
    <div
      ref={alertRef}
      className={classNames("m-side-panel", "m-scroll slim-scroll", sidePanelOpen, position, className, {
        opened: alwaysOpen,
      })}
    >
      <div className="m-side-panel-close-icon-container">
        {!alwaysOpen && <FontAwesomeIcon icon="close" className="m-side-panel-close-icon" onClick={handleClose} />}
      </div>
      {children}
    </div>,
    document.body
  );
};

export default SidePanel;
