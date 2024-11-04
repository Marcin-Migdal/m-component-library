import classNames from "classnames";
import React, { CSSProperties, forwardRef, PropsWithChildren } from "react";

import { ComponentSize } from "../../../global-types";
import "./InputContainer.css";

type InputContainerProps = {
  disableDefaultMargin: boolean;
  disabled: boolean;
  className: string;
  size: `${ComponentSize}`;
  error?: string;
  style?: CSSProperties;
};

function InputContainer(
  {
    children,
    className,
    size,
    error,
    style = {},
    disabled,
    disableDefaultMargin,
  }: PropsWithChildren<InputContainerProps>,
  ref?: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      style={style}
      className={classNames("m-input-container", className, size, {
        error,
        disabled,
        "bottom-margin": !disableDefaultMargin,
      })}
    >
      {children}
    </div>
  );
}

type ToastsContainerForwardRefType = (
  props: PropsWithChildren<InputContainerProps> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  }
) => ReturnType<typeof InputContainer>;

export default forwardRef(InputContainer) as ToastsContainerForwardRefType;
