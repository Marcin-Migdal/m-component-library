import React from "react";

import { Button } from "../../Button";
import { useSidePanel } from "./hooks/useSidePanel";
import { SidePanel } from "./SidePanel";

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StorySidePanelWrapper = () => {
  const [handleOpen, sidePanelProps] = useSidePanel();

  return (
    <>
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
    </>
  );
};

export default StorySidePanelWrapper;
