import React, { useRef } from "react";

import { Button } from "../../Button";
import Alert from "./Alert";
import { AlertFooterProps, AlertHandler, AlertHeaderProps } from "./types";

type AlertDataTest = {
  text: string;
};

const alertData: AlertDataTest = {
  text: "Passed alert data",
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryAlertWrapper = ({
  header,
  ...otherProps
}: Omit<AlertHeaderProps, "onClose"> &
  Omit<AlertFooterProps<AlertDataTest>, "onConfirmBtnClick" | "onDeclineBtnClick">) => {
  const alertRef = useRef<AlertHandler<AlertDataTest>>(null);

  return (
    <>
      <Button text="Open alert" onClick={() => alertRef.current?.openAlert(alertData)} />
      <Alert
        ref={alertRef}
        header={{ header }}
        footer={{
          ...otherProps,
          onConfirmBtnClick: (data) => {
            // eslint-disable-next-line no-console
            console.log("Confirm Button Click: ", data); // console log used for documentation
          },
          onDeclineBtnClick: () => {
            // eslint-disable-next-line no-console
            console.log("Decline Button Click"); // console log used for documentation
          },
        }}
      >
        test
      </Alert>
    </>
  );
};

export default StoryAlertWrapper;
