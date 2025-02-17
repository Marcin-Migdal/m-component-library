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
   * For gap to work properly, the `flex` version of the props in the `Col` component must be used.
   * @default undefined */
  gap?: Partial<Record<"sm" | "md" | "lg" | "xl", CSSProperties["gap"]>>;
};
