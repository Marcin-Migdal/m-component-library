import React, { CSSProperties, ReactNode, useLayoutEffect, useRef, useState } from "react";

import { VariableDetails } from "./VariableDetails";

type ExampleListProps = {
  cssVariableDetails: VariableDetails[];
  children: ({ cssVariable }: { cssVariable: string }) => ReactNode;
};

export const ExampleList = ({ cssVariableDetails, children }: ExampleListProps) => {
  const exampleListRef = useRef<HTMLUListElement>(null);

  const [calculatedWidth, setCalculatedWidth] = useState<CSSProperties["width"]>("fit-content");

  useLayoutEffect(() => {
    const exampleListElement = exampleListRef.current;

    if (!exampleListElement) {
      return;
    }

    const exampleListItems = exampleListElement.querySelectorAll("#example-list");

    let maxWidth: number | undefined = undefined;

    exampleListItems.forEach((exampleListItem) => {
      const variable = exampleListItem.querySelector("#example-list-item-variable");
      const values = exampleListItem.querySelector("#example-list-item-values");

      if (!variable) {
        return;
      }

      const newMaxWidth = variable.clientWidth + (values?.clientWidth ?? 0);

      if (!maxWidth || maxWidth < newMaxWidth) {
        maxWidth = newMaxWidth;
      }
    });

    setCalculatedWidth(`${maxWidth}px`);
  }, [cssVariableDetails]);

  return (
    <ul style={{ listStyle: "none", paddingLeft: "unset" }} ref={exampleListRef}>
      {cssVariableDetails.map((cssVariableDetail) => (
        <li
          key={cssVariableDetail.cssVariable}
          id="example-list"
          style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.5rem" }}
        >
          <VariableDetails calculatedWidth={calculatedWidth} cssVariableDetail={cssVariableDetail} />
          {children({ cssVariable: cssVariableDetail.cssVariable })}
        </li>
      ))}
    </ul>
  );
};
