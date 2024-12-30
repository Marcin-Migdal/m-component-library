import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { OverlayProps } from "./types";

import "./Overlay.css";

const Overlay = ({ children, onClick, enableKeysDown }: PropsWithChildren<OverlayProps>) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("body-no-scroll");
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (!enableKeysDown?.tab && event.code === "Tab") ||
        (!enableKeysDown?.enter && event.code === "Enter") ||
        (!enableKeysDown?.space && event.code === "Space")
      ) {
        event.preventDefault();
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
    <div tabIndex={0} ref={overlayRef} onMouseDown={handleClick} className="m-overlay">
      {children}
    </div>,
    document.body
  );
};

export default Overlay;
