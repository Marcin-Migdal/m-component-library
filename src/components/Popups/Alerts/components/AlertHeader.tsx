import React from "react";

import { Icon } from "../../../Miscellaneous/Icon";
import { AlertHeaderProps } from "../types";

export const AlertHeader = ({ header, onClose }: AlertHeaderProps) => {
  return (
    <div className="m-alert-header">
      {header && <h4>{header}</h4>}
      <Icon onClick={onClose} icon={["fas", "xmark"]} />
    </div>
  );
};
