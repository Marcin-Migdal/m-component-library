import React, { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { getPosition } from "../../../helpers";
import { Placement } from "../../../helpers/getPosition/getPosition-types";
import { TooltipContent } from "./TooltipContent/TooltipContent";
import { TargetElementType, TooltipProps } from "./types";

import "./Tooltip.css";

const TooltipWrapper = ({
  targetRef,
  children,
  className = "",
  style = {},
  placement = Placement.BOTTOM,
  openDelay = 0,
}: PropsWithChildren<TooltipProps>) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties | undefined>(undefined);

  useEffect(() => {
    //! EVENT LISTENER SECTION
    const targetElement: TargetElementType | null = targetRef.current;
    const tooltipElement: HTMLDivElement | null = tooltipRef.current;

    if (!targetElement) {
      return;
    }

    const handleMouseEnter = (event: Event) => {
      if (isVisible) {
        return;
      }

      if (targetElement === event.target || targetElement.contains(event.target as Node)) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          timeoutRef.current = undefined;
        }, openDelay);
      }
    };

    const handleMouseLeave = (event: PointerEvent) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      } else if (isVisible && !targetElement.contains(event.relatedTarget as Node)) {
        setIsVisible(false);
        setTooltipStyle(undefined);
      }
    };

    // adds event listener on init and refreshes them when isVisible changes
    const onInit = () => {
      targetElement.addEventListener("pointerover", handleMouseEnter);
      targetElement.addEventListener("pointerout", (event) => handleMouseLeave(event as PointerEvent));
    };

    onInit();

    //! TOOLTIP POSITION SECTION
    // changes tooltip style
    const changeTooltipStyle = () => {
      // only when tooltip is visible and its ref is not undefined

      if (tooltipElement) {
        // calculates tooltip position using refs and returns it as a style
        setTooltipStyle({
          ...getPosition(targetElement, tooltipRef.current, {
            placement,
            centerConsumer: true,
          }),
          ...style,
        });
      }
    };

    changeTooltipStyle();

    return () => {
      targetElement.removeEventListener("pointerover", handleMouseEnter);
      targetElement.removeEventListener("pointerout", (event) => handleMouseLeave(event as PointerEvent));
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <TooltipContent tooltipRef={tooltipRef} style={tooltipStyle} className={className}>
      {children}
    </TooltipContent>,
    document.body
  );
};

export default TooltipWrapper;
