import React from "react";

import { FailureIcon, SuccessIcon, WarningIcon } from "./components/icons";
import { ToastConfigType, ToastTypes } from "./toasts-interfaces";

export const defaultToastConfig: ToastConfigType<ToastTypes> = {
    success: { icon: <SuccessIcon />, default: true, type: "success" },
    failure: { icon: <FailureIcon />, default: false, type: "failure" },
    warning: { icon: <WarningIcon />, default: false, type: "warning" },
    information: { icon: <WarningIcon />, default: false, type: "information" },
};

export const getDefaultToastType = (toastConfig: ToastConfigType<string>) => {
    return Object.keys(toastConfig).find((key) => toastConfig[key].default) || "toast_type_not_found";
};
