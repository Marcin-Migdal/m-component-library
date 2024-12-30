import classNames from "classnames";
import React, { ReactElement, useEffect, useRef, useState } from "react";

import { getPosition } from "../../../../helpers";
import { CalculatedPosition, Position } from "../../../../helpers/getPosition/getPosition-types";
import { DropdownOptionsProps } from "../types";

import "./DropdownOptions.css";

type DropdownOptionsStyles = {
  opacity: number;
  maxHeight: number;
} & Position;

export const DropdownOptions = <T,>({
  filterElement,
  uniqueDropdownId,
  handleDropdownChange,
  dropdownOptions,
  value,
  valueKey,
  labelKey,
  classNamesObj,
}: DropdownOptionsProps<T>) => {
  const ref = useRef<HTMLUListElement>(null);
  const [dropdownOptionsStyles, setDropdownOptionsStyles] = useState<DropdownOptionsStyles | undefined>({
    top: 0,
    left: 0,
    width: 0,
    calculatedPosition: CalculatedPosition.AUTO_BOTTOM,
    opacity: 0,
    maxHeight: 0,
  });

  useEffect(() => {
    const element = ref.current;

    const resizeObserver = new ResizeObserver(() => {
      if (!element) {
        return;
      }

      const position: Position = getPosition(filterElement, ref.current, { consumerHasParentWidth: true });

      const children = Array.from(element.children) as HTMLLIElement[];

      const totalHeight = children.slice(0, 6).reduce((sum, child) => sum + child.offsetHeight, 0);

      const maxHeight = totalHeight;

      setDropdownOptionsStyles({ ...position, maxHeight, opacity: 1 });
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <ul
      ref={ref}
      className={classNames("m-dropdown-options", "m-scroll slim-scroll", classNamesObj?.dropdownOptions)}
      style={dropdownOptionsStyles}
      data-id={uniqueDropdownId}
    >
      {dropdownOptions && dropdownOptions.length > 0 ? (
        dropdownOptions.map((option) => {
          return (
            <li
              key={option[valueKey] as string}
              data-id={uniqueDropdownId}
              onClick={(e) => handleDropdownChange(e, option)}
              className={classNames("m-dropdown-option", "truncate-text", classNamesObj?.dropdownOption, {
                selected: option[valueKey] === value?.[valueKey],
              })}
            >
              {option[labelKey] as ReactElement}
            </li>
          );
        })
      ) : (
        <li
          data-id={uniqueDropdownId}
          className={classNames("m-dropdown-option empty-message", classNamesObj?.emptyDropdownOption)}
        >
          No options
        </li>
      )}
    </ul>
  );
};
