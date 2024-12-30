import { ChangeEvent } from "react";
import { InputProps } from "../_inputsComponents/input-types";

export type ValuePreviewType = "top-dynamic" | "bottom-dynamic" | "top-static" | "bottom-static";

type SliderClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  valuePreview?: string;
};

export type SliderProps = InputProps & {
  value?: number;
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: number) => void;
  onDebounce?: (event: ChangeEvent<HTMLInputElement>, value: number) => void;

  debounceDelay?: number;

  hideValuePreview?: boolean;
  valuePreviewType?: ValuePreviewType;
  classNamesObj?: SliderClassNames;
  error?: string;
};
