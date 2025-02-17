export type EnableKeysDown = {
  tab?: boolean;
  enter?: boolean;
  space?: boolean;
};
export type OverlayProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  enableKeysDown?: EnableKeysDown;
};
