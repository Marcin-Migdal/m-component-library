import { FormikErrors, FormikHelpers, FormikState, FormikTouched, FormikValues, useFormik } from "formik";
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

  /** Initial touched values for the fields.
   * @default {} */
  initialTouched?: FormikTouched<T>;

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
export type FormErrors<T> = {
  [K in keyof T]?: T[K] extends string ? string : FormErrors<T[K]>;
};

type ErrorUseFormArgs<T extends FormikValues> = Omit<BaseUseFormArgs<T>, "additionalErrors" | "onAdditionalErrors"> & {
  /** Additional errors to display in the form (e.g., API errors), those errors will replace default errors if they exist. */
  additionalErrors: FormErrors<T>;

  /** Callback function triggered when additional errors change, this function will be called when related input is called. */
  onAdditionalErrors: (errors: FormErrors<T>) => void;
};

export type UseFormArgs<T extends FormikValues> = BaseUseFormArgs<T> | ErrorUseFormArgs<T>;

export type UseFormikResult<T extends FormikValues> = Omit<
  ReturnType<typeof useFormik<T>>,
  "handleChange" | "handleBlur" | "errors"
> & {
  handleChange: (e: SimpleChangeEvent) => void;
  handleBlur: (e: SimpleChangeEvent) => void;
  formikOrgHandleBlur: {
    (e: React.FocusEvent<Element, Element>): void;
  };
  errors: FormErrors<T>;
};

export const useForm = <T extends FormikValues>({
  validateOnMount,
  initialValues,
  initialTouched = {},
  onSubmit,
  validationSchema,
  onValidChange,
  additionalErrors,
  onAdditionalErrors,
}: UseFormArgs<T>): UseFormikResult<T> => {
  const formik = useFormik<T>({
    validateOnMount,
    initialValues,
    initialTouched,
    onSubmit: onSubmit || (() => {}),
    validationSchema,
  });

  const formikErrors = formik.errors as FormErrors<T>;

  const {
    submitCount,
    touched,
    isValid,
    handleChange: formikHandleChange,
    handleBlur: formikOrgHandleBlur,
    setTouched,
    validateForm,
    setFormikState,
    initialTouched: formikInitialTouched,
    resetForm: formikResetForm,
  } = formik;

  const errors = useMemo((): FormErrors<T> => {
    if (validateOnMount) {
      return { ...formikErrors, ...additionalErrors };
    }

    return { ...getFilteredErrors(formikErrors, touched), ...additionalErrors };
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

  const resetForm = (nextState: Partial<FormikState<T>> | undefined = undefined, shouldValidate: boolean = false) => {
    formikResetForm(nextState);
    setTouched(formikInitialTouched, shouldValidate);
  };

  const handleBlur = async (e: SimpleChangeEvent) => {
    const { name, value } = e.target;

    const values = { ...formik.values, [name]: value };

    const error = await validateForm(values);

    const fieldError = error[name];

    const formikState: FormikState<T> = {
      touched: { ...formik.touched, [name]: true },
      values: values,
      errors: errors as FormikErrors<T>,
      isSubmitting: false,
      isValidating: false,
      submitCount: submitCount,
    };

    if (typeof fieldError === "string") {
      formikState.errors = { ...errors, [name]: fieldError } as FormikErrors<T>;
    }

    setFormikState(formikState);
  };

  return {
    ...formik,
    errors: errors,
    isValid: Object.keys(errors).length === 0,
    handleChange,
    handleBlur,
    formikOrgHandleBlur,
    resetForm,
  };
};
