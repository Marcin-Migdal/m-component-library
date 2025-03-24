import { FormikErrors, FormikValues } from "formik";
import { ReactNode } from "react";

import { SimpleChangeEvent, UseFormikResult } from "./hooks/useForm";

/** Represents the data passed to the `children` render prop function. */
export type ChildrenFormikDataType<T extends FormikValues> = {
  register: <TName extends keyof T>(
    name: TName
  ) => {
    name: TName;
    value: T[TName];
    error: FormikErrors<T>[TName];
    onChange: (e: SimpleChangeEvent) => void;
    onBlur: (e: SimpleChangeEvent) => void;
  };

  registerBlur: <TName extends keyof T>(
    name: TName
  ) => {
    name: TName;
    error: FormikErrors<T>[TName];
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
