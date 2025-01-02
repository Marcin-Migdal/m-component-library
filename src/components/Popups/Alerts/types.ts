export type AlertProps = {
  className?: string;
  alertOpen: AlertOpenState;
  handleClose: () => void;
} & Omit<AlertHeaderProps, "onClose"> &
  AlertFooterProps;

export type AlertBodyProps = {
  className?: string;
  alertOpen: `${AlertOpenState}`;
  onClose: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

export type AlertHeaderProps = {
  header?: string;
  onClose: () => void;
};

export type AlertFooterProps = {
  confirmBtnText?: string;
  confirmBtnDisabled?: boolean;
  onConfirmBtnClick?: () => void;
  declineBtnText?: string;
  declineBtnDisabled?: boolean;
  onDeclineBtnClick?: () => void;
};

export type UseAlertOpenArgs = {
  onOpen?: () => void;
  onClose?: () => void;
};

export enum AlertOpenState {
  CLOSED = "closed",
  CLOSING = "closing",
  OPENED = "opened",
}

export type UseAlertOpenResult = [() => void, { alertOpen: AlertOpenState; handleClose: () => void }];
