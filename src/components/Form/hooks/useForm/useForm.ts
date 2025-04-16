import { FormikState, FormikValues, useFormik } from "formik";
import { useEffect, useMemo } from "react";

import { getFilteredErrors } from "../../helpers/getFilteredErrors";
import { FormErrors, SimpleChangeEvent, UseFormArgs, UseFormikResult } from "./useForm.types";

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

  const handleChange = (e: SimpleChangeEvent<T>) => {
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

  const handleBlur = async (e: SimpleChangeEvent<T>) => {
    const { name, value } = e.target;

    const values = { ...formik.values, [name]: value };

    const freshErrors = await validateForm(values);

    const formikState: FormikState<T> = {
      touched: { ...formik.touched, [name]: true },
      values: values,
      errors: freshErrors,
      isSubmitting: false,
      isValidating: false,
      submitCount: submitCount,
    };

    setFormikState(formikState);
  };

  return {
    ...formik,
    errors: errors,
    isValid: Object.keys(errors).length === 0,
    handleChange,
    handleBlur,
    handleClear: handleBlur,
    formikOrgHandleBlur,
    resetForm,
  };
};
