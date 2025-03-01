import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Button } from "../../Button";
import SidePanel from "./SidePanel";
import { useSidePanel } from "./hooks/useSidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "Components/Layout/SidePanel",
  component: SidePanel,
  argTypes: {
    sidePanelOpen: {
      description: "Current state of the side panel `mounted` `opened` `closing` `closed`",
      control: false,
      table: {
        type: {
          summary: "SidePanelOpenState",
          detail:
            "This props under normal circumstances should come from object `sidePanelProps`.\n`sidePanelProps` comes from special `useSidePanel` hook dedicated to `SidePanel` component. \n \neq.\nconst [handleOpen, sidePanelProps] = useSidePanel();",
        },
      },
    },
    className: {
      description: "Additional CSS class for the side panel.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    handleClose: {
      description:
        "Callback function to close the side panel. <br/> <br/> <b>If</b> you are not using dedicated `handleClose` function returned by `useSidePanel` hook <br/> <b>Be sure to wrap function passed in handleClose with useCallback.</b> ",
      control: false,
      table: { type: { summary: "() => void" } },
    },
    position: {
      description: "Position of the side panel \n - `left` default position. \n - `right`",
      control: "radio",
      options: ["left", "right"],
      table: {
        type: { summary: "left | right" },
        defaultValue: { summary: "left" },
      },
    },
    alwaysOpen: {
      description: "Whether the side panel should always remain open.",
      control: "boolean",
      table: {
        type: { summary: "false" },
        defaultValue: { summary: "false" },
      },
    },
    closeOnOutsideClick: {
      description: "Whether the side panel should close when user clicks outside the side panel.",
      control: "boolean",
      table: {
        type: { summary: "false" },
        defaultValue: { summary: "false" },
      },
    },
  },
  decorators: [
    (_Story, { args }) => {
      const [handleOpen, sidePanelProps] = useSidePanel();

      return (
        <div>
          <Button text="Open alert" onClick={handleOpen} />
          <SidePanel {...args} {...sidePanelProps}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2 style={{ margin: "unset", marginBottom: "1rem" }}>Title</h2>
              <Button text="Close" onClick={sidePanelProps.handleClose} variant="full" disableDefaultMargin />
            </div>
          </SidePanel>
        </div>
      );
    },
  ],
};

export default meta;

export const Default: StoryObj<typeof SidePanel> = {};
export const Position: StoryObj<typeof SidePanel> = { args: { position: "right" } };
export const CloseOnOutsideClick: StoryObj<typeof SidePanel> = { args: { closeOnOutsideClick: true } };
