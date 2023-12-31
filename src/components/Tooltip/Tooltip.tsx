import React, { CSSProperties, ReactNode, useEffect, useRef, useState, RefObject } from "react";
import { createPortal } from "react-dom";

import { generateTooltipStyle } from "./internal-helpers";

import "./Tooltip.css";

export type TooltipPositionTypes = "top" | "right" | "bottom" | "left";

interface ITooltipProps {
    targetRef: RefObject<HTMLElement>;
    children: ReactNode;
    className?: string;
    position?: TooltipPositionTypes;
    style?: CSSProperties;
}

// TODO! auto positions, flips tooltip position if tooltip does not fit
// TODO! open delay
// TODO! not closing tooltip if cursor is over it
// TODO! passing tooltipMargin via props
// TODO! changing all uses of Tooltip in this project

const TooltipWrapper = ({ targetRef, children, position = "bottom", className = "", style = {} }: ITooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [tooltipStyle, setTooltipStyle] = useState<CSSProperties | undefined>(undefined);

    useEffect(() => {
        const targetElement: HTMLElement | null = targetRef.current;
        const tooltipElement: HTMLDivElement | null = tooltipRef.current;

        if (!targetElement) return;

        const handleMouseEnter = () => setIsVisible(true);

        const handleMouseLeave = () => {
            if (isVisible) {
                setIsVisible(false);
                setTooltipStyle(undefined);
            }
        };

        // adds event listener on init and refreshes them when isVisible changes
        const onInit = () => {
            targetElement.addEventListener("pointerover", handleMouseEnter);
            targetElement.addEventListener("pointerout", handleMouseLeave);
        };

        // changes tooltip style
        const changeTooltipStyle = (targetElement: HTMLElement, tooltipElement: HTMLDivElement | null) => {
            // only when tooltip is visible and its ref is not undefined
            if (isVisible && tooltipElement) {
                // calculates tooltip position using refs and returns it as a style
                const _tooltipStyle = generateTooltipStyle(targetElement, tooltipElement, position);
                setTooltipStyle({ ..._tooltipStyle, ...style });
            }
        };

        onInit();
        changeTooltipStyle(targetElement, tooltipElement);

        return () => {
            targetElement.removeEventListener("pointerover", handleMouseEnter);
            targetElement.removeEventListener("pointerout", handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <>
            {isVisible &&
                createPortal(
                    <TooltipContent tooltipRef={tooltipRef} style={tooltipStyle} className={className} children={children} />,
                    document.body
                )}
        </>
    );
};

export default TooltipWrapper;

const TooltipContent = ({ style, tooltipRef, children, className }: any) => {
    return (
        <div ref={tooltipRef} className={`tooltip ${className}`} style={style}>
            {children}
        </div>
    );
};
