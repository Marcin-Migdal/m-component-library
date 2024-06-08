import React, { useRef } from "react";

import Button from "../../Button";
import Alert from "./Alert";
import { AlertFooterProps } from "./components/AlertFooter";
import { AlertHeaderProps } from "./components/AlertHeader";
import { AlertHandler } from "./hooks/useAlertOpen";

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryAlertWrapper = ({
    header,
    ...otherProps
}: Omit<AlertHeaderProps, "onClose"> & Omit<AlertFooterProps, "onConfirmBtnClick" | "onDeclineBtnClick">) => {
    const alertRef = useRef<AlertHandler>(null);

    return (
        <>
            <Button text="Open alert" onClick={() => alertRef.current?.openAlert()} />
            <Alert
                ref={alertRef}
                header={{ header }}
                footer={{
                    ...otherProps,
                    onConfirmBtnClick: () => console.log("Confirm Button Click"),
                    onDeclineBtnClick: () => console.log("Decline Button Click"),
                }}
            >
                test
            </Alert>
        </>
    );
};

export default StoryAlertWrapper;
