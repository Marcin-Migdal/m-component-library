import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getCheckboxErrorStyle } from "../_inputsComponents/InputError/helpers/getCheckboxErrorStyle";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { CheckboxProps } from "./types";

import "./Checkbox.scss";

/** Checkbox component used for binary selection (checked/unchecked). */
const Checkbox = ({
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
}: CheckboxProps) => {
  const checkboxContainerRef = useRef<HTMLDivElement>(null);

  const [internalChecked, setInternalChecked] = useState<boolean>(false);
  const [checkboxId] = useState(uuId());

  const isControlled = externalChecked !== undefined;
  const checked = isControlled ? externalChecked : internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (readOnly) {
      e.preventDefault();
      return;
    }

    const { checked: changedValue, type } = e.target;

    !isControlled && setInternalChecked(changedValue);

    onChange &&
      onChange(
        {
          ...e,
          target: {
            ...e.target,
            value: changedValue,
            name: name || "",
            type,
          },
        },
        changedValue
      );
  };

  return (
    <InputContainer
      disabled={disabled}
      ref={checkboxContainerRef}
      className={classNames("m-checkbox-container", classNamesObj?.container)}
      size={size}
      error={error}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <div style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}>
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
          forceFloating={labelType === InputLabel.FLOATING}
        />
      )}
      {error && checkboxContainerRef.current && (
        <InputError
          style={getCheckboxErrorStyle(checkboxContainerRef.current, labelType, labelWidth)}
          className={classNames("checkbox-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Checkbox;
