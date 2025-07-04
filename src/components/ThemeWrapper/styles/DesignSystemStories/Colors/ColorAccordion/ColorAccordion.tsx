import React from "react";

import { ExampleList } from "../../../../../../internalUtils/components/ExampleList/ExampleList";
import { Accordion } from "../../../../../Accordion";
import { ColorTokenType } from "../types";

export const ColorAccordion = ({
  colorTokens,
  forceBorder = false,
}: {
  colorTokens: ColorTokenType;
  forceBorder?: boolean;
}) => {
  return (
    <Accordion expansionMode="multiple">
      {Object.entries(colorTokens).map(([key, value]) => {
        const lowTextContrast = value[0].cssVariable.startsWith("--grey-color") || forceBorder;

        return (
          <Accordion.Section sectionId={key} key={key}>
            <Accordion.Toggle
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                color: lowTextContrast ? "var(--primary-text-color_300)" : `var(${value[0].cssVariable})`,
              }}
            >
              {key}
            </Accordion.Toggle>
            <Accordion.Content
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >
              <ExampleList cssVariableDetails={value}>
                {({ cssVariable }) => (
                  <div
                    style={{
                      background: `var(${cssVariable})`,
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      border: lowTextContrast ? "1px solid #ccc" : undefined,
                    }}
                  />
                )}
              </ExampleList>
            </Accordion.Content>
          </Accordion.Section>
        );
      })}
    </Accordion>
  );
};
