import classNames from "classnames";
import React, { CSSProperties, useLayoutEffect, useRef, useState } from "react";

import { ComponentSize } from "../../../global-types";
import { StandAloneTextfieldProps } from "./types";

import "./StandAloneTextfield.scss";

type PrefixStyleProperties = {
  inputPaddingLeft: CSSProperties["paddingLeft"];
  prefixLeftPosition?: string;
};

const getChildrenComponentWidth = (leftChildrenComponent: HTMLElement | null): number => {
  if (leftChildrenComponent === null) {
    return 0;
  }

  const leftChildrenComponentStyles = window.getComputedStyle(leftChildrenComponent);

  return (
    parseFloat(leftChildrenComponentStyles.width) +
    parseFloat(leftChildrenComponentStyles.marginLeft) +
    parseFloat(leftChildrenComponentStyles.marginRight)
  );
};

export const StandAloneTextfield = ({
  value = undefined,
  name = undefined,
  disabled = false,
  readOnly = false,
  disableSubmitOnEnter = false,
  id = undefined,
  idPrefix = "textfield",

  classNamesObj = {},
  placeholder = undefined,

  onChange,
  onBlur,
  onFocus,
  onClick,
  style = {},
  type = "text",
  autoFocus = false,
  prefix = "",
  size = ComponentSize.MEDIUM,
  standAloneTextfieldChildren,
  standAloneTextfieldChildrenPosition = "right",
}: StandAloneTextfieldProps) => {
  const textfieldWrapperRef = useRef<HTMLDivElement>(null);

  const [prefixStyleProperties, setPrefixStyleProperties] = useState<PrefixStyleProperties>({
    inputPaddingLeft: "var(--input-padding-left)",
  });

  useLayoutEffect(() => {
    const calculateStyle = () => {
      const textfieldWrapperElement = textfieldWrapperRef.current;

      if (!textfieldWrapperElement) {
        return;
      }

      const prefixWidth = textfieldWrapperElement.querySelector(".m-textfield-prefix")?.getBoundingClientRect().width;
      const inputElement = textfieldWrapperElement.querySelector(".m-textfield") as HTMLInputElement | null;

      if (!inputElement || !prefixWidth) {
        return;
      }

      const inputStyles = window.getComputedStyle(inputElement);

      const inputPaddingLeft = inputStyles.paddingLeft;

      const leftChildrenComponentWidth: number = getChildrenComponentWidth(
        textfieldWrapperElement.querySelector(".standalone-textfield-children-wrapper.left")
      );

      setPrefixStyleProperties({
        inputPaddingLeft: parseInt(inputPaddingLeft) * 2 + prefixWidth,
        prefixLeftPosition: `${parseFloat(inputPaddingLeft) + leftChildrenComponentWidth}px`,
      });
    };

    prefix && calculateStyle();
  }, [prefix, size, standAloneTextfieldChildrenPosition, standAloneTextfieldChildren]);

  const { standAloneTextfieldContainerClassName, prefixClassName, inputClassName } = classNamesObj;

  return (
    <div
      id={id ? `${idPrefix}-wrapper-${id}` : undefined}
      style={style}
      ref={textfieldWrapperRef}
      className={classNames("standalone-textfield-wrapper", standAloneTextfieldContainerClassName)}
    >
      {standAloneTextfieldChildrenPosition === "left" && (
        <div className="standalone-textfield-children-wrapper left">{standAloneTextfieldChildren}</div>
      )}
      {prefix && (
        <span
          className={classNames("m-textfield-prefix", prefixClassName)}
          style={{ left: prefixStyleProperties.prefixLeftPosition }}
        >
          {prefix}
        </span>
      )}
      <input
        id={id ? `${idPrefix}-${id}` : undefined}
        readOnly={readOnly}
        disabled={disabled}
        name={name}
        className={classNames("m-input", "m-textfield", inputClassName)}
        type={type}
        style={prefix ? { paddingLeft: prefixStyleProperties.inputPaddingLeft } : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter" && disableSubmitOnEnter) {
            e.preventDefault();
          }
        }}
      />
      {standAloneTextfieldChildrenPosition === "right" && (
        <div className="standalone-textfield-children-wrapper right">{standAloneTextfieldChildren}</div>
      )}
    </div>
  );
};
