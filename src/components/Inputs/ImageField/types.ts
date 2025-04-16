import { CSSProperties } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

type ImageFieldClassNames = {
  container?: string;
  inputWrapper?: string;
  dropzone?: string;
  label?: string;
  error?: string;
};

export type ResolutionValidation = {
  width: number;
  height: number;
};

export type ImageType = ".jpg" | ".jpeg" | ".png" | ".gif" | ".bmp" | ".webp" | ".svg";

type ImageFieldCNativeChangeEvent = React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLLabelElement>;

export type ImageFieldChangeEvent = Omit<ImageFieldCNativeChangeEvent, "target"> & {
  target: Omit<ImageFieldCNativeChangeEvent["target"], "value">;
} & MInputChangeEvent<File>;

export type ImageFieldClearEvent = React.MouseEvent<SVGSVGElement, MouseEvent> & MInputChangeEvent<null>;

export type ImageFieldProps = InputProps & {
  /** The currently selected image file. */
  value?: File | null;

  /** Messages displayed in the dropzone area. `[defaultMessage, draggingMessage]` */
  dropzoneMessage?: [string, string];

  /** Accepted image file types.
   * - `jpg` selected by default.
   * - `png` selected by default.
   * - `svg` selected by default.
   * - `jpeg`
   * - `gif`
   * - `bmp`
   * - `webp`
   */
  accept?: ImageType[];

  /** Custom inline styles for the component. */
  style?: CSSProperties;

  /** Custom class names for different parts of the component. */
  classNamesObj?: ImageFieldClassNames;

  /** Maximum file size in bytes. */
  maxSize?: number;

  /** Minimum file size in bytes. */
  minSize?: number;

  /** Maximum allowed image resolution in pixels. */
  maxResolution?: ResolutionValidation;

  /** Minimum allowed image resolution in pixels. */
  minResolution?: ResolutionValidation;

  /** Callback triggered when an image is selected. */
  onChange?: (event: ImageFieldChangeEvent, value: File) => void;

  /** Callback triggered when an `ImageField` lose focus. */
  onBlur?: (event: ImageFieldChangeEvent, value: File) => void;

  /** Callback triggered when the `ImageField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback triggered when an error occurs (e.g., invalid file type or size). */
  onError?: (errorMessage: string) => void;

  /** Callback triggered when the selected image is cleared. */
  onClear?: (event: ImageFieldClearEvent, value: null) => void;
};
