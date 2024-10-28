import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useRef } from "react";

import { ComponentSize } from "../global-types";
import { Tooltip } from "../Miscellaneous";
import { ButtonIconPosition, ButtonProps } from "./types";

import {
  defaultTooltipConfig,
  getTooltipPropsConfig,
} from "../Miscellaneous/Tooltip/helpers/getTooltipPropsConfig";

import "./Button.css";

const Button = (props: ButtonProps) => {
  const {
    children,
    text,
    onClick,
    disabled = false,
    busy = false,
    display = true,
    disableDefaultMargin = false,
    icon = undefined,
    iconPosition = ButtonIconPosition.RIGHT,
    className = "",
    style = {},
    type = "button",
    variant = "outlined",
    tooltip = "",
    disabledTooltip = "",
    tooltipConfig = defaultTooltipConfig,
    size = ComponentSize.MEDIUM,
    ...otherProps
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!display) {
    return null;
  }

  const getRightButtonIcon = () => {
    if (busy) {
      return (
        <FontAwesomeIcon
          className="right-svg is-busy-icon"
          icon="circle-notch"
          spin
        />
      );
    } else if (icon && iconPosition === ButtonIconPosition.RIGHT) {
      return <FontAwesomeIcon className="right-svg" icon={icon} />;
    } else {
      return null;
    }
  };

  const tooltipContent = disabled ? disabledTooltip : tooltip;

  return (
    <>
      <button
        ref={buttonRef}
        style={style}
        className={classNames("m-button", variant, size, className, {
          "disabled-default-margin": disableDefaultMargin,
        })}
        onClick={(e) => onClick && onClick(e)}
        disabled={disabled || busy}
        type={type}
        {...otherProps}
      >
        {children}
        {icon && iconPosition === ButtonIconPosition.LEFT && (
          <FontAwesomeIcon className="left-svg" icon={icon} />
        )}
        {text && text.trim() && <p>{text}</p>}
        {getRightButtonIcon()}
      </button>

      {tooltipContent && (
        <Tooltip
          targetRef={buttonRef}
          {...getTooltipPropsConfig(tooltipConfig)}
        >
          {tooltipContent}
        </Tooltip>
      )}
    </>
  );
};

export default Button;
