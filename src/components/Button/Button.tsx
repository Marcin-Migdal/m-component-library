import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useRef } from "react";

import { ComponentSize } from "../global-types";
import { defaultTooltipConfig, getTooltipPropsConfig, Tooltip } from "../Miscellaneous";
import { ButtonIconPosition, ButtonProps } from "./types";

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
  ...otherProps
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (display === false) {
    return null;
  }

  const getRightButtonIcon = () => {
    if (busy) {
      return <FontAwesomeIcon className="m-button-svg right is-busy-icon" icon="circle-notch" spin />;
    } else if (icon && iconPosition === ButtonIconPosition.RIGHT) {
      return <FontAwesomeIcon className="m-button-svg right" icon={icon} />;
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
        onClick={onClick}
        disabled={disabled || busy}
        type={type}
        {...otherProps}
      >
        {children}
        {icon && iconPosition === ButtonIconPosition.LEFT && (
          <FontAwesomeIcon className="m-button-svg left" icon={icon} />
        )}
        {text && text.trim() && <p>{text}</p>}
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
