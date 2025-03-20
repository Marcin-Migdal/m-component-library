import { FormikErrors, FormikValues } from "formik";
import { ReactNode } from "react";

import { SimpleChangeEvent, UseFormikResult } from "./hooks/useForm";

/** Represents the data passed to the `children` render prop function. */
export type ChildrenFormikDataType<T extends FormikValues> = {
  register: (name: keyof T) => {
    name: keyof T;
    value: T[keyof T];
    error: FormikErrors<T>[keyof T];
    onChange: (e: SimpleChangeEvent) => void;
    onBlur: (e: SimpleChangeEvent) => void;
  };

  registerBlur: (name: keyof T) => {
    name: keyof T;
    error: FormikErrors<T>[keyof T];
    onBlur: (e: SimpleChangeEvent) => void;
  };
} & UseFormikResult<T>;

export type FormProps<T extends FormikValues> = {
  /** Additional CSS class for the form container.
   * @default undefined */
  className?: string;

  /** Render prop function to render the form fields. */
  children: (args: ChildrenFormikDataType<T>) => ReactNode;

  /** Formik config returned by `useForm` custom hook. */
  formik: UseFormikResult<T>;
};
