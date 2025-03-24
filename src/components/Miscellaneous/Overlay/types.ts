export type EnableKeysDown = {
  tab?: boolean;
  enter?: boolean;
  space?: boolean;
};

export type OverlayProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  onClose?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  enableKeysDown?: EnableKeysDown | true;
  disableCloseOnEscape?: boolean;
};
