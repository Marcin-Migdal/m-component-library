import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

import { IAddToastPayload, IToast, IToastPropsBase, ToastConfigType, ToastTypes } from "./toasts-interfaces";
import { defaultToastConfig, getDefaultToastType } from "./utils";
import { Toast } from "./components/Toast";

import "./Toasts.css";

type IToastProps<T = ToastTypes> = IToastPropsBase &
    (T extends ToastTypes
        ? { toastConfig?: ToastConfigType<ToastTypes> }
        : { toastConfig: T extends string ? ToastConfigType<T> : ToastConfigType<string> });

export type ToastHandler<T = ToastTypes> = {
    addToast: (payload: IAddToastPayload<T>) => void;
    clear: () => void;
};

function ToastsContainer<T extends string>(
    { autoClose = true, toastsPosition = "top-right", toastConfig = defaultToastConfig }: IToastProps<T>,
    ref: ForwardedRef<ToastHandler<T>>
) {
    const timeoutRefs = useRef<Record<number, NodeJS.Timeout>>({});

    const [toasts, setToasts] = useState<IToast[]>([]);

    useImperativeHandle(ref, () => ({
        addToast: (payload) => {
            const { message, type = getDefaultToastType(toastConfig), title = type, toastDuration = 2000 } = payload;

            const newToast: IToast = {
                message,
                type: toastConfig[type].type,
                title,
                id: Date.now(),
                icon: toastConfig[type]?.icon,
                toastDuration,
            };

            setToasts((prevState) => [...prevState, newToast]);

            handleToastAutoClose(newToast);
        },
        clear: () => {
            setToasts([]);
            Object.values(timeoutRefs.current).forEach(clearTimeout);
            timeoutRefs.current = {};
        },
    }));

    const handleCloseToast = (toastId: number) => setToasts((prevState) => prevState.filter((toast) => toast.id != toastId));

    const handleMouseHover = (toast: IToast) => {
        clearTimeout(timeoutRefs.current[toast.id]);
    };

    const handleToastAutoClose = (toast: IToast) => {
        if (autoClose) {
            timeoutRefs.current[toast.id] = setTimeout(() => {
                handleCloseToast(toast.id);
            }, toast.toastDuration);
        }
    };

    return (
        <div className={`toasts-list ${toastsPosition}`}>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    onClose={handleCloseToast}
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={handleToastAutoClose}
                />
            ))}
        </div>
    );
}

type ToastsContainerForwardRefType = <T extends string>(
    props: IToastProps<T> & { ref?: React.ForwardedRef<ToastHandler<T>> }
) => ReturnType<typeof ToastsContainer>;

export default forwardRef(ToastsContainer) as ToastsContainerForwardRefType;
