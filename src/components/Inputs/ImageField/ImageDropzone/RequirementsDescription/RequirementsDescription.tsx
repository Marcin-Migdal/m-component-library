import React, { useRef } from "react";
import { Tooltip } from "../../../../Miscellaneous";

type RequirementsDescriptionProps = {
  validationDescription: string[];
};

export const RequirementsDescription = ({ validationDescription }: RequirementsDescriptionProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <span ref={spanRef} className="m-bold-message-main">
        (Other requirements)
      </span>
      <Tooltip targetRef={spanRef}>
        {validationDescription.map((validation) => (
          <p>{validation}</p>
        ))}
      </Tooltip>
    </>
  );
};
