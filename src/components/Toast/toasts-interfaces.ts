//* TOAST COMPONENTS

//! TOASTS LIST COMPONENTS
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
