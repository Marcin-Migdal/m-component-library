import classNames from "classnames";
import { FormikValues } from "formik";
import React from "react";

import { InputErrorType } from "../Inputs/_inputsComponents";
import { SimpleChangeEvent } from "./hooks/useForm/useForm.types";
import {
  BlurRegisterResult,
  ChangeRegisterResult,
  ControlledBlurRegisterResult,
  ControlledChangeRegisterResult,
  FormProps,
  RegisterBlurResult,
  RegisterChangeResult,
} from "./types";

/**
 * A flexible form component built with Formik for handling form state, validation, and submission.
 * Supports custom value changes and external error handling.
 */
function Form<TFormState extends FormikValues>({
  className,
  children,
  formik,
  disableSubmitOnEnter = false,
  ...otherProps
}: FormProps<TFormState>) {
  const { values, errors, handleSubmit, handleChange, handleBlur } = formik;

  const registerChange = <
    TName extends keyof TFormState,
    TChangeEvent extends SimpleChangeEvent<TFormState> = SimpleChangeEvent<TFormState>,
    TControlled extends boolean = true
  >(
    name: TName,
    controlled: TControlled = true as TControlled
  ): RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState> => {
    if (controlled) {
      const controlledChangeRegisterResult: ControlledChangeRegisterResult<TName, TChangeEvent, TFormState> = {
        name,
        error: errors?.[name] as InputErrorType,
        onBlur: handleBlur,
        value: values?.[name],
        onChange: handleChange,
        disableSubmitOnEnter,
      };

      return controlledChangeRegisterResult as RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState>;
    }

    const changeRegisterResult: ChangeRegisterResult<TName, TChangeEvent, TFormState> = {
      name,
      error: errors?.[name] as InputErrorType,
      onBlur: handleBlur,
      onChange: handleChange,
      disableSubmitOnEnter,
    };

    return changeRegisterResult as RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState>;
  };

  const registerBlur = <
    TName extends keyof TFormState,
    TBlurEvent extends SimpleChangeEvent<TFormState>,
    TControlled extends boolean
  >(
    name: TName,
    controlled: TControlled = true as TControlled
  ): RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState> => {
    if (controlled) {
      const controlledBlurRegisterResult: ControlledBlurRegisterResult<TName, TBlurEvent, TFormState> = {
        name,
        error: errors?.[name] as InputErrorType,
        onBlur: handleBlur,
        value: values?.[name],
        disableSubmitOnEnter,
      };

      return controlledBlurRegisterResult as RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState>;
    }

    const blurRegisterResult: BlurRegisterResult<TName, TBlurEvent, TFormState> = {
      name,
      error: errors?.[name] as InputErrorType,
      onBlur: handleBlur,
      disableSubmitOnEnter,
    };

    return blurRegisterResult as RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState>;
  };

  return (
    <form onSubmit={handleSubmit} className={classNames("m-form", className)} {...otherProps}>
      {children({
        ...formik,
        registerChange,
        registerBlur,
      })}
    </form>
  );
}

export default Form;
