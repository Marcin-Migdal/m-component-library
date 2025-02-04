import classNames from "classnames";
import React from "react";

import { ToastProps } from "../types";
import { CloseIcon } from "./icons";

export const Toast = ({ toast, onClose, onMouseEnter, onMouseLeave }: ToastProps) => {
  const { variant, title, message, id, icon } = toast;

  return (
    <div
      className={classNames("toast", variant)}
      onMouseEnter={() => onMouseEnter(toast.id)}
      onMouseLeave={() => onMouseLeave(toast)}
    >
      {icon}
      <div className="text-content">
        <p className="toast-title">{title}</p>
        {message && <span className="toast-message">{message}</span>}
      </div>
      <CloseIcon onClick={() => onClose(id)} />
    </div>
  );
};
