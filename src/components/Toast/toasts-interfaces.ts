import { MouseEvent, MouseEventHandler } from "react";

//! TOAST COMPONENTS

//! TOASTS LIST COMPONENTS
export type ToastTypes = "success" | "failure" | "warning";

export interface IToast {
    message: MessageType;
    type: ToastTypes;
    id: number;
}

export interface IToastProps {
    onClose: (e: any) => void;
    toast: IToast;
}

export type MessageType = String | undefined;

//! ICON
export interface ICloseIconProps {
    onClick: (e: any) => void;
}
