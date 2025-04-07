import React, { useEffect } from "react";

import { Icon } from "../../../Miscellaneous/Icon";
import { AlertHeaderProps } from "../types";

export const AlertHeader = ({ header, onClose, disableCloseOnEscape }: AlertHeaderProps) => {
  useEffect(() => {
    if (disableCloseOnEscape) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (onClose && event.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (disableCloseOnEscape) {
        return;
      }

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [disableCloseOnEscape]);

  return (
    <div className="m-alert-header">
      {header && <h4>{header}</h4>}
      <Icon onClick={onClose} icon={["fas", "xmark"]} />
    </div>
  );
};
