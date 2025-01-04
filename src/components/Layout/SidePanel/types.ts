export enum SidePanelPosition {
  LEFT = "left",
  RIGHT = "right",
}

export type SidePanelProps = {
  sidePanelOpen: SidePanelOpenState;
  handleClose: () => void;
  className?: string;
  position?: `${SidePanelPosition}`;
  alwaysOpen?: boolean;
};

export type UseSidePanelArgs = {
  onOpen?: () => void;
  onClose?: () => void;
};

export type UseSidePanelResult = [() => void, { sidePanelOpen: SidePanelOpenState; handleClose: () => void }];

export enum SidePanelOpenState {
  MOUNTED = "mounted",
  OPENED = "opened",
  CLOSING = "closing",
  CLOSED = "closed",
}
