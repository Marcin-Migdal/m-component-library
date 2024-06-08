//* TOAST COMPONENTS

import { ReactNode } from "react";

//! TOASTS LIST COMPONENTS
export type ToastsPositionTypes = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type VariantTypes = "success" | "failure" | "warning" | "information";

export interface IAddToastPayload<T> {
    message: TextType;
    type?: T;
    title?: string;
    toastDuration?: number;
}

export type IToastPropsBase = {
    autoClose?: boolean;
    toastsPosition?: ToastsPositionTypes;
};

export type ToastConfigType<T extends string> = Record<T, { default: boolean; icon: ReactNode; variant: VariantTypes; title: string }>;

//! TOASTS COMPONENTS
export interface IToast {
    message: TextType;
    variant: VariantTypes;
    title: TextType;
    id: number;
    toastDuration: number;
    icon: ReactNode;
}

export type TextType = String;
