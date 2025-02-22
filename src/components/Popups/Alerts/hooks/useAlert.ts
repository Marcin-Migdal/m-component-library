import { useRef, useState } from "react";
import { AlertOpenState, UseAlertOpenArgs, UseAlertOpenResult } from "../types";

export const useAlert = <TData = undefined>(props: UseAlertOpenArgs = {}): UseAlertOpenResult<TData> => {
  const { onOpen, onClose } = props;
  const dataRef = useRef<TData | undefined>(undefined);

  const [alertOpen, setAlertOpen] = useState<AlertOpenState>(AlertOpenState.CLOSED);

  const handleOpen = (data: TData) => {
    onOpen && onOpen();

    if (data !== undefined) {
      dataRef.current = data;
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

  return [handleOpen, { alertOpen, handleClose, data: dataRef.current }] as UseAlertOpenResult<TData>;
};
