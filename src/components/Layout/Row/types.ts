import { CSSProperties, ReactNode } from "react";

export type RowProps = {
  /** Additional CSS class for the row.
   * @default undefined */
  className?: string;

  /** Inline styles for the row, excluding the `gap` property.
   * @default {} */
  style?: Omit<CSSProperties, "gap">;

  /** Child elements to be rendered inside the row.
   * @default undefined */
  children?: ReactNode;

  /** Gap configuration for the `col` component, including breakpoint and gap size.
   * @default undefined */
  gap?: {
    /** Breakpoint for the gap (e.g., "sm", "md", "lg", "xl"). */
    breakpoint: "sm" | "md" | "lg" | "xl";

    /** Size of the gap (e.g., "16px" or 16). */
    gapSize?: string | number;
  };
};
