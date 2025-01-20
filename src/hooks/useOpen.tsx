import { useState } from "react";

export enum OpenStatus {
  CLOSED = "closed",
  CLOSING = "closing",
  MOUNTED = "mounted",
  OPENED = "opened",
}

type UseOpenProps = {
  defaultOpenStatus?: OpenStatus;
  delay?: number;
  openDelay?: number;
  closeDelay?: number;
};

export const useOpen = ({
  defaultOpenStatus = OpenStatus.CLOSED,
  delay = 150,
  openDelay,
  closeDelay,
}: UseOpenProps) => {
  const [openStatus, setOpenStatus] = useState<OpenStatus>(defaultOpenStatus);

  const handleOpen = () => {
    setOpenStatus(OpenStatus.MOUNTED);

    setTimeout(() => {
      setOpenStatus(OpenStatus.OPENED);
    }, openDelay || delay);
  };

  const handleClose = () => {
    setOpenStatus(OpenStatus.CLOSING);

    setTimeout(() => {
      setOpenStatus(OpenStatus.CLOSED);
    }, closeDelay || delay);
  };

  const toggleOpenStatus = () => {
    if ([OpenStatus.MOUNTED, OpenStatus.OPENED].includes(openStatus)) {
      handleClose();
      return;
    }

    handleOpen();
  };

  const handleSetOpenStatus = (newOpenStatus: OpenStatus) => {
    setOpenStatus(newOpenStatus);
  };

  return { openStatus, toggleOpenStatus, handleOpen, handleClose, handleSetOpenStatus };
};
