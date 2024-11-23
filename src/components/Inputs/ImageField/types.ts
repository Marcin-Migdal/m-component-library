import { CSSProperties } from "react";

import { SimpleInputLabel } from "../../global-types";
import { InputProps } from "../_inputsComponents/input-types";

type ImageFieldClassNames = {
  container?: string;
  inputWrapper?: string;
  dropzone?: string;
  label?: string;
  error?: string;
};

type InputEventWithSource = Omit<React.ChangeEvent<HTMLInputElement>, "target"> & {
  target: Omit<React.ChangeEvent<HTMLInputElement>["target"], "value"> & { source: "change"; value: File };
};

type DropEventWithSource = React.DragEvent<HTMLLabelElement> & {
  target: React.DragEvent<HTMLLabelElement>["target"] & { source: "drop"; value: File };
};

type ClearEventWithSource = React.MouseEvent<SVGSVGElement, MouseEvent> & {
  target: React.MouseEvent<SVGSVGElement, MouseEvent>["target"] & { source: "clear"; value: undefined };
};

export type ResolutionValidation = {
  width: number;
  height: number;
};

export type ImageType = ".jpg" | ".jpeg" | ".png" | ".gif" | ".bmp" | ".webp" | ".svg";

export type ImageFieldOnChangeEvent = InputEventWithSource | DropEventWithSource | ClearEventWithSource;

export type ImageFieldOnChange = (event: ImageFieldOnChangeEvent, value: File | undefined) => void;

export type ImageFieldProps = InputProps<SimpleInputLabel> & {
  value?: File | undefined;
  dropzoneMessage?: [string, string];
  accept?: ImageType[];
  style?: CSSProperties;
  classNamesObj?: ImageFieldClassNames;
  maxSize?: number;
  minSize?: number;
  maxResolution?: ResolutionValidation;
  minResolution?: ResolutionValidation;

  onChange?: ImageFieldOnChange;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onError?: (errorMessage: string) => void;
  onClear?: () => void;
};
