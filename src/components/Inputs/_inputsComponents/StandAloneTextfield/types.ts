import React, { ChangeEvent, CSSProperties, FocusEvent } from "react";
import { InputProps } from "../input-types";

export type TextfieldTypes = "text" | "number" | "password";

export type StandAloneTextfieldProps = Omit<
  InputProps,
  "labelWidth" | "label" | "disableDefaultMargin" | "error" | "labelType" | "floatingInputWidth"
> & {
  value?: string;
  placeholder?: string;
  type?: TextfieldTypes;
  autoFocus?: boolean;
  className?: string;
  prefix?: string;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  style?: CSSProperties;

  id?: string;
};
