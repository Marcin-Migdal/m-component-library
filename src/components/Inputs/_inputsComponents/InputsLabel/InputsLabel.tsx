import classNames from "classnames";
import React, { CSSProperties, useLayoutEffect, useMemo, useRef, useState } from "react";

import { InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../../../global-types";

import "./InputsLabel.css";

type InputsLabelProps = {
  label: string;
  labelType: `${InputLabel}` | `${SimpleInputLabel}`;
  className: string;
  labelWidth: LabelPercentageWidth;
  prefix?: string;

  isFocused?: boolean;
  isFilled?: boolean;
  forceFloating?: boolean;

  // Dropdown Props
  dataId?: string;
};

type LabelConfig = {
  style: CSSProperties;
  label: string;
};

const initialFloatingLabelLeftPosition: CSSProperties["left"] = "0";

export const InputsLabel = ({
  labelType,
  label,
  className,
  labelWidth,
  isFocused = false,
  isFilled = false,
  forceFloating = false,
  dataId,
  prefix,
}: InputsLabelProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const [floatingLabelLeftPosition, setFloatingLabelLeftPosition] = useState<CSSProperties["left"]>(
    initialFloatingLabelLeftPosition
  );

  const inputLabelConfig: LabelConfig = useMemo(() => {
    if (labelType === InputLabel.FLOATING) {
      const isFloatingLabelActive = isFocused || isFilled || forceFloating;

      return {
        style: {
          width: `fit-content`,
          left: isFloatingLabelActive ? initialFloatingLabelLeftPosition : floatingLabelLeftPosition,
        },
        label: isFloatingLabelActive ? label : `${label}...`,
      };
    } else {
      return {
        style: { width: `${labelWidth}%`, left: labelType === InputLabel.RIGHT ? `${`${100 - labelWidth}%`}` : "0" },
        label: label,
      };
    }
  }, [labelType, labelWidth, isFocused, isFilled, forceFloating, label, floatingLabelLeftPosition]);

  useLayoutEffect(() => {
    if (labelType === InputLabel.FLOATING && prefix) {
      const labelElement = labelRef.current;
      const prefixElement = labelElement?.parentElement?.querySelector(".m-textfield-prefix");

      if (labelElement && prefixElement) {
        const labelLeftPadding = parseFloat(window.getComputedStyle(labelElement).paddingLeft);
        const prefixWidth = prefixElement.getBoundingClientRect().width;

        const labelLeftOffset = labelLeftPadding
          ? labelLeftPadding
          : parseFloat(window.getComputedStyle(prefixElement).left);

        setFloatingLabelLeftPosition(prefixWidth ? prefixWidth + labelLeftOffset : "0");
      }
    } else if (floatingLabelLeftPosition !== initialFloatingLabelLeftPosition) {
      setFloatingLabelLeftPosition(initialFloatingLabelLeftPosition);
    }
  }, [labelType, prefix]);

  return (
    <label
      ref={labelRef}
      data-id={dataId}
      style={inputLabelConfig.style}
      className={classNames("m-input-label", labelType, className, {
        focused: labelType === InputLabel.FLOATING && isFocused,
        filled: isFilled,
        "forced-floating": forceFloating,
      })}
    >
      {inputLabelConfig.label}
    </label>
  );
};
