import React, { ReactElement } from "react";

import { DropdownOptionComponentProps } from "../types";

export const DropdownOptionComponent = <T,>({
  option,
  valueKey,
  labelKey,
  id,
  className,
  handleDropdownChange,
}: DropdownOptionComponentProps<T>) => {
  return (
    <li
      id={`dropdown-option-${id}`}
      key={option[valueKey] as string}
      onClick={(e) => handleDropdownChange(e, option)}
      className={className}
    >
      {option[labelKey] as ReactElement}
    </li>
  );
};
