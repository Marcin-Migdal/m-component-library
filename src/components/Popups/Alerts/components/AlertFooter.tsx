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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        if (confirmBtnBusy || confirmBtnDisabled || disableConfirmOnEnter) {
          return;
        }

        if (onConfirm) {
          event.preventDefault();
          event.stopPropagation();
          onConfirm(data as unknown as TData);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [disableConfirmOnEnter, onConfirm, data, confirmBtnBusy, confirmBtnDisabled]);

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
