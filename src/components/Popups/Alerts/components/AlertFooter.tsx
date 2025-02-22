import React from "react";

import { AlertFooterProps } from "../types";

export function AlertFooter<TData = undefined>({
  data,
  confirmBtnText = "Confirm",
  confirmBtnDisabled = false,
  onConfirm,
  declineBtnText = "Close",
  declineBtnDisabled = false,
  onDecline,
}: AlertFooterProps<TData>) {
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
