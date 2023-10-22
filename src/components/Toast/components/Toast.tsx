import React, { ReactNode } from "react";

import { CloseIcon, FailureIcon, SuccessIcon, WarningIcon } from "./icons";
import { IToastProps, ToastTypes } from "../toasts-interfaces";

const iconMap: Record<ToastTypes, ReactNode> = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
    information: <WarningIcon />,
};

export const Toast = ({ toast, onClose }: IToastProps) => {
    const { type, title, message, id } = toast;

    return (
        <div className={`toast ${type}`}>
            {iconMap[toast.type]}
            <div className="text-content">
                <p>{title}</p>
                {message && <span>{message}</span>}
            </div>
            <CloseIcon onClick={() => onClose(id)} />
        </div>
    );
};
