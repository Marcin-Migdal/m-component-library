import { ComponentSize, FloatingInputWidth, InputLabel, LabelPercentageWidth } from "../../global-types";

/**
 * Common props used across many `Input` component1.
 * @genericType TLabelType - Type of the label position (defaults to `InputLabel`).
 * - `InputLabel`
 * - `SimpleInputLabel`
 */
export type InputProps<TLabelType extends string = InputLabel> = {
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
  labelWidth?: LabelPercentageWidth;

  /** Text label displayed for the input. */
  label?: string;

  /** Whether to disable the default margin.
   * @default false */
  disableDefaultMargin?: boolean;

  /** Error message displayed below the input. */
  error?: string;

  /** Type of label positioning.
   * @default "left" */
  labelType?: `${TLabelType}`;

  /** Width of the floating input field. */
  floatingInputWidth?: FloatingInputWidth;
};
