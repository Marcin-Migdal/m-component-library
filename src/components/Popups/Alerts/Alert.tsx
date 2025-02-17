import React, { PropsWithChildren } from "react";

import { AlertBody } from "./components/AlertBody";
import { AlertFooter } from "./components/AlertFooter";
import { AlertHeader } from "./components/AlertHeader";
import { AlertProps } from "./types";

/** A component for displaying alert messages with customizable header, body, and footer actions. */
const Alert = ({
  children,
  className,
  alertOpen,
  handleClose,
  header,
  ...otherProps
}: PropsWithChildren<AlertProps>) => {
  return (
    <AlertBody className={className} alertOpen={alertOpen} onClose={handleClose}>
      <AlertHeader onClose={handleClose} header={header} />
      <div className="m-alert-content m-scroll slim-scroll">{children}</div>
      <AlertFooter {...otherProps} />
    </AlertBody>
  );
};

export default Alert;
