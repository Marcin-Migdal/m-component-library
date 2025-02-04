import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { ComponentSize, SimpleInputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getCheckboxErrorStyle } from "../_inputsComponents/InputError/helpers/getCheckboxErrorStyle";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { CheckboxProps } from "./types";

import "./Checkbox.scss";

const Checkbox = ({
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
}: CheckboxProps) => {
  const checkboxContainerRef = useRef<HTMLDivElement>(null);

  const [internalChecked, setInternalChecked] = useState<boolean>(false);
  const [checkboxId] = useState(uuId());

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
      ref={checkboxContainerRef}
      className={classNames("m-checkbox-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
    >
      <div style={getInputStyle(labelType as SimpleInputLabel, label, labelWidth, undefined)}>
        <label className={classNames("m-checkbox-input-wrapper", classNamesObj?.inputWrapper, { checked: checked })}>
          <input
            id={checkboxId}
            readOnly
            className="m-checkbox-input"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            name={name}
            disabled={disabled}
            {...otherProps}
          />
          <span className={classNames("m-input", "m-checkbox", classNamesObj?.input, labelType)}>
            <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
          </span>
        </label>
      </div>
      {label && (
        <InputsLabel
          htmlFor={checkboxId}
          label={label}
          labelType={labelType}
          className={classNames("m-checkbox-label", classNamesObj?.label)}
          labelWidth={labelWidth}
        />
      )}
      {error && checkboxContainerRef.current && (
        <InputError
          style={getCheckboxErrorStyle(checkboxContainerRef.current, labelType as SimpleInputLabel, labelWidth)}
          className={classNames("checkbox-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Checkbox;
