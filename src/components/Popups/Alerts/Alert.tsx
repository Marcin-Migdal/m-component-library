import React, { ForwardedRef, PropsWithChildren, forwardRef } from "react";

import { AlertBody } from "./components/AlertBody";
import { AlertFooter, AlertFooterProps } from "./components/AlertFooter";
import { AlertHeader, AlertHeaderProps } from "./components/AlertHeader";
import { AlertHandler, useAlertOpen } from "./hooks/useAlertOpen";

export type AlertProps = {
    className?: string;
    header?: Omit<AlertHeaderProps, "onClose">;
    footer?: AlertFooterProps;
};

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

type AlertForwardRef = (props: PropsWithChildren<AlertProps> & { ref?: React.ForwardedRef<AlertHandler> }) => ReturnType<typeof Alert>;

export default forwardRef(Alert) as AlertForwardRef;
