import { useState } from "react";

import { SidePanelOpenState, UseSidePanelArgs, UseSidePanelResult } from "../types";

export const useSidePanel = (props: UseSidePanelArgs = {}): UseSidePanelResult => {
  const { onOpen, onClose } = props;

  const [sidePanelOpen, setSidePanelOpen] = useState<SidePanelOpenState>(SidePanelOpenState.CLOSED);

  const handleOpen = () => {
    onOpen && onOpen();

    setSidePanelOpen(SidePanelOpenState.MOUNTED);

    setTimeout(() => {
      onClose && onClose();

      setSidePanelOpen(SidePanelOpenState.OPENED);
    }, 0);
  };

  const handleClose = () => {
    setSidePanelOpen(SidePanelOpenState.CLOSING);

    setTimeout(() => {
      onClose && onClose();

      setSidePanelOpen(SidePanelOpenState.CLOSED);
    }, 200);
  };

  return [handleOpen, { sidePanelOpen, handleClose }];
};
