import { FormikTouched, FormikValues } from "formik";
import { FormErrors } from "../hooks/useForm/useForm.types";

export function getFilteredErrors<T extends FormikValues>(
  errors: FormErrors<T>,
  touched: FormikTouched<T>
): FormErrors<T> {
  const filteredErrors: FormErrors<T> = {};

  Object.keys(errors).forEach((key) => {
    const errorKey = key as keyof T;

    if (touched[errorKey]) {
      filteredErrors[errorKey] = errors[errorKey];
    }
  });

  return filteredErrors;
}
