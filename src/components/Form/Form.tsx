import { FormikErrors, FormikHelpers, FormikTouched, FormikValues, useFormik } from "formik";
import React, { ChangeEvent, FocusEvent, useMemo } from "react";

import { filteredErrors } from "./internal-helpers";

interface IChildrenFormikData<T> {
    values: T;
    errors: Partial<FormikErrors<T>>;
    allErrors: FormikErrors<T>;
    touched: FormikTouched<T>;
    handleChange: (e: ChangeEvent<any>) => void;
    handleBlur: (e: FocusEvent<any, Element>) => void;
    isValid: boolean;
}

interface IFormProps<T> {
    initialValues: any;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    className?: string;
    children: (e: IChildrenFormikData<T>) => any;
    validationSchema: any;
}

function Form<T extends FormikValues = any>({ initialValues, onSubmit, className = "", children, validationSchema }: IFormProps<T>) {
    const formik = useFormik<T>({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validationSchema: validationSchema,
    });

    const _errors = useMemo(() => filteredErrors<T>(formik.errors, formik.touched), [formik.errors, formik.touched]);

    const _handleChange = (e: ChangeEvent<any>) => {
        const { name } = e.target;

        formik.handleChange(e);

        if (formik.touched[name]) {
            const _touched = { ...formik.touched };
            delete _touched[name];

            formik.setTouched(_touched);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className={`m-form ${className}`}>
            {children({
                values: formik.values,
                handleChange: _handleChange,
                errors: _errors,
                allErrors: formik.errors,
                touched: formik.touched,
                handleBlur: formik.handleBlur,
                isValid: Object.keys(_errors).length === 0,
            })}
        </form>
    );
}

export default Form;
