import { FormikValues } from "formik";
import { ReactNode } from "react";

import { InputErrorType } from "../Inputs/_inputsComponents";
import { SimpleChangeEvent, UseFormikResult } from "./hooks/useForm";

/** Represents the data passed to the `children` render prop function. */

export type ChildrenFormikDataType<T extends FormikValues> = {
  register: <TName extends keyof T, TChangeEvent extends SimpleChangeEvent = SimpleChangeEvent>(
    name: TName
  ) => {
    name: TName;
    value: T[TName];
    error: InputErrorType;
    onChange: (e: TChangeEvent) => void;
    onBlur: (e: TChangeEvent) => void;
  };

  registerBlur: <TName extends keyof T>(
    name: TName
  ) => {
    name: TName;
    error: InputErrorType;
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
