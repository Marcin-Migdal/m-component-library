import React, { ForwardedRef, PropsWithChildren, forwardRef } from "react";

import { AlertBody } from "./components/AlertBody";
import { AlertFooter } from "./components/AlertFooter";
import { AlertHeader } from "./components/AlertHeader";
import { useAlertOpen } from "./hooks/useAlertOpen";
import { AlertHandler, AlertProps } from "./types";

const Alert = <T,>(
  { children, className, header: headerProps, footer: footerProps }: PropsWithChildren<AlertProps<T>>,
  ref: ForwardedRef<AlertHandler<T>>
) => {
  const { alertOpen, data, handleClose } = useAlertOpen({ ref });

  return (
    <AlertBody className={className} alertOpen={alertOpen} onClose={handleClose}>
      <AlertHeader onClose={handleClose} {...headerProps} />
      <div className="m-alert-content">{children}</div>
      <AlertFooter {...footerProps} data={data as T} />
    </AlertBody>
  );
};

export type AlertForwardRef = <T>(
  props: PropsWithChildren<AlertProps<T>> & { ref?: React.ForwardedRef<AlertHandler<T>> }
) => ReturnType<typeof Alert>;

export default forwardRef(Alert) as AlertForwardRef;
