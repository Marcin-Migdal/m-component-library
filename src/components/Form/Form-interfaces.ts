import { FormikErrors, FormikHelpers, IUseFormingObj } from "formik";
import { ChangeEvent } from "react";

export type FormHandleChangeType = (e: ChangeEvent<any>) => void;

export type ChildrenFormikDataType<T> = {
    isValid: boolean;
    errors: Partial<FormikErrors<T>>;
    handleChange: FormHandleChangeType;
} & Omit<IUseFormingObj<T>, "handleChange" | "errors" | "isValid">;

type IBaseFormProps<T> = {
    initialValues: T;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
    className?: string;
    children: (e: ChildrenFormikDataType<T>) => any;
    validationSchema: any;
    handleValuesChange?: (event: ChangeEvent<any>, T: IUseFormingObj<T>) => T;
    externalErrors?: undefined;
    onExternalErrorChange?: undefined;
};

type IErrorFormProps<T> = Omit<IBaseFormProps<T>, "externalErrors" | "onExternalErrorChange"> & {
    externalErrors: FormErrorsType<T>;
    onExternalErrorChange: (errors: FormErrorsType<T>) => void;
};

export type IFormProps<T> = IBaseFormProps<T> | IErrorFormProps<T>;

export type FormErrorsType<T> = { [key in keyof T]?: string };
