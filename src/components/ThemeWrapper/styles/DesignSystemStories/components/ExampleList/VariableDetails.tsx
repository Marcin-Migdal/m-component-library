import React, { CSSProperties } from "react";
import { CopyableCode } from "../CopyableCode";

export type VariableDetails = {
  cssVariable: string;
  values?: string[];
};

type VariableDetailsProps = {
  calculatedWidth: CSSProperties["width"];
  cssVariableDetail: VariableDetails;
};

export const VariableDetails = ({ calculatedWidth, cssVariableDetail }: VariableDetailsProps) => {
  const { cssVariable, values } = cssVariableDetail;

  return (
    <div style={{ width: calculatedWidth, display: "flex" }}>
      <CopyableCode id="example-list-item-variable" value={cssVariable} style={{ marginRight: "auto" }} />

      {values && (
        <div id="example-list-item-values" style={{ margin: "unset", whiteSpace: "nowrap", paddingLeft: "1rem" }}>
          (
          {values.map((value, index) => {
            return (
              <>
                <span>{value}</span>
                {values.length - 1 !== index && <span style={{ marginRight: "0.25rem" }}>,</span>}
              </>
            );
          })}
          )
        </div>
      )}
    </div>
  );
};
