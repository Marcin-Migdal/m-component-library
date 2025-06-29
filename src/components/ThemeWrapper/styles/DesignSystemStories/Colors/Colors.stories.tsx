import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Checkbox } from "../../../../Inputs";
import ThemeWrapper from "../../../ThemeWrapper";
import { ColorAccordion } from "./ColorAccordion/ColorAccordion";
import { commonColorTokens, modeColorTokens, themeColorTokens } from "./consts";

const meta: Meta = {
  title: "Design System/Colors",
  tags: ["!autodocs"],
};

export default meta;

export const Base: StoryObj = {
  render: () => <ColorAccordion colorTokens={commonColorTokens} />,
};

export const Mode: StoryObj = {
  name: "Light & Dark mode",
  parameters: { disableGlobalDecorator: true },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
      <ThemeWrapper darkMode={isDarkMode}>
        <div style={{ padding: "1rem" }}>
          <Checkbox
            label="Dark mode"
            checked={isDarkMode}
            onChange={(e) => setIsDarkMode(e.target.checked)}
            labelWidth={10}
          />
          <ColorAccordion colorTokens={modeColorTokens} forceBorder />
        </div>
      </ThemeWrapper>
    );
  },
};

export const Theme: StoryObj = {
  name: "Default & Custom Theme",
  parameters: { disableGlobalDecorator: true },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isCustomTheme, setCustomTheme] = useState<boolean>(false);

    return (
      <ThemeWrapper darkMode={isDarkMode} hue={isCustomTheme ? 194 : undefined}>
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "flex" }}>
            <Checkbox
              label="Custom"
              checked={isCustomTheme}
              onChange={(e) => setCustomTheme(e.target.checked)}
              labelWidth={60}
              classNamesObj={{ container: "w-125-px" }}
            />
            <Checkbox
              label="Dark mode"
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
              labelWidth={50}
              classNamesObj={{ container: "w-200-px" }}
            />
          </div>
          <ColorAccordion colorTokens={themeColorTokens} forceBorder />
        </div>
      </ThemeWrapper>
    );
  },
};
