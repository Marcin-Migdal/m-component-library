import React from "react";

import { AlertFooterProps } from "../types";

export const AlertFooter = ({
    confirmBtnText = "Confirm",
    confirmBtnDisabled = false,
    onConfirmBtnClick,
    declineBtnText = "Close",
    declineBtnDisabled = false,
    onDeclineBtnClick,
}: AlertFooterProps) => {
    if (!onConfirmBtnClick && !onDeclineBtnClick) return null;

    return (
        <div className="m-alert-footer">
            {onConfirmBtnClick && (
                <button disabled={confirmBtnDisabled} onClick={onConfirmBtnClick} className="m-alert-confirm-button">
                    {confirmBtnText}
                </button>
            )}
            {onDeclineBtnClick && (
                <button disabled={declineBtnDisabled} onClick={onDeclineBtnClick} className="m-alert-decline-button">
                    {declineBtnText}
                </button>
            )}
        </div>
    );
};
