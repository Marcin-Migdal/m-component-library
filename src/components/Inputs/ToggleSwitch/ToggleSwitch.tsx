import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { ComponentSize, SimpleInputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getToggleSwitchErrorStyle } from "../_inputsComponents/InputError/helpers/getToggleSwitchErrorStyle";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { ToggleSwitchProps } from "./types";

import "./ToggleSwitch.scss";

const ToggleSwitch = ({
  checked: externalChecked = undefined,
  name,
  onChange,
  label,
  error,
  labelType = SimpleInputLabel.LEFT,
  labelWidth = 30,
  size = ComponentSize.MEDIUM,
  disabled = false,
  readOnly = false,
  disableDefaultMargin = false,
  classNamesObj,
  ...otherProps
}: ToggleSwitchProps) => {
  const toggleSwitchContainerRef = useRef<HTMLDivElement>(null);

  const [internalChecked, setInternalChecked] = useState<boolean>(false);
  const [toggleSwitchId] = useState(uuId());

  const controlled = externalChecked !== undefined;
  const checked = controlled ? externalChecked : internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (readOnly) {
      e.preventDefault();
      return;
    }

    const _checked = e.target.checked;

    onChange && onChange(e, _checked);
    !controlled && setInternalChecked(_checked);
  };

  return (
    <InputContainer
      disabled={disabled}
      ref={toggleSwitchContainerRef}
      className={classNames("m-toggle-switch-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
    >
      <div
        style={getInputStyle(labelType as SimpleInputLabel, label, labelWidth, undefined)}
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
        />
      )}
      {error && toggleSwitchContainerRef.current && (
        <InputError
          style={getToggleSwitchErrorStyle(toggleSwitchContainerRef.current, labelType as SimpleInputLabel, labelWidth)}
          className={classNames("checkbox-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default ToggleSwitch;
