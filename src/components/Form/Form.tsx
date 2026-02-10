import classNames from "classnames";
import { FormikValues } from "formik";
import React from "react";

import { InputErrorType } from "../Inputs/_inputsComponents";
import { translateErrors } from "./helpers/translateErrors";
import { SimpleChangeEvent } from "./hooks/useForm/useForm.types";

import {
  ControlledRegisterBlurResult,
  ControlledRegisterChangeResult,
  FormProps,
  RegisterBlurResult,
  RegisterChangeResult,
  UncontrolledRegisterBlurResult,
  UncontrolledRegisterChangeResult,
} from "./types";

/**
 * A flexible form component built with Formik for handling form state, validation, and submission.
 * Supports custom value changes and external error handling.
 */
function Form<TFormState extends FormikValues>({
  t,
  className,
  children,
  formik,
  disableSubmitOnEnter = false,
  ...otherProps
}: FormProps<TFormState>) {
  const { values, errors: formErrors, handleSubmit, handleChange, handleBlur } = formik;

  const registerChange = <
    TName extends keyof TFormState,
    TChangeEvent extends SimpleChangeEvent<TFormState> = SimpleChangeEvent<TFormState>,
    TControlled extends boolean = true,
  >(
    name: TName,
    controlled: TControlled = true as TControlled,
  ): RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState> => {
    const fieldErrors = formErrors?.[name] as InputErrorType | undefined;
    const translatedFieldErrors = t && fieldErrors ? translateErrors(fieldErrors, t) : fieldErrors;

    if (controlled) {
      const controlledChangeRegisterResult: ControlledRegisterChangeResult<TName, TChangeEvent, TFormState> = {
        name,
        error: translatedFieldErrors,
        onBlur: handleBlur,
        value: values?.[name],
        onChange: handleChange,
        disableSubmitOnEnter,
      };

      return controlledChangeRegisterResult as RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState>;
    }

    const changeRegisterResult: UncontrolledRegisterChangeResult<TName, TChangeEvent, TFormState> = {
      name,
      error: translatedFieldErrors,
      onBlur: handleBlur,
      onChange: handleChange,
      disableSubmitOnEnter,
    };

    return changeRegisterResult as RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState>;
  };

  const registerBlur = <
    TName extends keyof TFormState,
    TBlurEvent extends SimpleChangeEvent<TFormState>,
    TControlled extends boolean,
  >(
    name: TName,
    controlled: TControlled = true as TControlled,
  ): RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState> => {
    const fieldErrors = formErrors?.[name] as InputErrorType | undefined;
    const translatedFieldErrors = t && fieldErrors ? translateErrors(fieldErrors, t) : fieldErrors;

    if (controlled) {
      const controlledBlurRegisterResult: ControlledRegisterBlurResult<TName, TBlurEvent, TFormState> = {
        name,
        error: translatedFieldErrors,
        onBlur: handleBlur,
        value: values?.[name],
        disableSubmitOnEnter,
      };

      return controlledBlurRegisterResult as RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState>;
    }

    const blurRegisterResult: UncontrolledRegisterBlurResult<TName, TBlurEvent, TFormState> = {
      name,
      error: translatedFieldErrors,
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
