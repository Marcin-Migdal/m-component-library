import classNames from "classnames";
import React, { CSSProperties, useLayoutEffect, useRef, useState } from "react";

import { ComponentSize } from "../../../global-types";
import { StandAloneTextfieldProps } from "./types";

import "./StandAloneTextfield.scss";

type PrefixStyleProperties = {
  inputPaddingLeft: CSSProperties["paddingLeft"];
  prefixLeftPosition?: string;
};

export const StandAloneTextfield = ({
  value = undefined,
  name = undefined,
  disabled = false,
  readOnly = false,
  disableSubmitOnEnter = false,
  id = undefined,
  idPrefix = "textfield",

  className,
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

      const paddingLeft = prefixStyleProperties.prefixLeftPosition
        ? prefixStyleProperties.prefixLeftPosition
        : inputStyles.paddingLeft;

      setPrefixStyleProperties({
        inputPaddingLeft: parseInt(paddingLeft) * 2 + prefixWidth,
        prefixLeftPosition: paddingLeft,
      });
    };

    prefix && calculateStyle();
  }, [prefix, size]);

  return (
    <div
      id={id ? `${idPrefix}-wrapper-${id}` : undefined}
      style={style}
      ref={textfieldWrapperRef}
      className="standalone-textfield-wrapper"
    >
      {prefix && (
        <span className="m-textfield-prefix" style={{ left: prefixStyleProperties.prefixLeftPosition }}>
          {prefix}
        </span>
      )}
      <input
        id={id ? `${idPrefix}-${id}` : undefined}
        readOnly={readOnly}
        disabled={disabled}
        name={name}
        className={classNames("m-input", "m-textfield", className)}
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
    </div>
  );
};
