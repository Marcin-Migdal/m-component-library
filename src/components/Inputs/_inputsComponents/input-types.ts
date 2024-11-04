import { ComponentSize, FloatingInputWidth, InputLabel, LabelPercentageWidth } from "../../global-types";

export type InputProps<TLabelType extends string = InputLabel> = {
  size?: `${ComponentSize}`;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  labelWidth?: LabelPercentageWidth;
  label?: string;
  disableDefaultMargin?: boolean;
  error?: string;
  labelType?: `${TLabelType}`;
  floatingInputWidth?: FloatingInputWidth;
};
