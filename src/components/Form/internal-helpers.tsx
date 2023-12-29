import { FormikErrors, FormikTouched } from "formik";
import React, { ReactElement } from "react";

export function filteredErrors<T>(errors: FormikErrors<T>, touched: FormikTouched<T>): Partial<FormikErrors<T>> {
    const filteredErrors: Partial<FormikErrors<T>> = {};

    Object.keys(errors).forEach((key) => {
        const errorKey = key as keyof T;

        if (touched[errorKey]) filteredErrors[errorKey] = errors[errorKey];
    });

    return filteredErrors;
}
