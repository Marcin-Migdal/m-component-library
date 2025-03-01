import { useCallback, useState } from "react";

import { SidePanelOpenState, UseSidePanelArgs, UseSidePanelResult } from "../types";

export const useSidePanel = (props: UseSidePanelArgs = {}): UseSidePanelResult => {
  const { onOpen, onClose } = props;

  const [sidePanelOpen, setSidePanelOpen] = useState<SidePanelOpenState>(SidePanelOpenState.CLOSED);

  const handleOpen = useCallback(() => {
    if (sidePanelOpen !== SidePanelOpenState.CLOSED) {
      return;
    }

    onOpen && onOpen();

    setSidePanelOpen(SidePanelOpenState.MOUNTED);

    setTimeout(() => {
      onClose && onClose();

      setSidePanelOpen(SidePanelOpenState.OPENED);
    }, 0);
  }, [sidePanelOpen]);

  const handleClose = useCallback(() => {
    if (sidePanelOpen !== SidePanelOpenState.OPENED) {
      return;
    }

    setSidePanelOpen(SidePanelOpenState.CLOSING);

    setTimeout(() => {
      onClose && onClose();

      setSidePanelOpen(SidePanelOpenState.CLOSED);
    }, 200);
  }, [sidePanelOpen]);

  return [handleOpen, { sidePanelOpen, handleClose }];
};
