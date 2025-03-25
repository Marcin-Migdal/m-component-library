import React, { useEffect } from "react";

import { AlertFooterProps } from "../types";

export function AlertFooter<TData = undefined>({
  data,
  confirmBtnText = "Confirm",
  confirmBtnDisabled = false,
  disableConfirmOnEnter = false,
  onConfirm,
  declineBtnText = "Close",
  declineBtnDisabled = false,
  onDecline,
}: AlertFooterProps<TData>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (onConfirm && event.code === "Enter" && !disableConfirmOnEnter) {
        onConfirm(data as unknown as TData);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
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
          disabled={confirmBtnDisabled}
          onClick={() => onConfirm(data as unknown as TData)}
          className="m-alert-confirm-button"
        >
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
