import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import { getPosition } from "../../../../utils";
import { CalculatedPosition, Position } from "../../../../utils/getPosition/getPosition-types";
import { DropdownOptionComponentProps, DropdownOptionsProps, EmptyMessageComponentProps } from "../types";

import "./DropdownOptionsComponent.scss";

type DropdownOptionsStyles = {
  opacity: number;
  maxHeight: number;
} & Position;

export const DropdownOptionsComponent = <T,>({
  id,
  filterElement,
  noOptionsMessage,
  classNamesObj,
  options,
  valueKey,
  labelKey,
  value,
  Option: optionComponent,
  EmptyMessage: emptyMessageComponent,
  optionHeightFit,
  menuPositionConfig,
  handleDropdownChange,
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
      if (!element || !filterElement) {
        return;
      }

      const position: Position = getPosition(filterElement, element, {
        consumerHasParentWidth: true,
        ...menuPositionConfig,
      });

      const children = Array.from(element.children) as HTMLLIElement[];

      const totalHeight = children.slice(0, optionHeightFit).reduce((sum, child) => sum + child.offsetHeight, 0);

      const maxHeight = totalHeight;

      setDropdownOptionsStyles({ ...position, maxHeight, opacity: 1 });
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const listContainer = ref.current;

    if (listContainer) {
      const selectedElement = listContainer.querySelector("li.selected") as HTMLLIElement | null;

      if (selectedElement) {
        listContainer.scrollTop = selectedElement.offsetTop;
      }
    }
  }, []);

  const emptyMessageProps: EmptyMessageComponentProps = {
    id,
    className: classNames("m-dropdown-option empty-message", classNamesObj?.emptyDropdownOptionClassName),
    noOptionsMessage,
  };

  return (
    <ul
      id={`dropdown-option-${id}`}
      ref={ref}
      className={classNames("m-dropdown-options", "m-scroll slim-scroll", classNamesObj?.dropdownOptionsClassName)}
      style={dropdownOptionsStyles}
    >
      {options && options.length > 0
        ? options.map((option) => {
            const optionProps: DropdownOptionComponentProps<T> = {
              className: classNames("m-dropdown-option", "truncate-text", classNamesObj?.dropdownOptionClassName, {
                selected: option[valueKey] === value?.[valueKey],
              }),
              option,
              valueKey,
              labelKey,
              id,
              handleDropdownChange,
            };

            return optionComponent(optionProps);
          })
        : emptyMessageComponent(emptyMessageProps)}
    </ul>
  );
};
