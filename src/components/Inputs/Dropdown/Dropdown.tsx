import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, MouseEvent as ReactMouseEvent, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { useKeyboardClose, useOutsideClick } from "../../../hooks";
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
  DropdownBlurEvent,
  DropdownChangeEvent,
  DropdownClearEvent,
  DropdownComponents,
  DropdownOptionsProps,
  DropdownProps,
  DropdownValue,
  IndicatorIconProps,
} from "./types";

import "./Dropdown.scss";

const filterOptions = <T extends { [key: string]: unknown } = LabelValue>(
  options: T[],
  labelKey: string | number,
  filterValue: string
): T[] => {
  if (filterValue.trim().length === 0 || options.length === 0) {
    return options;
  }

  return options.filter((option) => {
    let optionLabel = option[labelKey] as number | string;
    optionLabel = typeof optionLabel === "string" ? optionLabel : optionLabel.toString();

    return optionLabel.includes(filterValue);
  });
};

const getControlValue = <T extends { [key: string]: unknown } = LabelValue>(
  filter: boolean,
  isFocused: boolean,
  filterValue: string,
  labelKey: string,
  value: DropdownValue<T>
) => {
  if (filter && isFocused) {
    return filterValue;
  }

  return typeof value?.[labelKey] === "string" || typeof value?.[labelKey] === "number"
    ? value?.[labelKey].toString()
    : "";
};

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
function Dropdown<T extends { [key: string]: unknown } = LabelValue>({
  value: externalValue = undefined,
  onChange,
  onClear,
  onFocus,
  onBlur,
  name = undefined,
  placeholder,
  label,
  error,
  classNamesObj = {},

  prefix,
  options = [],
  labelKey: optionalLabelKey,
  valueKey = "value",
  noOptionsMessage = "No options",
  optionHeightFit = 6,
  clearable = false,
  filter = false,
  components,
  menuPositionConfig,
  disableSubmitOnEnter = false,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,
}: DropdownProps<T>) {
  const labelKey = optionalLabelKey ?? "label";
  const controlContainerRef = useRef<HTMLInputElement>(null);

  const [internalValue, setInternalValue] = useState<DropdownValue<T>>(null);
  const [filterValue, setFilterValue] = useState<string>("");

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDropdownId] = useState<string>(uuId());

  const isControlled = externalValue !== undefined;

  const value: DropdownValue<T> = isControlled ? externalValue : internalValue;
  const dropdownOptions: T[] = filterOptions(options, labelKey, filterValue);

  const currentComponents: DropdownComponents<T> = {
    ...defaultComponents,
    ...components,
  };

  const handleBlur = (selectedDate: DropdownValue<T> | null) => {
    const _e: DropdownBlurEvent<DropdownValue<T>> = {
      target: {
        name: name || "",
        value: selectedDate,
        checked: false,
        type: "dropdown",
      },
    };

    setIsFocused(false);
    onBlur && onBlur(_e);
  };

  const additionalOutsideClickTriggerCondition = useCallback(
    ({ originalOutsideClickTriggerCondition, event }) => {
      const target = event.target as HTMLElement;

      if (!isFocused) {
        return false;
      }

      const clickedOnThisDropdownInstance = !target.id || !target.id.endsWith(uniqueDropdownId);

      if (!clickedOnThisDropdownInstance) {
        return false;
      }

      // When Dropdown has label, user can click on background and label, thats not a control component.
      // In that case dropdown menu should be closed
      const clickedOnDropdownContainerBackground =
        typeof target?.className === "string" && target.className.includes("m-dropdown-container");

      // originalOutsideClickTriggerCondition checks if user clicked outside the whole Dropdown container, not just Dropdown Menu
      return originalOutsideClickTriggerCondition || clickedOnDropdownContainerBackground;
    },
    [isFocused, uniqueDropdownId]
  );

  const onOutsideClick = () => handleBlur(value);
  const onKeyboardClose = () => {
    handleBlur(value);

    const dropdownControlElement = controlContainerRef.current?.querySelector(
      `#dropdown-controller-${uniqueDropdownId}`
    ) as HTMLInputElement | null;

    if (dropdownControlElement && document.activeElement === dropdownControlElement) {
      dropdownControlElement.blur();
    }
  };

  useOutsideClick(controlContainerRef, onOutsideClick, { additionalOutsideClickTriggerCondition });
  useKeyboardClose(onKeyboardClose, { additionalCondition: isFocused });

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value);
  };

  const handleDropdownChange = (e: ReactMouseEvent<HTMLLIElement, MouseEvent>, selectedOption: T): void => {
    !isControlled && setInternalValue(selectedOption);

    setFilterValue("");

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

    handleBlur(selectedOption);
  };

  const handleClear = (e: ReactMouseEvent<Element, MouseEvent>) => {
    !isControlled && setInternalValue(null);

    setIsFocused(false);

    if (onClear) {
      const _e: DropdownClearEvent = {
        ...e,
        target: {
          ...e.target,
          name: name || "",
          value: null,
          checked: false,
          type: "dropdown",
        },
      };

      onClear(_e, null);
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

  const {
    controlClassName,
    clearIconClassName,
    dropdownIndicatorIconClassName,
    dropdownOptionsClassName,
    dropdownOptionClassName,
    emptyDropdownOptionClassName,
    containerClassName,
    labelClassName,
    errorClassName,
    standAloneTextfieldContainerClassName,
    prefixClassName,
  } = classNamesObj;

  const controlProps: StandAloneTextfieldProps = {
    disabled: disabled,
    id: uniqueDropdownId,
    idPrefix: "dropdown-controller",
    readOnly: readOnly || !filter,
    disableSubmitOnEnter: disableSubmitOnEnter,
    value: getControlValue(filter, isFocused, filterValue, labelKey, value),
    onChange: handleFilterChange,
    onFocus: handleFocus,
    placeholder: labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : ""),
    prefix: prefix,
    classNamesObj: {
      inputClassName: classNames("m-dropdown-control", controlClassName, labelType, {
        "read-only": readOnly,
        filtrable: filter,
      }),
      standAloneTextfieldContainerClassName,
      prefixClassName,
    },
    style: { ...getInputStyle(labelType, label, labelWidth, floatingInputWidth) },
  };

  const clearIconProps: ClearIconProps = {
    className: classNames("m-dropdown-icon", "m-dropdown-clear-icon", clearIconClassName),
    onClick: handleClear,
  };

  const indicatorIconProps: IndicatorIconProps = {
    className: classNames("m-dropdown-icon", "m-dropdown-indicator-icon", dropdownIndicatorIconClassName),
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
      dropdownOptionsClassName,
      dropdownOptionClassName,
      emptyDropdownOptionClassName,
    },
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-dropdown-container", containerClassName)}
      size={size}
      error={error}
      ref={controlContainerRef}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      {/* input label */}
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-dropdown-label", labelClassName)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
          dataId={uniqueDropdownId}
          prefix={prefix}
        />
      )}

      {/* input placeholder, displays selected value, also work as a filter input */}
      {currentComponents.Control(controlProps)}

      {/* input icons */}
      {error ? (
        <InputError
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
          className={classNames("dropdown-error", errorClassName)}
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
