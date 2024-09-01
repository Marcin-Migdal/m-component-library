import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Toast } from "./components/Toast";
import { ToastConfig, ToastHandler, ToastsContainerProps, ToastType } from "./types";
import { defaultToastConfig, getDefaultToastType } from "./utils";

import "./Toasts.css";

function ToastsContainer<T extends string>(props: ToastsContainerProps<T>, ref: ForwardedRef<ToastHandler<T>>) {
    const { autoClose = true, toastsPosition = "top-right", toastConfig = defaultToastConfig, transformContent } = props;

    const timeoutRefs = useRef<Record<number, NodeJS.Timeout>>({});

    const [toasts, setToasts] = useState<ToastType[]>([]);

    useImperativeHandle(ref, () => ({
        addToast: (payload) => {
            let toastType: string = payload.type ? payload.type : getDefaultToastType(toastConfig);

            const { title: defaultTitle, variant, icon } = (toastConfig as ToastConfig<string>)[toastType];
            const { toastDuration = 2000, transformContent: transformSingularContent } = payload;

            let message = payload.message;
            let title = payload.title || defaultTitle;

            if (transformSingularContent) {
                message = transformSingularContent(message);
                title = transformSingularContent(title);
            } else if (transformContent) {
                message = transformContent(message);
                title = transformContent(title);
            }

            const newToast: ToastType = { message, variant, title, id: Date.now(), icon, toastDuration };
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

    const handleToastAutoClose = (toast: ToastType) => {
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
    props: ToastsContainerProps<T> & { ref?: React.ForwardedRef<ToastHandler<T>> }
) => ReturnType<typeof ToastsContainer>;

export default forwardRef(ToastsContainer) as ToastsContainerForwardRefType;
