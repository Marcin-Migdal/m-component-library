import React, { useEffect } from "react";

import { Icon } from "../../../Miscellaneous/Icon";
import { AlertFooterProps } from "../types";

export function AlertFooter<TData = undefined>({
  data,
  confirmBtnText = "Confirm",
  confirmBtnDisabled = false,
  confirmBtnBusy = false,
  disableConfirmOnEnter = false,
  onConfirm,
  declineBtnText = "Close",
  declineBtnDisabled = false,
  onDecline,
}: AlertFooterProps<TData>) {
  useEffect(() => {
    if (disableConfirmOnEnter) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (onConfirm && event.code === "Enter") {
        onConfirm(data as unknown as TData);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (disableConfirmOnEnter) {
        return;
      }

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!onConfirm && !onDecline) {
    return null;
  }

  return (
    <div className="m-alert-footer">
      {onConfirm && (
        <button
          disabled={confirmBtnDisabled || confirmBtnBusy}
          onClick={() => onConfirm(data as unknown as TData)}
          className="m-alert-confirm-button"
        >
          {confirmBtnBusy && (
            <Icon icon={["fas", "circle-notch"]} className="fa-spin m-alert-confirm-button-busy-icon" />
          )}
          {confirmBtnText}
        </button>
      )}
      {onDecline && (
        <button
          disabled={declineBtnDisabled}
          onClick={() => onDecline(data as unknown as TData)}
          className="m-alert-decline-button"
        >
          {declineBtnText}
        </button>
      )}
    </div>
  );
}
