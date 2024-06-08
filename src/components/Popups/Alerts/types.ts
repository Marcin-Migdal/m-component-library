import { ForwardedRef } from "react";

export type AlertProps = {
    className?: string;
    header?: Omit<AlertHeaderProps, "onClose">;
    footer?: AlertFooterProps;
};

export type AlertBodyProps = {
    className?: string;
    alertOpen: AlertState;
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

export type AlertHandler = {
    openAlert: () => void;
    closeAlert: () => void;
};

export type UseAlertOpenArgs = {
    ref: ForwardedRef<AlertHandler>;
};

export enum AlertState {
    CLOSED = "closed",
    CLOSING = "closing",
    OPENED = "opened",
}

export type useAlertOpenResult = {
    alertOpen: AlertState;
    handleClose: () => void;
};
