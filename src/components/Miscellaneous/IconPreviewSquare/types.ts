import { CSSProperties } from "react";
import { ColorValue } from "../../Inputs";

export type IconPreviewSquareProps = {
  /** Icon displayed in icon preview square component.
   * @default undefined */
  icon?: string;

  /** Color of the icon background and icon itself.
   * @default undefined */
  color?: ColorValue;

  /** Additional CSS class for the IconPreviewSquare.
   * @default undefined */
  className?: string;

  /** Additional inline styles for the IconPreviewSquare.
   * @default {} */
  style?: CSSProperties;

  /** Click event handler. */
  onClick?: () => void;

  /** If true, the square will not be clickable. */
  disabled?: boolean;
};
