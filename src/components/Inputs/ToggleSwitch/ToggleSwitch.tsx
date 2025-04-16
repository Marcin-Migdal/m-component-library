import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getToggleSwitchErrorStyle } from "../_inputsComponents/InputError/helpers/getToggleSwitchErrorStyle";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { ToggleSwitchProps } from "./types";

import "./ToggleSwitch.scss";

/** ToggleSwitch component for enabling or disabling */
const ToggleSwitch = ({
  checked: externalChecked = undefined,
  onChange,
  name,
  label,
  error,
  classNamesObj,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

  ...otherProps
}: ToggleSwitchProps) => {
  const toggleSwitchContainerRef = useRef<HTMLDivElement>(null);

  const [internalChecked, setInternalChecked] = useState<boolean>(false);
  const [toggleSwitchId] = useState(uuId());

  const isControlled = externalChecked !== undefined;
  const checked = isControlled ? externalChecked : internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (readOnly) {
      e.preventDefault();
      return;
    }

    const { checked: newValue, type } = e.target;

    !isControlled && setInternalChecked(newValue);

    onChange &&
      onChange(
        {
          ...e,
          target: {
            ...e.target,
            value: newValue,
            name: name || "",
            type,
          },
        },
        newValue
      );
  };

  return (
    <InputContainer
      disabled={disabled}
      ref={toggleSwitchContainerRef}
      className={classNames("m-toggle-switch-container", classNamesObj?.container)}
      size={size}
      error={error}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <div
        style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
        className={classNames("m-toggle-switch-input-wrapper", classNamesObj?.inputWrapper)}
      >
        <label>
          <input
            id={toggleSwitchId}
            readOnly
            className="m-toggle-switch-input"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            name={name}
            disabled={disabled}
            {...otherProps}
          />
          <span className={classNames("m-input", "m-toggle-switch-slider", classNamesObj?.input, labelType)} />
        </label>
      </div>
      {label && (
        <InputsLabel
          htmlFor={toggleSwitchId}
          label={label}
          labelType={labelType}
          className={classNames("m-toggle-switch-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          forceFloating={labelType === InputLabel.FLOATING}
        />
      )}
      {error && toggleSwitchContainerRef.current && (
        <InputError
          style={getToggleSwitchErrorStyle(toggleSwitchContainerRef.current, labelType, labelWidth)}
          className={classNames("checkbox-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default ToggleSwitch;
