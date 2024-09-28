import { FormikErrors, FormikTouched } from "formik";

export function getFilteredErrors<T>(errors: FormikErrors<T>, touched: FormikTouched<T>): Partial<FormikErrors<T>> {
    const filteredErrors: Partial<FormikErrors<T>> = {};

    Object.keys(errors).forEach((key) => {
        const errorKey = key as keyof T;

        if (touched[errorKey]) {
            filteredErrors[errorKey] = errors[errorKey];
        }
    });

    return filteredErrors;
}
