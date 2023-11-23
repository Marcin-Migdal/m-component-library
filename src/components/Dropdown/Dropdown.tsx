import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { DropdownProps, IDropdownChangeEvent } from "./dropdown-interfaces";

import "./Dropdown.css";

const Dropdown = (props: DropdownProps) => {
    const {
        value = undefined,
        name = undefined,
        disabled = false,
        onChange,
        label,
        labelType = "floating",
        placeholder,
        labelWidth = 30,
        floatingInputWidth = 100,
        options = undefined,
        labelKey = "label",
        valueKey = "value",
        clearable = true,
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [internalValue, setInternalValue] = useState<any | undefined>(undefined);
    const [filterValue, setFilterValue] = useState<string>("");
    const [dropdownOptions, setDropdownOptions] = useState<any[]>([]);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const [uniqueDropdownId] = useState<string>(uuId());

    const _value = value != undefined ? value : internalValue;

    useEffect(() => {
        const filterOptions = () => {
            if (!options || options.length == 0) return;

            let dropdownOptions: any[] = [];

            if (filterValue) dropdownOptions = options.filter((option) => (option[labelKey] as string).includes(filterValue));
            else dropdownOptions = options;

            setDropdownOptions(dropdownOptions);
        };

        filterOptions();
    }, [filterValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target: HTMLElement = event.target as HTMLElement;

            if (
                ref.current &&
                (!ref.current.contains(target) || target?.className.includes("m-dropdown-container")) &&
                (!target.getAttribute("data-id") || target.getAttribute("data-id") != uniqueDropdownId)
            ) {
                setIsFocused(false);
            }
        };

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code == "Escape") setIsFocused(false);
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFilterValue(e.target.value);
    };

    const handleDropdownChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, selectedOption: any): void => {
        if (onChange) {
            let _e: IDropdownChangeEvent = { ...e, target: { ...e.target, value: selectedOption, name: name, type: "dropdown" } };

            onChange(_e, selectedOption);
        }

        setFilterValue("");
        setInternalValue(selectedOption);
        setIsFocused(false);
    };

    const handleClear = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setFilterValue("");
        setInternalValue(undefined);
        setIsFocused(false);

        if (onChange) {
            let _e: IDropdownChangeEvent = { ...e, target: { ...e.target, value: undefined, name: name, type: "dropdown" } };

            onChange(_e, undefined);
        }
    };

    const labelClasses = `m-dropdown-label
    m-dropdown-label--${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelWidth}%` : "unset",
        width: labelType == "floating" ? `${floatingInputWidth}%` : `${100 - labelWidth}%`,
    };

    return (
        <div
            ref={ref}
            className={`m-dropdown-container ${labelType == "floating" && isFocused ? "focused" : filterValue || _value ? "filled" : ""} ${
                disabled ? "disabled" : ""
            }`}
        >
            {/* input placeholder, displays selected value, also work as a filter input */}
            <input
                ref={inputRef}
                disabled={disabled}
                data-id={uniqueDropdownId}
                className={`m-dropdown ${labelType}`}
                type="text"
                style={inputStyle}
                value={(isFocused ? filterValue : _value?.[labelKey]) || ""}
                onChange={handleFilterChange}
                onFocus={handleFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
            />

            {/* input label */}
            {label && (
                <label
                    data-id={uniqueDropdownId}
                    style={{
                        width: `${labelWidth}%`,
                        left: labelType == "right" ? `${`${100 - labelWidth}%`}` : "0",
                    }}
                    className={labelClasses}
                >
                    {labelType == "floating" ? (isFocused || _value ? label : `${label}...`) : label}
                </label>
            )}

            {/* input icons */}
            <FontAwesomeIcon className="m-dropdown-icon" icon="angle-down" />
            {clearable && <FontAwesomeIcon className="m-dropdown-clear-icon" icon="close" onClick={(e) => handleClear(e)} />}

            {/* dropdown items */}
            {isFocused &&
                ref.current &&
                inputRef.current &&
                createPortal(
                    <ul
                        className="m-dropdown-list"
                        style={{
                            position: "absolute",
                            top: ref.current.offsetTop + ref.current.offsetHeight,
                            left: ref.current.offsetLeft,
                            width: `${inputRef.current.clientWidth}px`,
                        }}
                        data-id={uniqueDropdownId}
                    >
                        {dropdownOptions && dropdownOptions.length > 0 ? (
                            dropdownOptions.map((option) => (
                                <li
                                    data-id={uniqueDropdownId}
                                    onClick={(e) => handleDropdownChange(e, option)}
                                    className={`m-dropdown-list-item ${option[valueKey] == _value?.[valueKey] ? "selected" : ""}`}
                                >
                                    {option[labelKey]}
                                </li>
                            ))
                        ) : (
                            <>
                                <li data-id={uniqueDropdownId} className="m-dropdown-list-item empty-message">
                                    No options
                                </li>
                            </>
                        )}
                    </ul>,
                    document.getElementById("wrapper-root") as HTMLElement
                )}
        </div>
    );
};

export default Dropdown;
