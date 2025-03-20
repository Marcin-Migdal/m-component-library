import { FormikHelpers, FormikState, FormikValues, useFormik } from "formik";
import { useEffect, useMemo } from "react";
import * as Yup from "yup";

import { getFilteredErrors } from "../helpers/getFilteredErrors";

/** Represents a simple change event with a target containing a name and value. */
export type SimpleChangeEvent = {
  target: {
    name: string;
    value: unknown;
  };
};

type BaseUseFormArgs<T extends FormikValues> = {
  /** Initial values for the form fields.
   * @default {} */
  initialValues: T;

  /** Callback function triggered when the form is submitted. */
  onSubmit?: (values: T, formikHelpers: FormikHelpers<T>) => void;

  /** Yup validation schema for form validation. */
  validationSchema: Yup.ObjectSchema<T>;

  /** Flag that controls if validation will run on component mount.
   * @default false */
  validateOnMount?: boolean;

  /** Callback function triggered when form values validation change.
   * @default undefined */
  onValidChange?: (isValid: boolean) => undefined;

  /** Additional errors to display in the form (e.g., API errors), those errors will replace default errors if they exist. */
  additionalErrors?: undefined;

  /** Callback function triggered when additional errors change, this function will be called when related input is called. */
  onAdditionalErrors?: undefined;
};

/** Represents a type for form errors, where each key corresponds to a field name. */
export type FormErrorsType<T> = { [key in keyof T]?: string };

type ErrorUseFormArgs<T extends FormikValues> = Omit<BaseUseFormArgs<T>, "additionalErrors" | "onAdditionalErrors"> & {
  /** Additional errors to display in the form (e.g., API errors), those errors will replace default errors if they exist. */
  additionalErrors: FormErrorsType<T>;

  /** Callback function triggered when additional errors change, this function will be called when related input is called. */
  onAdditionalErrors: (errors: FormErrorsType<T>) => void;
};

export type UseFormArgs<T extends FormikValues> = BaseUseFormArgs<T> | ErrorUseFormArgs<T>;

export type UseFormikResult<T extends FormikValues> = Omit<
  ReturnType<typeof useFormik<T>>,
  "handleChange" | "handleBlur"
> & {
  handleChange: (e: SimpleChangeEvent) => void;
  handleBlur: (e: SimpleChangeEvent) => void;
  formikOrgHandleBlur: {
    (e: React.FocusEvent<Element, Element>): void;
  };
};

export const useForm = <T extends FormikValues>({
  validateOnMount,
  initialValues,
  onSubmit,
  validationSchema,
  onValidChange,
  additionalErrors,
  onAdditionalErrors,
}: UseFormArgs<T>): UseFormikResult<T> => {
  const formik = useFormik<T>({
    validateOnMount,
    initialValues,
    onSubmit: onSubmit || (() => {}),
    validationSchema,
  });

  const {
    submitCount,
    errors: formikErrors,
    touched,
    isValid,
    handleChange: formikHandleChange,
    handleBlur: formikOrgHandleBlur,
    setTouched,
    validateForm,
    setFormikState,
  } = formik;

  const errors = useMemo(() => {
    if (validateOnMount) {
      return { ...formikErrors, ...additionalErrors };
    }

    return { ...getFilteredErrors<T>(formikErrors, touched), ...additionalErrors };
  }, [validateOnMount, formikErrors, additionalErrors, touched]);

  useEffect(() => {
    onValidChange && onValidChange(isValid);
  }, [isValid]);

  const handleChange = (e: SimpleChangeEvent) => {
    const name = e.target.name;

    formikHandleChange(e);

    if (touched[name]) {
      const _touched = { ...touched };
      delete _touched[name];

      setTouched(_touched);
    }

    if (onAdditionalErrors && additionalErrors[name]) {
      const _externalErrors = { ...additionalErrors };
      delete _externalErrors[name];

      onAdditionalErrors(_externalErrors);
    }
  };

  const handleBlur = async (e: SimpleChangeEvent) => {
    const { name, value } = e.target;

    const values = { ...formik.values, [name]: value };

    const error = await validateForm(values);

    const fieldError = error[name];

    const formikState: FormikState<T> = {
      touched: { ...formik.touched, [name]: true },
      values: values,
      errors: errors,
      isSubmitting: false,
      isValidating: false,
      submitCount: submitCount,
    };

    if (typeof fieldError === "string") {
      formikState.errors = { ...errors, [name]: fieldError };
    }

    setFormikState(formikState);
  };

  return {
    ...formik,
    errors,
    isValid: Object.keys(errors).length === 0,
    handleChange,
    handleBlur,
    formikOrgHandleBlur,
  };
};
