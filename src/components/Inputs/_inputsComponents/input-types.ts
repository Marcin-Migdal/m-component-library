import { ComponentSize, InputLabel, MarginBottomType, Percentage } from "../../global-types";
import { InputErrorType } from "./InputError/types";

/** Common props used across many `Input` component. */
export type InputProps = {
  /** Size of the input component.
   * @default "medium" */
  size?: `${ComponentSize}`;

  /** Name attribute of the input field. */
  name?: string;

  /** Whether the input is disabled.
   * @default false */
  disabled?: boolean;

  /** Whether the input is read-only.
   * @default false */
  readOnly?: boolean;

  /** Width of the label as a percentage.
   * @default 30 */
  labelWidth?: Percentage;

  /** Text label displayed for the input. */
  label?: string;

  /** Margin bottom type for inputs.
   * - `dynamic` depends on the labelType, default marginBottomType.
   *      - labelType `floating` large
   *      - labelType `left | right` small
   * - `large`
   * - `small`
   * - `none`
   * @default false */
  marginBottomType?: MarginBottomType;

  /** Error message displayed below the input. */
  error?: InputErrorType;

  /** Type of label positioning.
   * @default "left" */
  labelType?: `${InputLabel}`;

  /** Width of the floating input field. */
  floatingInputWidth?: Percentage;
};

export type SimpleInputProps = Omit<InputProps, "floatingInputWidth">;
