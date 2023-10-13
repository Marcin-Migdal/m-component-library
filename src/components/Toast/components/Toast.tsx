import React, { ReactNode } from "react";

import { CloseIcon, FailureIcon, SuccessIcon, WarningIcon } from "./icons";
import { IToastProps, ToastTypes } from "../toasts-interfaces";

const iconMap: Record<ToastTypes, ReactNode> = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
};

export const Toast = ({ toast, onClose }: IToastProps) => {
    const { type, message, id } = toast;

    return (
        <div className={`toast ${type}`}>
            {iconMap[toast.type]}
            {message && <span>{message}</span>}
            <CloseIcon onClick={() => onClose(id)} />
        </div>
    );
};
