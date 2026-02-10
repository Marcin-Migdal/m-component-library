import classNames from "classnames";
import React, { CSSProperties, forwardRef, PropsWithChildren, useMemo } from "react";

import { ComponentSize, InputLabel, MarginBottomType } from "../../../global-types";
import { InputErrorType } from "../InputError/types";

import "./InputContainer.scss";

type InputContainerProps = {
  marginBottomType: MarginBottomType;
  labelType: `${InputLabel}`;
  disabled: boolean;
  className: string;
  size: `${ComponentSize}`;
  error?: InputErrorType;
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
    marginBottomType,
    labelType,
  }: PropsWithChildren<InputContainerProps>,
  ref?: React.ForwardedRef<HTMLDivElement>,
) {
  const marginBottomClassName = useMemo(() => {
    if (marginBottomType === "none") {
      return undefined;
    }

    let marginBottomClassNameSuffix = marginBottomType;

    if (marginBottomType === "dynamic") {
      marginBottomClassNameSuffix = labelType === "floating" ? "large" : "small";
    }

    return `margin-bottom-${marginBottomClassNameSuffix}`;
  }, [marginBottomType, labelType]);

  return (
    <div
      ref={ref}
      style={style}
      className={classNames("m-input-container", className, size, marginBottomClassName, { error, disabled })}
    >
      {children}
    </div>
  );
}

type ToastsContainerForwardRefType = (
  props: PropsWithChildren<InputContainerProps> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  },
) => ReturnType<typeof InputContainer>;

export default forwardRef(InputContainer) as ToastsContainerForwardRefType;
