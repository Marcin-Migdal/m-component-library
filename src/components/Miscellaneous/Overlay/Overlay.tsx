import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { OverlayProps } from "./types";

import "./Overlay.scss";

const Overlay = ({
  children,
  onClick,
  onClose,
  enableKeysDown = { tab: false, enter: false, space: false },
  disableCloseOnEscape = false,
}: PropsWithChildren<OverlayProps>) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("body-no-scroll");

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (onClose && event.code === "Escape" && !disableCloseOnEscape) {
        onClose();
      }

      if (
        (enableKeysDown === true && ["Tab", "Enter", "Space"].includes(event.code)) ||
        (typeof enableKeysDown === "object" &&
          ((!enableKeysDown.tab && event.code === "Tab") ||
            (!enableKeysDown.enter && event.code === "Enter") ||
            (!enableKeysDown.space && event.code === "Space")))
      ) {
        if (!overlayRef.current?.contains(event.target as Node)) {
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (event.target !== overlayRef.current) {
      return;
    }

    event.stopPropagation();
    onClick && onClick(event);
  };

  return createPortal(
    <div ref={overlayRef} onMouseDown={handleClick} className="m-overlay">
      {children}
    </div>,
    document.body
  );
};

export default Overlay;
