import { useState } from "react";

import { AlertOpenState, UseAlertOpenArgs, UseAlertOpenResult } from "../types";

export const useAlert = <TData = undefined>(props: UseAlertOpenArgs = {}): UseAlertOpenResult<TData> => {
  const { onOpen, onClose } = props;

  const [storedData, setStoredData] = useState<TData | undefined>(undefined);
  const [alertOpen, setAlertOpen] = useState<AlertOpenState>(AlertOpenState.CLOSED);

  const handleOpen = (data: TData | undefined) => {
    onOpen && onOpen();

    if (data !== undefined) {
      setStoredData(data);
    }

    setAlertOpen(AlertOpenState.OPENED);
  };

  const handleClose = () => {
    setAlertOpen(AlertOpenState.CLOSING);

    setTimeout(() => {
      onClose && onClose();

      setAlertOpen(AlertOpenState.CLOSED);
    }, 200);
  };

  return [handleOpen, { alertOpen, handleClose, data: storedData }] as UseAlertOpenResult<TData>;
};
