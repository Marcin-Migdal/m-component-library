import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { generateHiddenArgTypes } from "../../../internalUtils/generateHiddenArgTypes";
import { Button } from "../../Button";
import SidePanel from "./SidePanel";
import { useSidePanel } from "./hooks/useSidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "Components/Layout/SidePanel",
  component: SidePanel,
  argTypes: {
    ...generateHiddenArgTypes(["handleClose"]),
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
    position: {
      description: "Position of the side panel \n - `left` default position. \n - `right`",
      control: false,
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
  },
};

export default meta;

export const LeftSidePanel: StoryObj<typeof SidePanel> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, sidePanelProps] = useSidePanel();

    return (
      <div>
        <Button text="Open alert" onClick={handleOpen} />
        <SidePanel {...sidePanelProps}>
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
};

export const RightSidePanel: StoryObj<typeof SidePanel> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, sidePanelProps] = useSidePanel();

    return (
      <div>
        <Button text="Open alert" onClick={handleOpen} />
        <SidePanel position="right" {...sidePanelProps}>
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
};
