export enum SidePanelPosition {
  LEFT = "left",
  RIGHT = "right",
}

export type SidePanelProps = {
  /** Current state of the side panel (e.g., "mounted", "opened", "closing", "closed"). */
  sidePanelOpen: SidePanelOpenState;

  /** Callback function to close the side panel. */
  handleClose: () => void;

  /** Additional CSS class for the side panel. @default undefined */
  className?: string;

  /** Position of the side panel (e.g., "left" or "right"). @default "left" */
  position?: "left" | "right";

  /** Whether the side panel should always remain open. @default false */
  alwaysOpen?: boolean;
};

export type UseSidePanelArgs = {
  /** Callback function triggered when the side panel opens. @default undefined */
  onOpen?: () => void;

  /** Callback function triggered when the side panel closes. @default undefined */
  onClose?: () => void;
};

/** Return type of the `useSidePanel` hook. */
export type UseSidePanelResult = [
  /** Function to open the side panel. */
  () => void,

  /** Object containing the current state and close handler. */
  { sidePanelOpen: SidePanelOpenState; handleClose: () => void }
];

export enum SidePanelOpenState {
  MOUNTED = "mounted",
  OPENED = "opened",
  CLOSING = "closing",
  CLOSED = "closed",
}
