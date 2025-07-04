import React from "react";
import { CopyableCode } from "./CopyableCode";

export type CssVariableData = {
  variable: string;
  description: string;
  defaultValue: string;
  rootValue?: string;
};

type ComponentCssVariableTableProps = {
  data: CssVariableData[];
};

export const ComponentCssVariableTable = ({ data }: ComponentCssVariableTableProps) => {
  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h3>CSS Variables</h3>
      <p>Auto-generated documentation of all CSS variables used in this component.</p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "12px", textAlign: "left", border: "1px solid #ddd" }}>Variable</th>
            <th style={{ padding: "12px", textAlign: "left", border: "1px solid #ddd" }}>Description</th>
            <th style={{ padding: "12px", textAlign: "left", border: "1px solid #ddd" }}>Default Value</th>
            <th style={{ padding: "12px", textAlign: "left", border: "1px solid #ddd" }}>Root Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "monospace" }}>
                <CopyableCode value={item.variable} />
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{item.description}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "monospace" }}>
                {item.defaultValue}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "monospace" }}>
                {item.rootValue || item.defaultValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
