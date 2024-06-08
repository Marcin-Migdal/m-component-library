import React, { PropsWithChildren } from "react";

import Overlay from "../../../Miscellaneous/Overlay";
import { AlertBodyProps, AlertState } from "../types";

import "../Alert.css";

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
