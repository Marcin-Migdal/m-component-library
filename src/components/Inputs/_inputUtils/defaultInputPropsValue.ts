import { InputProps } from "../_inputsComponents/input-types";

export const defaultInputPropsValue: Required<Omit<InputProps, "name" | "label" | "error">> = {
  labelType: "left",
  labelWidth: 30,
  size: "medium",
  disabled: false,
  readOnly: false,
  disableDefaultMargin: false,
  floatingInputWidth: 30,
};
