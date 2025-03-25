import React, { useEffect } from "react";

import { Icon } from "../../../Miscellaneous/Icon";
import { AlertHeaderProps } from "../types";

export const AlertHeader = ({ header, onClose, disableCloseOnEscape }: AlertHeaderProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (onClose && event.code === "Escape" && !disableCloseOnEscape) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="m-alert-header">
      {header && <h4>{header}</h4>}
      <Icon onClick={onClose} icon={["fas", "xmark"]} />
    </div>
  );
};
