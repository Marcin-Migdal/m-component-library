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
};

export const useOpen = ({ defaultOpenStatus = OpenStatus.CLOSED, delay = 150 }: UseOpenProps) => {
    const [openStatus, setOpenStatus] = useState<OpenStatus>(defaultOpenStatus);

    const handleClose = () => {
        setOpenStatus(OpenStatus.CLOSING);

        setTimeout(() => {
            setOpenStatus(OpenStatus.CLOSED);
        }, delay);
    };

    const handleOpen = () => {
        setOpenStatus(OpenStatus.MOUNTED);

        setTimeout(() => {
            setOpenStatus(OpenStatus.OPENED);
        }, delay);
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

    return { openStatus, toggleOpenStatus, handleClose, handleOpen, handleSetOpenStatus };
};
