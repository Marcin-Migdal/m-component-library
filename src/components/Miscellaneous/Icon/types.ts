import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEventHandler } from "react";

export type IconProps = {
  /** The icon to display.
   * @default undefined */
  icon?: IconProp;

  /** Click event handler for the icon.
   * @default undefined */
  onClick?: MouseEventHandler<SVGElement>;

  /** Additional CSS class for styling.
   * @default undefined */
  className?: string;

  /** Inline styles for the icon.
   * @default undefined */
  style?: CSSProperties;
};
