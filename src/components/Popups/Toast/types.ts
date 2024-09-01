import { ReactNode } from "react";

//! TOASTS CONTAINER COMPONENTS
export type ToastsContainerProps<T = ToastVariant> = ToastsContainerBaseProps &
    (T extends ToastVariant
        ? { toastConfig?: ToastConfig<ToastVariant> }
        : { toastConfig: T extends string ? ToastConfig<T> : ToastConfig<string> });

export type ToastHandler<T = ToastVariant> = {
    addToast: (payload: AddToastPayload<T>) => void;
    clear: () => void;
};

export type ToastsPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type ToastVariant = "success" | "failure" | "warning" | "information";

export type AddToastPayload<T> = {
    message: string;
    type?: T;
    title?: string;
    toastDuration?: number;
    transformContent?: (content: string) => string;
};

export type ToastsContainerBaseProps = {
    autoClose?: boolean;
    toastsPosition?: ToastsPosition;
    transformContent?: (content: string) => string;
};

export type ToastConfig<T extends string> = Record<T, { default: boolean; icon: ReactNode; variant: ToastVariant; title: string }>;

//! TOASTS COMPONENTS
export type ToastProps = {
    onClose: (e: any) => void;
    onMouseEnter: (toastId: number) => void;
    onMouseLeave: (toast: ToastType) => void;
    toast: ToastType;
};

export type ToastType = {
    message: string;
    variant: ToastVariant;
    title: string;
    id: number;
    toastDuration: number;
    icon: ReactNode;
};

//! CLOSE ICON
export type CloseIconProps = {
    onClick: (e: any) => void;
};
