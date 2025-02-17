import React from "react";

import { AlertFooterProps } from "../types";

export const AlertFooter = ({
  confirmBtnText = "Confirm",
  confirmBtnDisabled = false,
  onConfirm,
  declineBtnText = "Close",
  declineBtnDisabled = false,
  onDecline,
}: AlertFooterProps) => {
  if (!onConfirm && !onDecline) {
    return null;
  }

  return (
    <div className="m-alert-footer">
      {onConfirm && (
        <button disabled={confirmBtnDisabled} onClick={onConfirm} className="m-alert-confirm-button">
          {confirmBtnText}
        </button>
      )}
      {onDecline && (
        <button disabled={declineBtnDisabled} onClick={onDecline} className="m-alert-decline-button">
          {declineBtnText}
        </button>
      )}
    </div>
  );
};
