export type EnableKeysDown = {
  tab?: boolean;
  enter?: boolean;
  space?: boolean;
};

export type OverlayProps = {
  /** Callback called when overlay is clicked. */
  onClick?: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;

  /** Callback called "esc" key is presses and `disableCloseOnEscape` is not true . */
  onClose?: () => void;

  /** By default `enter` `space` and `tab` keys are disabled if event takes place outside the overlay html element. This behavior can be disabled with this props. */
  enableKeysDown?: EnableKeysDown | true;

  /** If set to true, overlay `onClose` callback will not be called when `esc` key is pressed */
  disableCloseOnEscape?: boolean;
};
