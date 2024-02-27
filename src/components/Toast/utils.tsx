import React from "react";

import { FailureIcon, SuccessIcon, WarningIcon } from "./components/icons";
import { ToastConfigType, VariantTypes } from "./toasts-interfaces";

export const defaultToastConfig: ToastConfigType<VariantTypes> = {
    success: { icon: <SuccessIcon />, default: true, variant: "success", title: "Success" },
    failure: { icon: <FailureIcon />, default: false, variant: "failure", title: "Failure" },
    warning: { icon: <WarningIcon />, default: false, variant: "warning", title: "Warning" },
    information: { icon: <WarningIcon />, default: false, variant: "information", title: "Information" },
};

export const getDefaultToastType = (toastConfig: ToastConfigType<string>) => {
    return Object.keys(toastConfig).find((key) => toastConfig[key].default) || "toast_type_not_found";
};
