import React, { PropsWithChildren } from "react";

import Overlay from "../../../Miscellaneous/Overlay";
import { AlertState } from "../hooks/useAlertOpen";

import "../Alert.css";

type AlertBodyProps = {
    className?: string;
    alertOpen: AlertState;
    onClose: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

export const AlertBody = ({ children, className = "", alertOpen, onClose }: PropsWithChildren<AlertBodyProps>) => {
    if (alertOpen === AlertState.CLOSED) return null;

    return (
        <Overlay onClick={onClose}>
            <div className={`m-alert ${alertOpen} ${className}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </Overlay>
    );
};
