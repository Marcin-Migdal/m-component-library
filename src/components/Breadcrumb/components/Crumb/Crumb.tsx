import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useLayoutEffect, useRef, useState } from "react";

import { PrimaryPlacement } from "../../../../utils";
import { Tooltip } from "../../../Miscellaneous";
import { CrumbType } from "../../types";

import "./Crumb.scss";

type CrumbProps = {
  crumb: CrumbType;
  zIndex: number;
  onClick?: (crumb: CrumbType) => void;
  hiddenCrumb?: boolean;
};

export const Crumb = ({ zIndex, crumb, onClick, hiddenCrumb = false }: CrumbProps) => {
  const { disabled, icon, label } = crumb;

  const [showTooltip, setShowTooltip] = useState(false);
  ``;
  const targetRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const targetElement = targetRef.current;

    if (!targetElement) {
      return;
    }

    const checkForClippedText = (parentElement: HTMLDivElement) => {
      const element = parentElement.querySelector(".m-crumb-label");

      if (element === null) {
        return setShowTooltip(false);
      }

      setShowTooltip(element.scrollWidth > element.clientWidth);
    };

    const resizeObserver = new ResizeObserver(() => {
      checkForClippedText(targetElement);
    });

    resizeObserver.observe(targetElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={targetRef}
        style={{ zIndex }}
        className={classNames("m-crumb", {
          disabled,
          "hidden-crumb": hiddenCrumb,
        })}
        onClick={() => onClick && !disabled && onClick(crumb)}
      >
        {icon && <FontAwesomeIcon className="m-crumb-icon" icon={icon} />}
        <a className="m-crumb-label">{label}</a>
      </div>
      {showTooltip && (
        <Tooltip openDelay={100} targetRef={targetRef} primaryPlacement={PrimaryPlacement.BOTTOM}>
          {label}
        </Tooltip>
      )}
    </>
  );
};
