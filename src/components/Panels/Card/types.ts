import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  /** Child elements to be rendered inside the card. */
  children: ReactNode;

  /** Variant of the card
   * - `default` default Variant
   * - `border`
   * - `gradient-border`
   * - `gradient-border-glow`
   * @default "default" */
  variant?: CardVariantTypes;

  /** Additional CSS class for the card.
   * @default undefined */
  className?: string;

  /** Inline styles for the card.
   * @default undefined */
  style?: CSSProperties;
};

/** Represents the possible variants of the card. */
export type CardVariantTypes = "default" | "border" | "gradient-border" | "gradient-border-glow";
