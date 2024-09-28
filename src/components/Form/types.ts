import { FormikErrors, FormikHelpers, FormikValues, useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

export type SimpleChangeEvent = {
    target: {
        name: string;
        value: unknown 
    }
}

type BaseFormProps<T  extends FormikValues> = {
    initialValues: T;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    className?: string;
    children: (e: ChildrenFormikDataType<T>) => ReactNode;
    validationSchema: Yup.ObjectSchema<T>;
    handleValuesChange?: (event: SimpleChangeEvent, formik: UseFormikReturnType<T>) => T;
    externalErrors?: undefined;
    onExternalErrorChange?: undefined;
};

type ErrorFormProps<T  extends FormikValues> = Omit<BaseFormProps<T>, "externalErrors" | "onExternalErrorChange"> & {
    externalErrors: FormErrorsType<T>;
    onExternalErrorChange: (errors: FormErrorsType<T>) => void;
};

export type FormProps<T extends FormikValues> = BaseFormProps<T> | ErrorFormProps<T>;

export type UseFormikReturnType<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

export type FormHandleChangeType = (e: SimpleChangeEvent) => void;

export type ChildrenFormikDataType<T  extends FormikValues> = {
    isValid: boolean;
    errors: Partial<FormikErrors<T>>;
    handleChange: FormHandleChangeType;
} & Omit<UseFormikReturnType<T>, "handleChange" | "errors" | "isValid">;

export type FormErrorsType<T> = { [key in keyof T]?: string };
