import classNames from "classnames";
import React, { CSSProperties, useLayoutEffect, useRef, useState } from "react";
import InputMask, { InputState } from "react-input-mask";

import { ComponentSize } from "../../../global-types";
import { StandAloneTextfieldProps } from "./types";

import "./StandAloneTextfield.css";

const defaultFormatChars = {
  "9": "[0-9]",
  a: "[A-Za-z]",
  "*": "[A-Za-z0-9]",
};

// TODO! fix icons in dropdown, it was something with position: "relative" | "absolute" in dropdown icon, also z-index broke after changing position in icons

type PrefixStyleProperties = {
  inputPaddingLeft: CSSProperties["paddingLeft"];
  prefixLeftPosition?: string;
};

export const StandAloneTextfield = ({
  value = undefined,
  name = undefined,
  disabled = false,
  readOnly = false,

  className,
  placeholder = undefined,

  onChange,
  onBlur,
  onFocus,
  onClick,
  style = {},
  type = "text",
  autoFocus = false,
  mask = "",
  advancedMask = undefined,
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

  const handleBeforeMaskedValueChange = (newState: InputState, oldState: InputState, userInput: string): InputState => {
    if (!advancedMask) {
      return newState;
    }

    if (!advancedMask.beforeChange) {
      return newState;
    }

    return advancedMask.beforeChange(newState, oldState, userInput, advancedMask.formatChars);
  };

  return (
    <div style={style} ref={textfieldWrapperRef} className="standalone-textfield-wrapper">
      {prefix && (
        <span className="m-textfield-prefix" style={{ left: prefixStyleProperties.prefixLeftPosition }}>
          {prefix}
        </span>
      )}
      <InputMask
        readOnly={readOnly}
        maskChar={null}
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
        //! Mask Props
        {...(advancedMask
          ? {
              ...advancedMask,
              beforeMaskedValueChange: handleBeforeMaskedValueChange,
            }
          : { mask: mask, formatChars: defaultFormatChars })}
      />
    </div>
  );
};
