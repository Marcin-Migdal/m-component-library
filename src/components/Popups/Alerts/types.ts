import { ForwardedRef } from "react";

export type AlertProps<T> = {
    className?: string;
    header?: Omit<AlertHeaderProps, "onClose">;
    footer?: Omit<AlertFooterProps<T>, "data">;
};

export type AlertBodyProps = {
    className?: string;
    alertOpen: AlertOpenState;
    onClose: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
};

export type AlertHeaderProps = {
    header?: string;
    onClose: () => void;
};

export type AlertFooterProps<T> = {
    confirmBtnText?: string;
    confirmBtnDisabled?: boolean;
    onConfirmBtnClick?: (data: T) => void;
    declineBtnText?: string;
    declineBtnDisabled?: boolean;
    onDeclineBtnClick?: (data: T) => void;
    data: T;
};

export type AlertHandler<T = unknown> = {
    openAlert: (data?: T) => void;
    closeAlert: () => void;
};

export type UseAlertOpenArgs<T> = {
    ref: ForwardedRef<AlertHandler<T>>;
};

export type AlertState<T> = { openState: AlertOpenState; data: T | undefined };

export enum AlertOpenState {
    CLOSED = "closed",
    CLOSING = "closing",
    OPENED = "opened",
}

export type useAlertOpenResult<T> = {
    alertOpen: AlertOpenState;
    data: T | undefined;
    handleClose: () => void;
};
