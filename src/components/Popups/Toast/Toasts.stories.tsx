import { Meta, StoryObj } from "@storybook/react/*";
import React, { useRef } from "react";

import { Button } from "../../Button";
import ToastsContainer from "./ToastsContainer";
import { ToastHandler } from "./types";

const meta: Meta<typeof ToastsContainer> = {
  title: "Components/Popups",
  component: ToastsContainer,
  args: {
    autoClose: true,
    toastsPosition: "top-right",
  },
};

export default meta;

type Story = StoryObj<typeof ToastsContainer>;

export const ToastExample: Story = {
  render: (args) => {
    const toastRef = useRef<ToastHandler>(null);

    return (
      <>
        <Button
          icon="thumbs-up"
          style={{ backgroundColor: "var(--success-color)", borderColor: "var(--success-color)" }}
          variant="full"
          text="Success"
          onClick={() => toastRef.current?.addToast({ type: "success", message: "Success toast message" })}
        />
        <Button
          icon="circle-xmark"
          style={{ backgroundColor: "var(--failure-color)", borderColor: "var(--failure-color)" }}
          variant="full"
          text="Failure"
          onClick={() => toastRef.current?.addToast({ type: "failure", message: "Failure toast message" })}
        />
        <Button
          icon="exclamation-circle"
          style={{ backgroundColor: "var(--warning-color)", borderColor: "var(--warning-color)" }}
          variant="full"
          text="Warning"
          onClick={() => toastRef.current?.addToast({ type: "warning", message: "Warning toast message" })}
        />
        <Button
          icon="info-circle"
          style={{ backgroundColor: "var(--information-color)", borderColor: "var(--information-color)" }}
          variant="full"
          text="Information"
          onClick={() => toastRef.current?.addToast({ type: "information", message: "Information toast message" })}
        />
        <Button icon="times" text="Clear" onClick={() => toastRef.current?.clear()} />
        <ToastsContainer {...args} ref={toastRef} />
      </>
    );
  },
};
