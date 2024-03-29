import React, { ChangeEvent, useMemo } from "react";
import { FormikValues, useFormik } from "formik";

import { filteredErrors } from "./internal-helpers";
import { IFormProps } from "./Form-interfaces";

function Form<T extends FormikValues = any>({
    initialValues,
    onSubmit,
    className = "",
    children,
    validationSchema,
    handleValuesChange,
    externalErrors = {},
    onExternalErrorChange,
    ...otherProps
}: IFormProps<T>) {
    const formik = useFormik<T>({ initialValues: initialValues, onSubmit: onSubmit, validationSchema: validationSchema });

    const _errors = useMemo(() => filteredErrors<T>(formik.errors, formik.touched), [formik.errors, formik.touched]);

    const _handleChange = (e: ChangeEvent<any>) => {
        const name = e.target.name;

        if (handleValuesChange) {
            const _values = handleValuesChange(e, formik);
            formik.setValues(_values, true);
        } else formik.handleChange(e);

        if (formik.touched[name]) {
            const _touched = { ...formik.touched };
            delete _touched[name];

            formik.setTouched(_touched);
        }

        if (onExternalErrorChange && externalErrors[name]) {
            const _externalErrors = { ...externalErrors };
            delete _externalErrors[name];

            onExternalErrorChange(_externalErrors);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className={`m-form ${className}`} {...otherProps}>
            {children({
                ...formik,
                handleChange: _handleChange,
                errors: { ..._errors, ...externalErrors },
                isValid: Object.keys(_errors).length === 0,
            })}
        </form>
    );
}

export default Form;
