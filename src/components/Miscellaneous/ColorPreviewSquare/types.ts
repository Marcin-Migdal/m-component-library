import { CSSProperties } from "react";

export type ColorPreviewSquareProps = {
  /** Click event handler. */
  onClick?: () => void;

  /** If true, the square will not be clickable. */
  disabled?: boolean;

  /** Color of the square. */
  color: CSSProperties["backgroundColor"];
};
