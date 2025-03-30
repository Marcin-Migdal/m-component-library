import classNames from "classnames";
import { FormikValues } from "formik";
import React from "react";

import { InputError } from "../Inputs/_inputsComponents";
import { FormProps } from "./types";

/**
 * A flexible form component built with Formik for handling form state, validation, and submission.
 * Supports custom value changes and external error handling.
 */

function Form<T extends FormikValues>({ className, children, formik, ...otherProps }: FormProps<T>) {
  const { values, errors, handleSubmit, handleChange, handleBlur } = formik;

  const register = <TName extends keyof T>(name: TName) => {
    return {
      name: name,
      value: values?.[name],
      error: errors?.[name] as InputError,
      onChange: handleChange,
      onBlur: handleBlur,
    };
  };

  const registerBlur = <TName extends keyof T>(name: TName) => {
    return {
      name: name,
      error: errors?.[name] as InputError,
      onBlur: handleBlur,
    };
  };

  return (
    <form onSubmit={handleSubmit} className={classNames("m-form", className)} {...otherProps}>
      {children({
        ...formik,
        handleChange: handleChange,
        register,
        registerBlur,
      })}
    </form>
  );
}

export default Form;
