import React from "react";

import { AlertFooterProps } from "../types";

export const AlertFooter = <T,>({
    confirmBtnText = "Confirm",
    confirmBtnDisabled = false,
    onConfirmBtnClick,
    declineBtnText = "Close",
    declineBtnDisabled = false,
    onDeclineBtnClick,
    data,
}: AlertFooterProps<T>) => {
    if (!onConfirmBtnClick && !onDeclineBtnClick) {
        return null;
    }

    return (
        <div className="m-alert-footer">
            {onConfirmBtnClick && (
                <button disabled={confirmBtnDisabled} onClick={() => onConfirmBtnClick(data)} className="m-alert-confirm-button">
                    {confirmBtnText}
                </button>
            )}
            {onDeclineBtnClick && (
                <button disabled={declineBtnDisabled} onClick={() => onDeclineBtnClick(data)} className="m-alert-decline-button">
                    {declineBtnText}
                </button>
            )}
        </div>
    );
};
