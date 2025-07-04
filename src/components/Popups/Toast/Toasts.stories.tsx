import { Meta, StoryObj } from "@storybook/react/*";
import React, { useRef } from "react";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { Button } from "../../Button";
import { cssVariablesData } from "./Toasts.stories.consts";
import ToastsContainer from "./ToastsContainer";
import { ToastHandler } from "./types";

const meta: Meta<typeof ToastsContainer> = {
  title: "Components/Popups/Toast",
  component: ToastsContainer,
  argTypes: {
    toastsDuration: {
      control: { type: "number" },
      description: "The duration (in milliseconds) for which each toast will be displayed.",
      table: {
        defaultValue: { summary: "2000" },
        type: { summary: "number" },
      },
    },
    autoClose: {
      control: { type: "boolean" },
      description: "Whether the toasts should automatically close after the specified duration.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    toastsPosition: {
      control: false,
      description:
        "The position where toasts will appear on the screen. \n - `top-right` default toast position \n - `top-left` \n - `bottom-right` \n - `bottom-left`",
      table: {
        defaultValue: { summary: "top-right" },
        type: { summary: "top-left | top-right | bottom-left | bottom-right" },
      },
    },
    transformContent: {
      control: false,
      description: "Callback to transform the content of the toast before displaying it.",
      table: {
        type: { summary: "(content: string, type: 'title' | 'message') => string)" },
      },
    },
    toastConfig: {
      control: false,
      description: "With this props it is possible to pass custom toast config that differs from the default one",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastsContainer>;

export const ToastExample: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toastRef = useRef<ToastHandler>(null);

    return (
      <>
        <Button
          icon="thumbs-up"
          style={{ backgroundColor: "var(--success-color)", borderColor: "var(--success-color)" }}
          variant="full"
          text="Success"
          onClick={() =>
            toastRef.current?.addToast({
              disableTransformContent: true,
              type: "success",
              message: "Success toast message",
            })
          }
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
        <ToastsContainer {...args} ref={toastRef} transformContent={(text) => `${text} test test`} />
      </>
    );
  },
};

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
