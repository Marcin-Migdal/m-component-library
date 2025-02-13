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
  /** The currently selected image file. */
  value?: File | undefined;

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
  onChange?: ImageFieldOnChange;

  /** Callback triggered when the `ImageField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback triggered when an error occurs (e.g., invalid file type or size). */
  onError?: (errorMessage: string) => void;

  /** Callback triggered when the selected image is cleared. */
  onClear?: () => void;
};
