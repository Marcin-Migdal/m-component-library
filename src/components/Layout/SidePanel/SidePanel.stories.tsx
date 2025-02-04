import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Button } from "../../Button";
import { SidePanel } from "./SidePanel";
import { useSidePanel } from "./hooks/useSidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "Components/Layout/SidePanel",
  component: SidePanel,
};

export default meta;

export const SimpleSidePanel: StoryObj<typeof SidePanel> = {
  render: () => {
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
