import { FormikErrors, FormikHelpers, FormikValues, useFormik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

/** Represents a simple change event with a target containing a name and value. */
export type SimpleChangeEvent = {
  target: {
    name: string;
    value: unknown;
  };
};

type BaseFormProps<T extends FormikValues> = {
  /** Initial values for the form fields.
   * @default {} */
  initialValues: T;

  /** Callback function triggered when the form is submitted. */
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;

  /** Additional CSS class for the form container.
   * @default undefined */
  className?: string;

  /** Render prop function to render the form fields. */
  children: (e: ChildrenFormikDataType<T>) => ReactNode;

  /** Yup validation schema for form validation. */
  validationSchema: Yup.ObjectSchema<T>;

  /** Callback function to handle custom value changes.
   * @default undefined */
  handleValuesChange?: (event: SimpleChangeEvent, formik: UseFormikReturnType<T>) => T;

  /** External errors to display in the form (e.g., API errors).
   * @default {} */
  externalErrors?: undefined;

  /** Callback function triggered when external errors change.
   * @default undefined */
  onExternalErrorChange?: undefined;
};

type ErrorFormProps<T extends FormikValues> = Omit<BaseFormProps<T>, "externalErrors" | "onExternalErrorChange"> & {
  /** External errors to display in the form (e.g., API errors). */
  externalErrors: FormErrorsType<T>;

  /** Callback function triggered when external errors change. */
  onExternalErrorChange: (errors: FormErrorsType<T>) => void;
};

export type FormProps<T extends FormikValues> = BaseFormProps<T> | ErrorFormProps<T>;

/** Represents the return type of the `useFormik` hook. */
export type UseFormikReturnType<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

/** Represents a function type for handling form value changes. */
export type FormHandleChangeType = (e: SimpleChangeEvent) => void;

/** Represents the data passed to the `children` render prop function. */
export type ChildrenFormikDataType<T extends FormikValues> = {
  isValid: boolean;
  errors: Partial<FormikErrors<T>>;
  handleChange: FormHandleChangeType;
} & Omit<UseFormikReturnType<T>, "handleChange" | "errors" | "isValid">;

/** Represents a type for form errors, where each key corresponds to a field name. */
export type FormErrorsType<T> = { [key in keyof T]?: string };
