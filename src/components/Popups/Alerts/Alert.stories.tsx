import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Button } from "../../Button";
import Alert from "./Alert";
import { useAlert } from "./hooks/useAlert";

const meta: Meta<typeof Alert> = {
  title: "Components/Popups/Alert",
  component: Alert,
  args: { header: "Alert header" },
  argTypes: {
    header: { description: "The header text for the alert." },
    alertOpen: {
      control: false,
    },
    confirmBtnText: {
      table: {
        defaultValue: { summary: "Confirm" },
      },
    },
    confirmBtnDisabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    declineBtnText: {
      table: {
        defaultValue: { summary: "Close" },
      },
    },
    declineBtnDisabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert();

    return (
      <>
        <Button text="Open alert" onClick={() => handleOpen()} />
        <Alert
          {...alertProps}
          {...args}
          onConfirm={() => {
            // eslint-disable-next-line no-console
            console.log("Confirm Button Click"); // console log used for documentation
          }}
          onDecline={() => {
            // eslint-disable-next-line no-console
            console.log("Decline Button Click"); // console log used for documentation
          }}
        >
          Alert content
        </Alert>
      </>
    );
  },
};
