import { useImperativeHandle, useState } from "react";
import { AlertOpenState, AlertState, UseAlertOpenArgs, useAlertOpenResult } from "../types";

export const useAlertOpen = <T = undefined>({ ref, onOpen, onClose }: UseAlertOpenArgs<T>): useAlertOpenResult<T> => {
  const [alertState, setAlertState] = useState<AlertState<T>>({
    openState: AlertOpenState.CLOSED,
    data: undefined,
  });

  const handleOpen = (data?: T) => {
    onOpen && onOpen(data);

    setAlertState({ openState: AlertOpenState.OPENED, data: data });
  };

  const handleClose = () => {
    setAlertState({ openState: AlertOpenState.CLOSING, data: undefined });

    setTimeout(() => {
      onClose && onClose(alertState.data);

      setAlertState({ openState: AlertOpenState.CLOSED, data: undefined });
    }, 200);
  };

  useImperativeHandle(ref, () => ({
    isOpen: alertState.openState === AlertOpenState.OPENED,
    openAlert: handleOpen,
    closeAlert: handleClose,
  }));

  return { alertOpen: alertState.openState, data: alertState.data, handleClose };
};
