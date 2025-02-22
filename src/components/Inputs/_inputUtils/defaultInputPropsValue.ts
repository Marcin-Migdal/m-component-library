import { ComponentSize, InputLabel } from "../../global-types";
import { InputProps } from "../_inputsComponents/input-types";

export const defaultInputPropsValue: Required<Omit<InputProps, "name" | "label" | "error">> = {
  labelType: InputLabel.LEFT,
  labelWidth: 30,
  size: ComponentSize.MEDIUM,
  disabled: false,
  readOnly: false,
  disableDefaultMargin: false,
  floatingInputWidth: 100,
};
