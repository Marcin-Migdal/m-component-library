import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { ComponentSize, InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { getInputStyle } from "../helpers/getInputStyle";
import { DropdownOptions } from "./DropdownOptions/DropdownOptions";
import { DropdownChangeEvent, DropdownClearEvent, DropdownProps, DropdownValue } from "./types";

import "./Dropdown.css";

type LabelValue = {
  value: string | number;
  label: string;
};

function Dropdown<T extends { [key: string]: string | number } = LabelValue>(props: DropdownProps<T>) {
  const {
    value: externalValue = undefined,
    name = undefined,
    disabled = false,
    onChange,
    onClear,
    onFocus,
    label,
    error,
    labelType = InputLabel.LEFT,
    placeholder,
    labelWidth = 30,
    floatingInputWidth = 100,
    options = [],
    labelKey = "label",
    valueKey = "value",
    size = ComponentSize.MEDIUM,
    disableDefaultMargin = false,
    classNamesObj,
    prefix,

    clearable = false,
    readOnly = false,
    filter = false,
  } = props;

  const controlContainerRef = useRef<HTMLInputElement>(null);

  const [internalValue, setInternalValue] = useState<DropdownValue<T>>(undefined);
  const [filterValue, setFilterValue] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<T[]>([]);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDropdownId] = useState<string>(uuId());

  const value = externalValue || internalValue;

  useEffect(() => {
    const filterOptions = () => {
      if (!options || options.length === 0) {
        return;
      }

      let filteredDropdownOptions: T[] = [];

      if (filterValue) {
        filteredDropdownOptions = options.filter((option) => {
          let optionLabel = option[labelKey] as number | string;
          optionLabel = typeof optionLabel === "string" ? optionLabel : optionLabel.toString();

          return optionLabel.includes(filterValue);
        });
      } else {
        filteredDropdownOptions = options;
      }

      setDropdownOptions(filteredDropdownOptions);
    };

    filterOptions();
  }, [filterValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (!controlContainerRef.current) {
        return;
      }

      if (
        (!controlContainerRef.current.contains(target) ||
          (typeof target?.className === "string" && target?.className.includes("m-dropdown-container"))) &&
        (!target.getAttribute("data-id") || target.getAttribute("data-id") !== uniqueDropdownId)
      ) {
        setIsFocused(false);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      const _e: DropdownChangeEvent<T> = {
        ...e,
        target: {
          ...e.target,
          value: selectedOption,
          name: name,
          type: "dropdown",
        },
      };

      onChange(_e, selectedOption as T);
    }
  };

  const handleClear = (e: ReactMouseEvent<SVGSVGElement, MouseEvent>) => {
    setFilterValue("");
    setInternalValue(undefined);
    setIsFocused(false);

    if (onClear) {
      const _e: DropdownClearEvent<T> = {
        ...e,
        target: { ...e.target, value: undefined, name: name, type: "dropdown" },
      };

      onClear(_e, undefined);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (readOnly) {
      return;
    }

    onFocus && onFocus(e);

    setIsFocused(true);
  };

  const controlElement = controlContainerRef.current?.querySelector(".m-dropdown-control") as
    | HTMLInputElement
    | null
    | undefined;

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-dropdown-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
      ref={controlContainerRef}
    >
      {/* input placeholder, displays selected value, also work as a filter input */}
      <StandAloneTextfield
        disabled={disabled}
        data-id={uniqueDropdownId}
        readOnly={readOnly || !filter}
        value={filter && isFocused ? filterValue : value?.[labelKey].toString() || ""}
        onChange={handleFilterChange}
        onFocus={handleFocus}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        prefix={prefix}
        className={classNames("m-dropdown-control", classNamesObj?.control, labelType, {
          "read-only": readOnly,
          filtrable: filter,
        })}
        style={{
          ...getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth),
        }}
      />
      {/* input label */}
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-dropdown-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
          dataId={uniqueDropdownId}
          prefix={prefix}
        />
      )}

      {/* input icons */}
      {error ? (
        <InputError
          style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
          className={classNames("dropdown-error", classNamesObj?.error)}
          error={error}
        />
      ) : (
        <FontAwesomeIcon
          className={classNames("m-dropdown-icon", "m-dropdown-indicator-icon", classNamesObj?.dropdownIndicatorIcon)}
          icon="angle-down"
          onClick={() => setIsFocused(!isFocused)}
        />
      )}
      {clearable && value && (
        <FontAwesomeIcon
          className={classNames("m-dropdown-icon", "m-dropdown-clear-icon", classNamesObj?.clearIcon)}
          icon="close"
          onClick={handleClear}
        />
      )}

      {/* dropdown items */}
      {isFocused &&
        controlElement &&
        createPortal(
          <DropdownOptions<T>
            filterElement={controlElement}
            uniqueDropdownId={uniqueDropdownId}
            handleDropdownChange={handleDropdownChange}
            dropdownOptions={dropdownOptions}
            value={value}
            valueKey={valueKey}
            labelKey={labelKey}
            classNamesObj={{
              dropdownOptions: classNamesObj?.dropdownOptions,
              dropdownOption: classNamesObj?.dropdownOption,
              emptyDropdownOption: classNamesObj?.emptyDropdownOption,
            }}
          />,
          document.body
        )}
    </InputContainer>
  );
}

export default Dropdown;
