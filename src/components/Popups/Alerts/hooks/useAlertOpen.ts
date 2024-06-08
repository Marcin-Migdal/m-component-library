import { ForwardedRef, useImperativeHandle, useState } from "react";

export type AlertHandler = {
    openAlert: () => void;
    closeAlert: () => void;
};

type UseAlertOpenArgs = {
    ref: ForwardedRef<AlertHandler>;
};

export enum AlertState {
    CLOSED = "closed",
    CLOSING = "closing",
    OPENED = "opened",
}

type useAlertOpenResult = {
    alertOpen: AlertState;
    handleClose: () => void;
};

export const useAlertOpen = ({ ref }: UseAlertOpenArgs): useAlertOpenResult => {
    const [alertOpen, setAlertOpen] = useState<AlertState>(AlertState.CLOSED);

    useImperativeHandle(ref, () => ({
        openAlert: () => setAlertOpen(AlertState.OPENED),
        closeAlert: handleClose,
    }));

    const handleClose = () => {
        setAlertOpen(AlertState.CLOSING);

        setTimeout(() => {
            setAlertOpen(AlertState.CLOSED);
        }, 200);
    };

    return { alertOpen, handleClose };
};
