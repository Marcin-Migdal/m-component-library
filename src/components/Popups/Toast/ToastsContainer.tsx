import classNames from "classnames";
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Toast } from "./components/Toast";
import { ToastConfig, ToastHandler, ToastsContainerProps, ToastType } from "./types";
import { defaultToastConfig, getDefaultToastType } from "./utils";

import "./Toasts.scss";

function ToastsContainer<T extends string>(
  {
    autoClose = true,
    toastsPosition = "top-right",
    toastConfig = defaultToastConfig,
    transformContent: transformToastsContent,
    toastsDuration = 2000,
  }: ToastsContainerProps<T>,
  ref: ForwardedRef<ToastHandler<T>>
) {
  const timeoutRefs = useRef<Record<number, NodeJS.Timeout>>({});

  const [toasts, setToasts] = useState<ToastType[]>([]);

  const handleCloseToast = (toastId: number) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== toastId));
  };

  const handleToastAutoClose = (toast: ToastType) => {
    if (autoClose) {
      timeoutRefs.current[toast.id] = setTimeout(() => {
        handleCloseToast(toast.id);
      }, toast.toastDuration);
    }
  };

  useImperativeHandle(ref, () => ({
    addToast: (payload) => {
      const toastType: string = payload.type ? payload.type : getDefaultToastType(toastConfig);

      const { title: defaultTitle, icon, variant } = (toastConfig as ToastConfig<string>)[toastType];
      const {
        toastDuration = toastsDuration,
        transformContent: transformSingleToastContent,
        disableTransformContent,
      } = payload;

      const newToast: ToastType = {
        id: Date.now(),
        title: payload.title || defaultTitle,
        message: payload.message,
        variant: variant,
        icon,
        toastDuration,
      };

      const transformToastContent = transformSingleToastContent || transformToastsContent;

      if (!disableTransformContent && transformToastContent) {
        newToast.title = transformToastContent(payload.title || defaultTitle, "title");
        newToast.message = transformToastContent(payload.message, "message");
      }

      setToasts((prevState) => [...prevState, newToast]);

      handleToastAutoClose(newToast);
    },
    clear: () => {
      setToasts([]);
      Object.values(timeoutRefs.current).forEach(clearTimeout);
      timeoutRefs.current = {};
    },
  }));

  const handleMouseHover = (toastId: number) => clearTimeout(timeoutRefs.current[toastId]);

  return (
    <div className={classNames("toasts-list", "m-scroll", "slim-scroll", toastsPosition)}>
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
