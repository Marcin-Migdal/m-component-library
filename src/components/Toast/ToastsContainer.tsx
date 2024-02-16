import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

import { IToast, TextType, ToastTypes, ToastsPositionTypes } from "./toasts-interfaces";
import { Toast } from "./components/Toast";

import "./Toasts.css";

interface IToastProps {
    autoClose?: boolean;
    toastsPosition?: ToastsPositionTypes;
}

export type ToastHandler = {
    addToast: (type: ToastTypes, message: TextType) => void;
    clear: () => void;
};

const ToastsContainer = ({ autoClose = true, toastsPosition = "top-right" }: IToastProps, ref: ForwardedRef<ToastHandler>) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    useImperativeHandle(ref, () => ({
        addToast: (type: ToastTypes, message: TextType = undefined, toastDuration: number = 1500) => {
            const newToast: IToast = { title: type, message: message, type: type, id: Date.now() };

            setToasts((prevState) => [...prevState, newToast]);

            if (autoClose) {
                setTimeout(() => {
                    handleCloseToast(newToast.id);
                }, toastDuration);
            }
        },
        clear: () => {
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
