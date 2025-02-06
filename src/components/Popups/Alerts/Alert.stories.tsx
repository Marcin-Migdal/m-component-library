import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Button } from "../../Button";
import Alert from "./Alert";
import { useAlert } from "./hooks/useAlert";

const meta: Meta<typeof Alert> = {
  title: "Components/Popups/Alert",
  component: Alert,
  args: { header: "Alert header" },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertExample: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert();

    return (
      <>
        <Button text="Open alert" onClick={handleOpen} />
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
          test
        </Alert>
      </>
    );
  },
};
