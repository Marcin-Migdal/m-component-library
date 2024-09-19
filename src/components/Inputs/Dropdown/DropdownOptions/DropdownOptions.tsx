import React, { ReactElement, useEffect, useRef, useState } from "react";

import { getPosition } from "../../../../helpers";
import { Position } from "../../../../helpers/getPosition/getPosition-types";
import { DropdownOptionsProps } from "../types";

import "./DropdownOptions.css";

export const DropdownOptions = <T,>({
    filterElement,
    uniqueDropdownId,
    handleDropdownChange,
    dropdownOptions,
    value,
    valueKey,
    labelKey,
}: DropdownOptionsProps<T>) => {
    const ref = useRef<HTMLUListElement>(null);
    const [position, setPosition] = useState<Position | { opacity: number } | undefined>({ opacity: 0 });

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        setPosition(getPosition(filterElement, ref.current, { consumerHasParentWidth: true }));
    }, []);

    return (
        <ul ref={ref} className="m-dropdown-list" style={position} data-id={uniqueDropdownId}>
            {dropdownOptions && dropdownOptions.length > 0 ? (
                dropdownOptions.map((option) => {
                    return (
                        <li
                            key={option[valueKey] as string}
                            data-id={uniqueDropdownId}
                            onClick={(e) => handleDropdownChange(e, option)}
                            className={`m-dropdown-list-item ${option[valueKey] == value?.[valueKey] ? "selected" : ""}`}
                        >
                            {option[labelKey] as ReactElement}
                        </li>
                    );
                })
            ) : (
                <li data-id={uniqueDropdownId} className="m-dropdown-list-item empty-message">
                    No options
                </li>
            )}
        </ul>
    );
};
