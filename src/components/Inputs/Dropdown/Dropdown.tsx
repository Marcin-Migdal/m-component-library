import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { StandAloneTextfieldProps } from "../_inputsComponents/StandAloneTextfield/types";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { DropdownOptionComponent } from "./DropdownOptionComponent/DropdownOptionComponent";
import { DropdownOptionsComponent } from "./DropdownOptionsComponent/DropdownOptionsComponent";

import {
  ClearIconProps,
  DropdownChangeEvent,
  DropdownClearEvent,
  DropdownComponents,
  DropdownOptionsProps,
  DropdownProps,
  DropdownValue,
  IndicatorIconProps,
} from "./types";

import "./Dropdown.scss";

type LabelValue = {
  value: string | number;
  label: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultComponents: DropdownComponents<any> = {
  Control: (props) => <StandAloneTextfield {...props} />,
  ClearIcon: (props) => <FontAwesomeIcon {...props} icon="close" />,
  IndicatorIcon: (props) => <FontAwesomeIcon {...props} icon="angle-down" />,
  Options: (props) => <DropdownOptionsComponent {...props} />,
  Option: (props) => <DropdownOptionComponent key={props.option[props.valueKey]} {...props} />,
  EmptyMessage: ({ noOptionsMessage, ...otherProps }) => <li {...otherProps}>{noOptionsMessage}</li>,
};

/** Dropdown is a customizable select component that allows users to choose from a list of options.
 * The component can display icons, nested options, and custom templates for option rendering.
 * Additional features include positioning control, z-index management, and event handlers for open/close states. */
function Dropdown<T extends { [key: string]: string | number } = LabelValue>({
  value: externalValue = undefined,
  onChange,
  onClear,
  onFocus,
  name = undefined,
  placeholder,
  label,
  error,
  classNamesObj,

  prefix,
  options = [],
  labelKey = "label",
  valueKey = "value",
  noOptionsMessage = "No options",
  optionHeightFit = 6,
  clearable = false,
  filter = false,
  components,
  menuPositionConfig,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,
}: DropdownProps<T>) {
  const controlContainerRef = useRef<HTMLInputElement>(null);

  const [internalValue, setInternalValue] = useState<DropdownValue<T>>(undefined);
  const [filterValue, setFilterValue] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<T[]>([]);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDropdownId] = useState<string>(uuId());

  const value = externalValue || internalValue;

  const currentComponents: DropdownComponents<T> = {
    ...defaultComponents,
    ...components,
  };

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
        (!target.id || !target.id.endsWith(uniqueDropdownId))
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
          name: name || "",
          value: selectedOption,
          checked: false,
          type: "dropdown",
        },
      };

      onChange(_e, selectedOption as T);
    }
  };

  const handleClear = (e: ReactMouseEvent<Element, MouseEvent>) => {
    setFilterValue("");
    setInternalValue(undefined);
    setIsFocused(false);

    if (onClear) {
      const _e: DropdownClearEvent = {
        ...e,
        target: {
          ...e.target,
          name: name || "",
          value: undefined,
          checked: false,
          type: "dropdown",
        },
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

  const controlElement = controlContainerRef.current?.querySelector(`#dropdown-controller-${uniqueDropdownId}`) as
    | HTMLInputElement
    | null
    | undefined;

  const controlProps: StandAloneTextfieldProps = {
    disabled: disabled,
    id: uniqueDropdownId,
    idPrefix: "dropdown-controller",
    readOnly: readOnly || !filter,
    value: filter && isFocused ? filterValue : value?.[labelKey].toString() || "",
    onChange: handleFilterChange,
    onFocus: handleFocus,
    placeholder: labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : ""),
    prefix: prefix,
    className: classNames("m-dropdown-control", classNamesObj?.control, labelType, {
      "read-only": readOnly,
      filtrable: filter,
    }),
    style: { ...getInputStyle(labelType, label, labelWidth, floatingInputWidth) },
  };

  const clearIconProps: ClearIconProps = {
    className: classNames("m-dropdown-icon", "m-dropdown-clear-icon", classNamesObj?.clearIcon),
    onClick: handleClear,
  };

  const indicatorIconProps: IndicatorIconProps = {
    className: classNames("m-dropdown-icon", "m-dropdown-indicator-icon", classNamesObj?.dropdownIndicatorIcon),
    onClick: () => setIsFocused(!isFocused),
  };

  const optionsProps: DropdownOptionsProps<T> = {
    filterElement: controlElement,
    id: uniqueDropdownId,
    options: dropdownOptions,
    value,
    valueKey,
    labelKey,
    noOptionsMessage,
    optionHeightFit,
    menuPositionConfig,

    handleDropdownChange,
    Option: currentComponents.Option,
    EmptyMessage: currentComponents.EmptyMessage,

    classNamesObj: {
      dropdownOptions: classNamesObj?.dropdownOptions,
      dropdownOption: classNamesObj?.dropdownOption,
      emptyDropdownOption: classNamesObj?.emptyDropdownOption,
    },
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-dropdown-container", classNamesObj?.container)}
      size={size}
      error={error}
      ref={controlContainerRef}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      {/* input placeholder, displays selected value, also work as a filter input */}

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

      {currentComponents.Control(controlProps)}

      {/* input icons */}
      {error ? (
        <InputError
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
          className={classNames("dropdown-error", classNamesObj?.error)}
          error={error}
        />
      ) : (
        currentComponents.IndicatorIcon(indicatorIconProps)
      )}

      {clearable && value && currentComponents.ClearIcon(clearIconProps)}

      {/* dropdown items */}
      {isFocused && controlElement && createPortal(currentComponents.Options(optionsProps), document.body)}
    </InputContainer>
  );
}

export default Dropdown;
