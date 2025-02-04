import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { SidePanelOpenState, SidePanelProps } from "./types";

import "./SidePanel.scss";

export const SidePanel = ({
  children,
  handleClose,
  sidePanelOpen,
  className,
  position = "left",
  alwaysOpen = false,
}: PropsWithChildren<SidePanelProps>) => {
  if (!alwaysOpen && sidePanelOpen === SidePanelOpenState.CLOSED) {
    return null;
  }

  return createPortal(
    <div
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
