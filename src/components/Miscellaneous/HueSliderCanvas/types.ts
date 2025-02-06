export type HueSliderCanvasProps = {
  /** Current hue value (0-360). */
  hue: number;

  /** Callback function triggered when the hue changes. */
  onChange: (hue: number) => void;

  /** If true, the slider is read-only and cannot be interacted with.
   * @default false */
  readOnly?: boolean;
};
