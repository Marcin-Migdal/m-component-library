import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEvent, ReactNode } from "react";
import { ComponentSize } from "../global-types";
import { TooltipProps } from "../Miscellaneous";

export enum ButtonIconPosition {
  LEFT = "left",
  RIGHT = "right",
}
export type VariantType = "outlined" | "full" | "text" | "neon";

type ButtonBaseProps = {
  /** The content inside the button (e.g., text, icon, or other elements).
   * @default undefined */
  children?: ReactNode;

  /** The text displayed on the button.
   * @default undefined */
  text?: string;

  /** Whether the button is disabled (not clickable).
   * @default false */
  disabled?: boolean;

  /** Whether the button is in a "busy" state (showing a loader).
   * @default false */
  busy?: boolean;

  /** Whether the button should be visible. If `false`, the button is hidden.
   * @default true */
  display?: boolean;

  /** Whether the default margins of the button should be disabled.
   * @default false */
  disableDefaultMargin?: boolean;

  /** The icon displayed on the button. Can be passed as an IconName or an array [IconPrefix, IconName].
   * @default undefined */
  icon?: IconProp;

  /** The position of the icon relative to the text (e.g., "left", "right").
   * @default "right" */
  iconPosition?: `${ButtonIconPosition}`;

  /** Additional CSS class for the button.
   * @default undefined */
  className?: string;

  /** Additional inline styles for the button.
   * @default {} */
  style?: CSSProperties;

  /** The variant of the button (e.g., "primary", "secondary", "outlined").
   * @default "outlined" */
  variant?: VariantType;

  /** Tooltip displayed when hovering over the button.
   * @default undefined */
  tooltip?: ReactNode;

  /** Tooltip displayed when the button is disabled.
   * @default undefined */
  disabledTooltip?: ReactNode;

  /** Configuration for the tooltip (e.g., position, delay).
   * @default defaultTooltipConfig */
  tooltipConfig?: Partial<Omit<TooltipProps, "targetRef">>;

  /** The size of the button (e.g., "small", "medium", "large").
   * @default ComponentSize.MEDIUM */
  size?: `${ComponentSize}`;
};

type SubmitBtnProps = {
  /** The click event handler for the button. Not used for submit buttons.
   * @default undefined */
  onClick?: undefined;

  /** The type of the button. Set to "submit" for form submission.
   * @default "submit" */
  type: "submit";
};

type ResetBtnProps = {
  /** The click event handler for the button. Not used for reset buttons.
   * @default undefined */
  onClick?: undefined;

  /** The type of the button. Set to "reset" to reset form fields.
   * @default "reset" */
  type: "reset";
};

type BtnProps = {
  /** The click event handler for the button. Triggered on button click.
   * @default undefined */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;

  /** The type of the button. Set to "button" for a standard clickable button.
   * @default "button" */
  type?: "button";
};

export type ButtonProps = ButtonBaseProps & (BtnProps | SubmitBtnProps | ResetBtnProps);
