import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ITooltipProps, TargetElementType } from "./Tooltip-interfaces";
import { generateTooltipStyle } from "./internal-helpers";

import "./Tooltip.css";

const TooltipWrapper = ({
    targetRef,
    children,
    position = "bottom",
    className = "",
    style = {},
    autoFixPosition = false,
    openDelay = 0,
    tooltipMargin = 6,
    maxWidth = 150,
}: ITooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [tooltipStyle, setTooltipStyle] = useState<CSSProperties | undefined>(undefined);

    useEffect(() => {
        //! EVENT LISTENER SECTION
        const targetElement: TargetElementType | null = targetRef.current;
        const tooltipElement: HTMLDivElement | null = tooltipRef.current;
        let timeoutId: NodeJS.Timeout | undefined = undefined;

        if (!targetElement) return;

        const handleMouseEnter = () => {
            timeoutId = setTimeout(() => {
                setIsVisible(true);
            }, openDelay);
        };

        const handleMouseLeave = () => {
            if (timeoutId) clearTimeout(timeoutId);
            else if (isVisible) {
                setIsVisible(false);
                setTooltipStyle(undefined);
            }
        };

        // adds event listener on init and refreshes them when isVisible changes
        const onInit = () => {
            targetElement.addEventListener("pointerover", handleMouseEnter);
            targetElement.addEventListener("pointerout", handleMouseLeave);
        };

        onInit();

        //! TOOLTIP POSITION SECTION
        // changes tooltip style
        const changeTooltipStyle = (targetElement: TargetElementType, tooltipElement: HTMLDivElement | null) => {
            // only when tooltip is visible and its ref is not undefined

            if (tooltipElement) {
                // calculates tooltip position using refs and returns it as a style
                const _tooltipStyle = generateTooltipStyle(
                    targetElement,
                    tooltipElement,
                    position,
                    autoFixPosition,
                    tooltipMargin,
                    maxWidth
                );

                setTooltipStyle({ ..._tooltipStyle, ...style });
            }
        };

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
