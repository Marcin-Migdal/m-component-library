import { ChangeEvent, FocusEvent } from "react";

import * as GlobalInterfaces from "../../global-types";
import { StandAloneTextfieldProps } from "../_inputsComponents/StandAloneTextfield/types";

type TextFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type TextfieldProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  error?: string;
  defaultInternalValue?: string;
  labelWidth?: GlobalInterfaces.LabelPercentageWidth;
  floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
  label?: string;
  labelType?: `${GlobalInterfaces.InputLabel}`;
  noBottomMargin?: boolean;
  classNamesObj?: TextFieldClassNames;
} & Omit<StandAloneTextfieldProps, "onChange" | "onBlur" | "onFocus" | "onClick" | "classNAme">;
