import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useRef } from "react";

import { ComponentSize } from "../global-types";
import { defaultTooltipConfig, getTooltipPropsConfig, Tooltip } from "../Miscellaneous";
import { ButtonAlignContent, ButtonIconPosition, ButtonProps, ButtonWidth } from "./types";

import "./Button.scss";

/**
 * Reusable button component with various variants, sizes, icons placements, and tooltip.
 */
const Button = ({
  children = undefined,
  text = undefined,
  onClick = undefined,
  disabled = false,
  busy = false,
  display = true,
  disableDefaultMargin = false,
  icon = undefined,
  iconPosition = ButtonIconPosition.RIGHT,
  className = undefined,
  style = undefined,
  type = "button",
  variant = "outlined",
  tooltip = undefined,
  disabledTooltip = undefined,
  tooltipConfig = defaultTooltipConfig,
  size = ComponentSize.MEDIUM,
  width = ButtonWidth.FIT,
  alignContent = ButtonAlignContent.CENTER,
  ...otherProps
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (display === false) {
    return null;
  }

  const getRightButtonIcon = () => {
    if (busy) {
      return (
        <p className="m-button-icon-container right">
          <FontAwesomeIcon className="m-button-svg is-busy-icon" icon="circle-notch" spin />
        </p>
      );
    } else if (icon && iconPosition === ButtonIconPosition.RIGHT) {
      return (
        <p className="m-button-icon-container right">
          <FontAwesomeIcon className="m-button-svg" icon={icon} />
        </p>
      );
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
          stretch: width === ButtonWidth.STRETCH,
          "align-start": alignContent === ButtonAlignContent.START,
          "align-end": alignContent === ButtonAlignContent.END,
        })}
        onClick={onClick}
        disabled={disabled || busy}
        type={type}
        {...otherProps}
      >
        {children}
        {icon && iconPosition === ButtonIconPosition.LEFT && (
          <p className="m-button-icon-container left">
            <FontAwesomeIcon className="m-button-svg" icon={icon} />
          </p>
        )}
        {text && text.trim() && <p className="m-button-text">{text}</p>}
        {getRightButtonIcon()}
      </button>

      {tooltipContent && (
        <Tooltip targetRef={buttonRef} {...getTooltipPropsConfig(tooltipConfig)}>
          {tooltipContent}
        </Tooltip>
      )}
    </>
  );
};

export default Button;
