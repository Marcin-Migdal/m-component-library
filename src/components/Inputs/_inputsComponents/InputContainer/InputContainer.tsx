import classNames from "classnames";
import React, { CSSProperties, forwardRef, PropsWithChildren } from "react";

import * as GlobalInterfaces from "../../../global-types";

import "./InputContainer.css";

type InputContainerProps = {
    disabled: boolean;
    className: string;
    size: `${GlobalInterfaces.InputSize}`;
    error?: string;
    style?: CSSProperties;
};

function InputContainer(
    { children, className, size, error, style = {}, disabled }: PropsWithChildren<InputContainerProps>,
    ref?: React.ForwardedRef<HTMLDivElement>
) {
    return (
        <div
            ref={ref}
            style={style}
            className={classNames("m-input-container", className, size, {
                error,
                disabled,
            })}
        >
            {children}
        </div>
    );
}

type ToastsContainerForwardRefType = (
    props: PropsWithChildren<InputContainerProps> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof InputContainer>;

export default forwardRef(InputContainer) as ToastsContainerForwardRefType;
