import classNames from "classnames";
import { FormikValues } from "formik";
import React from "react";

import { FormProps } from "./types";

/**
 * A flexible form component built with Formik for handling form state, validation, and submission.
 * Supports custom value changes and external error handling.
 */

function Form<T extends FormikValues>({ className, children, formik, ...otherProps }: FormProps<T>) {
  const { values, errors, handleSubmit, handleChange, handleBlur } = formik;

  const register = (name: keyof T) => {
    return {
      name: name,
      value: values?.[name],
      error: errors?.[name],
      onChange: handleChange,
      onBlur: handleBlur,
    };
  };

  const registerBlur = (name: keyof T) => {
    return {
      name: name,
      error: errors?.[name],
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
