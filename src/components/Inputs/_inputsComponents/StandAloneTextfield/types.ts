import React, { ChangeEvent, CSSProperties, FocusEvent } from "react";
import { InputState } from "react-input-mask";
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
} & (BaseMaskTextfieldType | AdvancedMaskTextfieldType | NoMaskTextfieldType);

//* No mask type
type NoMaskTextfieldType = {
  advancedMask?: undefined;
  mask?: undefined;
};

//* Base mask type
export type BaseMaskTextfieldType = {
  advancedMask?: undefined;
  mask: `${TEXT_FIELD_MASKS}` | string;
};

export enum TEXT_FIELD_MASKS {
  PHONE_NUMBER = "999-999-999",
  CREDIT_CARD = "9999 9999 9999 9999",
  ZIP_CODE = "99-999",
}

//* Advanced mask type
export type AdvancedMaskTextfieldType = {
  mask?: undefined;
  advancedMask: AdvancedMaskType;
};

export type AdvancedMaskType = {
  mask: string;
  formatChars: FormatChars;
  beforeChange?: BeforeMaskedValueChangeType;
};

export type FormatChars = {
  [key: string]: string;
};

type BeforeMaskedValueChangeType = (
  newState: InputState,
  oldState: InputState,
  userInput: string,
  formatChars: FormatChars
) => InputState;
