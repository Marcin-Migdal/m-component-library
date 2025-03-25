import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { Overlay } from "../../../Miscellaneous/Overlay";
import { AlertBodyProps, AlertOpenState } from "../types";

import "../Alert.scss";

export const AlertBody = ({
  children,
  className,
  alertOpen,
  onClose,
  overlayConfig,
}: PropsWithChildren<AlertBodyProps>) => {
  if (alertOpen === AlertOpenState.CLOSED) {
    return null;
  }

  return (
    <Overlay {...overlayConfig} onClick={onClose} onClose={onClose} disableCloseOnEscape>
      <div className={classNames("m-alert", alertOpen, className)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Overlay>
  );
};
