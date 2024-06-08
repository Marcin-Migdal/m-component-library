import { useImperativeHandle, useState } from "react";
import { AlertState, UseAlertOpenArgs, useAlertOpenResult } from "../types";

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
