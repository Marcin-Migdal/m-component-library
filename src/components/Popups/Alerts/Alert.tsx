import React, { ForwardedRef, PropsWithChildren, forwardRef } from "react";

import { AlertBody } from "./components/AlertBody";
import { AlertFooter } from "./components/AlertFooter";
import { AlertHeader } from "./components/AlertHeader";
import { useAlertOpen } from "./hooks/useAlertOpen";
import { AlertHandler, AlertProps } from "./types";

const Alert = (
    { children, className, header: headerProps, footer: footerProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<AlertHandler>
) => {
    const { alertOpen, handleClose } = useAlertOpen({ ref });

    return (
        <AlertBody className={className} alertOpen={alertOpen} onClose={handleClose}>
            <AlertHeader onClose={handleClose} {...headerProps} />
            <div className="m-alert-content">{children}</div>
            <AlertFooter {...footerProps} />
        </AlertBody>
    );
};

export type AlertForwardRef = (
    props: PropsWithChildren<AlertProps> & { ref?: React.ForwardedRef<AlertHandler> }
) => ReturnType<typeof Alert>;

export default forwardRef(Alert) as AlertForwardRef;
