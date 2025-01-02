import { useState } from "react";
import { AlertOpenState, UseAlertOpenArgs, UseAlertOpenResult } from "../types";

export const useAlert = (props: UseAlertOpenArgs = {}): UseAlertOpenResult => {
  const { onOpen, onClose } = props;

  const [alertOpen, setAlertOpen] = useState<AlertOpenState>(AlertOpenState.CLOSED);

  const handleOpen = () => {
    onOpen && onOpen();

    setAlertOpen(AlertOpenState.OPENED);
  };

  const handleClose = () => {
    setAlertOpen(AlertOpenState.CLOSING);

    setTimeout(() => {
      onClose && onClose();

      setAlertOpen(AlertOpenState.CLOSED);
    }, 200);
  };

  return [handleOpen, { alertOpen, handleClose }];
};
