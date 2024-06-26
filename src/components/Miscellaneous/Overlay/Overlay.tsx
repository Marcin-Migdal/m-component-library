import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Overlay.css";

export type OverlayProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

const Overlay = ({ children, onClick }: PropsWithChildren<OverlayProps>) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (overlayRef.current) overlayRef.current.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Tab" || event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        event.stopPropagation();

        onClick && onClick(event);
    };

    return createPortal(
        <div tabIndex={0} ref={overlayRef} onClick={handleClick} className="m-overlay">
            {children}
        </div>,
        document.getElementById("wrapper-root") as HTMLElement
    );
};

export default Overlay;
