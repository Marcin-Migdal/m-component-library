import { useImperativeHandle, useState } from "react";
import { AlertOpenState, AlertState, UseAlertOpenArgs, useAlertOpenResult } from "../types";

export const useAlertOpen = <T = undefined>({ ref }: UseAlertOpenArgs<T>): useAlertOpenResult<T> => {
    const [alertState, setAlertState] = useState<AlertState<T>>({
        openState: AlertOpenState.CLOSED,
        data: undefined,
    });

    const handleClose = () => {
        setAlertState({ openState: AlertOpenState.CLOSING, data: undefined });

        setTimeout(() => {
            setAlertState({ openState: AlertOpenState.CLOSED, data: undefined });
        }, 200);
    };

    useImperativeHandle(ref, () => ({
        openAlert: (data) => setAlertState({ openState: AlertOpenState.OPENED, data: data }),
        closeAlert: handleClose,
    }));

    return { alertOpen: alertState.openState, data: alertState.data, handleClose };
};
