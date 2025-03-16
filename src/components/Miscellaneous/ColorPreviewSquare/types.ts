import { CSSProperties } from "react";
import { HslValue, RgbValue } from "../../Inputs";

export type ColorPreviewSquareProps = {
  /** Click event handler. */
  onClick?: () => void;

  /** If true, the square will not be clickable. */
  disabled?: boolean;

  /** Color of the square. */
  color: RgbValue | HslValue | RgbValue | CSSProperties["backgroundColor"];

  /** Additional CSS class for the ColorPreviewSquare.
   * @default undefined */
  className?: string;

  /** Additional inline styles for the ColorPreviewSquare.
   * @default {} */
  style?: CSSProperties;
};
