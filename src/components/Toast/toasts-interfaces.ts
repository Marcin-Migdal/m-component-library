//* TOAST COMPONENTS

//! TOASTS LIST COMPONENTS
export type ToastsPositionTypes = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type ToastTypes = "success" | "failure" | "warning" | "information";

export interface IToast {
    title: TextType;
    message: TextType;
    type: ToastTypes;
    id: number;
}

export interface IToastProps {
    onClose: (e: any) => void;
    toast: IToast;
}

export type TextType = String | undefined;

//! ICON
export interface ICloseIconProps {
    onClick: (e: any) => void;
}
