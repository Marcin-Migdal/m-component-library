import { OverlayProps } from "../../Miscellaneous";

export type AlertProps<TData = undefined> = {
  /** Additional CSS class for styling the alert.
   * @default undefined */
  className?: string;

  /** The current open state of the alert. */
  alertOpen: AlertOpenState;

  /** Function to handle closing the alert. */
  handleClose: () => void;
} & Omit<AlertHeaderProps, "onClose"> &
  AlertFooterProps<TData>;

export type AlertBodyProps = {
  /** Additional CSS class for styling the alert body.
   * @default undefined */
  className?: string;

  /** The current open state of the alert.
   * - `closed`
   * - `closing`
   * - `opened`  */
  alertOpen: `${AlertOpenState}`;

  /** Function to close the alert when triggered. */
  onClose: () => void;

  /** Config of the overlay. */
  overlayConfig?: OverlayProps;
};

export type AlertHeaderProps = {
  /** The header text for the alert.
   * @default undefined */
  header?: string;

  /** Function to close the alert when triggered. */
  onClose: () => void;

  /** If set to true, alert `onClose` callback will not be called when `esc` key is pressed */
  disableCloseOnEscape?: boolean;
};

export type AlertFooterProps<TData = undefined> = {
  /** Data passed in handleOpenAlert callback from useAlert hook. */
  data?: TData;

  /** Text for the confirm button.
   * @default "Confirm" */
  confirmBtnText?: string;

  /** Whether the confirm button is disabled.
   * @default false */
  confirmBtnDisabled?: boolean;

  /** Function to execute when the confirm button is clicked. */
  onConfirm?: (data: TData) => void;

  /** If set to true, alert `onConfirm` callback will not be called when `enter` key is pressed */
  disableConfirmOnEnter?: boolean;

  /** Text for the decline button.
   * @default "Close" */
  declineBtnText?: string;

  /** Whether the decline button is disabled.
   * @default false */
  declineBtnDisabled?: boolean;

  /** Function to execute when the decline button is clicked. */
  onDecline?: (data: TData) => void;
};

export type UseAlertOpenArgs = {
  /** Function called when the alert opens. */
  onOpen?: () => void;

  /** Function called when the alert closes. */
  onClose?: () => void;
};

export enum AlertOpenState {
  /** The alert is closed. */
  CLOSED = "closed",

  /** The alert is in the process of closing. */
  CLOSING = "closing",

  /** The alert is open. */
  OPENED = "opened",
}

export type UseAlertOpenResult<TData = undefined> = TData extends undefined
  ? [
      /** Function to trigger the opening of the alert. */
      (data?: undefined) => void,

      /** Current state of the alert and the handleClose function. */
      {
        /** The current open state of the alert. */
        alertOpen: AlertOpenState;

        /** Function to handle closing the alert. */
        handleClose: () => void;

        data: undefined;
      }
    ]
  : [
      /** Function to trigger the opening of the alert. */
      (data: TData) => void,

      /** Current state of the alert and the handleClose function. */
      {
        /** The current open state of the alert. */
        alertOpen: AlertOpenState;

        /** Function to handle closing the alert. */
        handleClose: () => void;

        data: TData | undefined;
      }
    ];
