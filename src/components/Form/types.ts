import { FormikErrors, FormikHelpers, FormikValues, useFormik } from "formik";
import { ChangeEvent } from "react";

type BaseFormProps<T  extends FormikValues> = {
    initialValues: T;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    className?: string;
    children: (e: ChildrenFormikDataType<T>) => any;
    validationSchema: any;
    handleValuesChange?: (event: ChangeEvent<any>, formik: UseFormikReturnType<T>) => T;
    externalErrors?: undefined;
    onExternalErrorChange?: undefined;
};

type ErrorFormProps<T  extends FormikValues> = Omit<BaseFormProps<T>, "externalErrors" | "onExternalErrorChange"> & {
    externalErrors: FormErrorsType<T>;
    onExternalErrorChange: (errors: FormErrorsType<T>) => void;
};

export type FormProps<T extends FormikValues> = BaseFormProps<T> | ErrorFormProps<T>;

export type UseFormikReturnType<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

export type FormHandleChangeType = (e: ChangeEvent<any>) => void;

export type ChildrenFormikDataType<T  extends FormikValues> = {
    isValid: boolean;
    errors: Partial<FormikErrors<T>>;
    handleChange: FormHandleChangeType;
} & Omit<UseFormikReturnType<T>, "handleChange" | "errors" | "isValid">;



export type FormErrorsType<T> = { [key in keyof T]?: string };
