import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

import { IAddToastPayload, IToast, IToastPropsBase, ToastConfigType, VariantTypes } from "./toasts-interfaces";
import { defaultToastConfig, getDefaultToastType } from "./utils";
import { Toast } from "./components/Toast";

import "./Toasts.css";

type IToastProps<T = VariantTypes> = IToastPropsBase &
    (T extends VariantTypes
        ? { toastConfig?: ToastConfigType<VariantTypes> }
        : { toastConfig: T extends string ? ToastConfigType<T> : ToastConfigType<string> });

export type ToastHandler<T = VariantTypes> = {
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
            let toastType: string = payload.type ? payload.type : getDefaultToastType(toastConfig);

            const { title: defaultTitle, variant, icon } = toastConfig[toastType];
            const { message, title, toastDuration = 2000 } = payload;

            const newToast: IToast = { message, variant: variant, title: title || defaultTitle, id: Date.now(), icon: icon, toastDuration };
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

    const handleMouseHover = (toastId: number) => clearTimeout(timeoutRefs.current[toastId]);

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
