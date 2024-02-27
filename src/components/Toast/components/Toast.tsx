import React from "react";

import { IToast } from "../toasts-interfaces";
import { CloseIcon } from "./icons";

export interface IToastProps {
    onClose: (e: any) => void;
    onMouseEnter: (toastId: number) => void;
    onMouseLeave: (toast: IToast) => void;
    toast: IToast;
}

export const Toast = ({ toast, onClose, onMouseEnter, onMouseLeave }: IToastProps) => {
    const { variant, title, message, id, icon } = toast;

    return (
        <div className={`toast ${variant}`} onMouseEnter={() => onMouseEnter(toast.id)} onMouseLeave={() => onMouseLeave(toast)}>
            {icon}
            <div className="text-content">
                <p>{title}</p>
                {message && <span>{message}</span>}
            </div>
            <CloseIcon onClick={() => onClose(id)} />
        </div>
    );
};
