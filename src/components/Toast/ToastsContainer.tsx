import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

import { IToast, TextType, ToastTypes } from "./toasts-interfaces";
import { Toast } from "./components/Toast";

import "./Toasts.css";

export type ToastsPositionTypes = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface IToastProps {
    autoClose?: boolean;
    toastsPosition?: ToastsPositionTypes;
}

export type ToastHandler = {
    handleAddToast: (type: ToastTypes, message: TextType) => void;
    handleClear: () => void;
};

const ToastsContainer = ({ autoClose = true, toastsPosition = "top-right" }: IToastProps, ref: ForwardedRef<ToastHandler>) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    useImperativeHandle(ref, () => ({
        handleAddToast: (type: ToastTypes, message: TextType = undefined, toastDuration: number = 1500) => {
            const newToast: IToast = { title: type, message: message, type: type, id: Date.now() };

            setToasts((prevState) => [...prevState, newToast]);

            if (autoClose) {
                setTimeout(() => {
                    handleCloseToast(newToast.id);
                }, toastDuration);
            }
        },
        handleClear: () => {
            setToasts([]);
        },
    }));

    const handleCloseToast = (toastId: number) => setToasts((prevState) => prevState.filter((toast) => toast.id != toastId));

    return (
        <div className={`toasts-list ${toastsPosition}`}>
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} onClose={handleCloseToast} />
            ))}
        </div>
    );
};

export default forwardRef(ToastsContainer);
