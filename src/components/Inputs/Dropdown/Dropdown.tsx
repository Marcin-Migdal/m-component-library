import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, FocusEvent, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputStyle, getInputsErrorStyle } from "../input-helpers";
import { DropdownProps, DropdownValue, IDropdownChangeEvent, IDropdownClearEvent } from "./dropdown-interfaces";

import "./Dropdown.css";
import { DropdownOptions } from "./DropdownOptions/DropdownOptions";

type ILabelValue = {
    value: string | number;
    label: string;
};

function Dropdown<T extends { [key: string]: string | number } = ILabelValue>(props: DropdownProps<T>) {
    const {
        value = undefined,
        name = undefined,
        disabled = false,
        onChange,
        onClear,
        onFocus,
        label,
        error,
        labelType = "left",
        placeholder,
        labelWidth = 30,
        floatingInputWidth = 100,
        options = [],
        labelKey = "label",
        valueKey = "value",
        size = "medium",

        clearable = true,
        readOnly = false,
        filter = true,

        ...otherProps
    } = props;

    const filterRef = useRef<HTMLInputElement>(null);

    const [internalValue, setInternalValue] = useState<DropdownValue<T>>(undefined);
    const [filterValue, setFilterValue] = useState<string>("");
    const [dropdownOptions, setDropdownOptions] = useState<T[]>([]);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const [uniqueDropdownId] = useState<string>(uuId());

    const _value = value || internalValue;

    useEffect(() => {
        const filterOptions = () => {
            if (!options || options.length == 0) return;

            let dropdownOptions: T[] = [];

            if (filterValue)
                dropdownOptions = options.filter((option) => {
                    let label = option[labelKey] as number | string;
                    label = typeof label === "string" ? label : label.toString();

                    return label.includes(filterValue);
                });
            else dropdownOptions = options;

            setDropdownOptions(dropdownOptions);
        };

        filterOptions();
    }, [filterValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target: HTMLElement = event.target as HTMLElement;

            if (!filterRef.current) return;

            if (
                (!filterRef.current.contains(target) ||
                    (typeof target?.className == "string" && target?.className.includes("m-dropdown-container"))) &&
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

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFilterValue(e.target.value);
    };

    const handleDropdownChange = (e: ReactMouseEvent<HTMLLIElement, MouseEvent>, selectedOption: T): void => {
        setFilterValue("");
        setInternalValue(selectedOption);
        setIsFocused(false);

        if (onChange) {
            let _e: IDropdownChangeEvent<T> = { ...e, target: { ...e.target, value: selectedOption, name: name, type: "dropdown" } };

            onChange(_e, selectedOption as T);
        }
    };

    const handleClear = (e: ReactMouseEvent<SVGSVGElement, MouseEvent>) => {
        setFilterValue("");
        setInternalValue(undefined);
        setIsFocused(false);

        if (onClear) {
            let _e: IDropdownClearEvent<T> = { ...e, target: { ...e.target, value: undefined, name: name, type: "dropdown" } };

            onClear(_e, undefined);
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        onFocus && onFocus(e);

        setIsFocused(true);
    };

    return (
        <div className={`m-dropdown-container ${size} ${error ? "error" : ""}`} {...otherProps}>
            {/* input placeholder, displays selected value, also work as a filter input */}
            <input
                ref={filterRef}
                disabled={disabled}
                data-id={uniqueDropdownId}
                className={`m-input m-dropdown ${labelType}`}
                type="text"
                style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
                readOnly={readOnly || !filter}
                value={(isFocused ? filterValue : _value?.[labelKey]) || ""}
                onChange={handleFilterChange}
                onFocus={handleFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
            />

            {/* input label */}
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    className="dropdown"
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!_value}
                    dataId={uniqueDropdownId}
                />
            )}

            {/* input icons */}
            {error ? (
                <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="checkbox" error={error} />
            ) : (
                <FontAwesomeIcon className="m-dropdown-icon" icon="angle-down" onClick={() => setIsFocused(!isFocused)} />
            )}
            {clearable && _value && <FontAwesomeIcon className="m-dropdown-clear-icon" icon="close" onClick={handleClear} />}

            {/* dropdown items */}
            {isFocused &&
                filterRef.current &&
                createPortal(
                    <DropdownOptions<T>
                        filterElement={filterRef.current}
                        uniqueDropdownId={uniqueDropdownId}
                        handleDropdownChange={handleDropdownChange}
                        dropdownOptions={dropdownOptions}
                        value={_value}
                        valueKey={valueKey}
                        labelKey={labelKey}
                    />,
                    document.body
                )}
        </div>
    );
}

export default Dropdown;
