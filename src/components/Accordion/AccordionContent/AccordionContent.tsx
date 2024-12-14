import classNames from "classnames";
import React, { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

import { useAccordion, useAccordionSection } from "../hooks";
import { AccordionContentProps } from "./types";

import "./AccordionContent.css";

export const AccordionContent: React.FC<PropsWithChildren<AccordionContentProps>> = ({
  children,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { instanceClassName, expandAnimation } = useAccordion();
  const { isExpanded } = useAccordionSection();

  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const height = element.getBoundingClientRect().height;

      contentHeight !== height && setContentHeight(height);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  if (expandAnimation === "instant" && !isExpanded) {
    return null;
  }

  return (
    <div
      className={classNames("m-accordion-content-wrapper", isExpanded ? "expanded" : "collapsed", {
        [`${instanceClassName}-content-wrapper`]: !!instanceClassName,
      })}
      style={{
        //@ts-expect-error ts(2353) styles attribute does not expect css variable
        "--content-height": `${contentHeight}px`,
      }}
    >
      <div
        style={style}
        ref={ref}
        className={classNames("m-accordion-content", className, {
          [`${instanceClassName}-content`]: !!instanceClassName,
        })}
      >
        {children}
      </div>
    </div>
  );
};
