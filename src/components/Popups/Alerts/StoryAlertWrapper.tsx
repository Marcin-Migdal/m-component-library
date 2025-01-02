import React from "react";

import { Button } from "../../Button";
import Alert from "./Alert";
import { useAlert } from "./hooks/useAlert";
import { AlertFooterProps, AlertHeaderProps } from "./types";

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryAlertWrapper = ({
  header = "Alert header",
  ...otherProps
}: Omit<AlertHeaderProps, "onClose"> & Omit<AlertFooterProps, "onConfirmBtnClick" | "onDeclineBtnClick">) => {
  const [handleOpen, alertProps] = useAlert();

  return (
    <>
      <Button text="Open alert" onClick={handleOpen} />
      <Alert
        {...alertProps}
        {...otherProps}
        header={header}
        onConfirmBtnClick={() => {
          // eslint-disable-next-line no-console
          console.log("Confirm Button Click"); // console log used for documentation
        }}
        onDeclineBtnClick={() => {
          // eslint-disable-next-line no-console
          console.log("Decline Button Click"); // console log used for documentation
        }}
      >
        test
      </Alert>
    </>
  );
};

export default StoryAlertWrapper;
