import React from "react";

import { FailureIcon, SuccessIcon, WarningIcon } from "./components/icons";
import { ToastConfig, ToastVariant } from "./types";

export const defaultToastConfig: ToastConfig<ToastVariant> = {
  success: { icon: <SuccessIcon />, default: true, variant: "success", title: "Success" },
  failure: { icon: <FailureIcon />, default: false, variant: "failure", title: "Failure" },
  warning: { icon: <WarningIcon />, default: false, variant: "warning", title: "Warning" },
  information: { icon: <WarningIcon />, default: false, variant: "information", title: "Information" },
};

export const getDefaultToastType = (toastConfig: ToastConfig<string>) => {
  return Object.keys(toastConfig).find((key) => toastConfig[key].default) || "toast_type_not_found";
};
