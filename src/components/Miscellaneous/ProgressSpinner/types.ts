export type ProgressSpinnerProps = {
  /** Determines whether the spinner is in a loading state.
   * @default true */
  loading?: boolean;

  /** The thickness of the spinner's stroke. Acceptable values range from "1" to "20".
   * @default "4" */
  strokeWidth?: StrokeWidthType;
};

/** Represents the possible stroke widths for the spinner. */
export type StrokeWidthType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20";
