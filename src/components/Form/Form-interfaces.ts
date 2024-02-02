import { FormikErrors, FormikHelpers, FormikValues, useFormik } from "formik";
import { ChangeEvent } from "react";

export type UseFormikReturnType<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

export type FormHandleChangeType = (e: ChangeEvent<any>) => void;

export type ChildrenFormikDataType<T  extends FormikValues> = {
    isValid: boolean;
    errors: Partial<FormikErrors<T>>;
    handleChange: FormHandleChangeType;
} & Omit<UseFormikReturnType<T>, "handleChange" | "errors" | "isValid">;

type IBaseFormProps<T  extends FormikValues> = {
    initialValues: T;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    className?: string;
    children: (e: ChildrenFormikDataType<T>) => any;
    validationSchema: any;
    handleValuesChange?: (event: ChangeEvent<any>, formik: UseFormikReturnType<T>) => T;
    externalErrors?: undefined;
    onExternalErrorChange?: undefined;
};

type IErrorFormProps<T  extends FormikValues> = Omit<IBaseFormProps<T>, "externalErrors" | "onExternalErrorChange"> & {
    externalErrors: FormErrorsType<T>;
    onExternalErrorChange: (errors: FormErrorsType<T>) => void;
};

export type IFormProps<T extends FormikValues> = IBaseFormProps<T> | IErrorFormProps<T>;

export type FormErrorsType<T> = { [key in keyof T]?: string };
