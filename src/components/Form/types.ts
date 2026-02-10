import { FormikValues } from "formik";
import { ReactNode } from "react";

import { InputErrorType } from "../Inputs/_inputsComponents";
import { SimpleChangeEvent, UseFormikResult } from "./hooks/useForm/useForm.types";

type BaseRegisterResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TFormState extends FormikValues,
> = {
  name: TName;
  error: InputErrorType | undefined;
  onBlur: (e: TChangeEvent) => void;
  disableSubmitOnEnter: boolean;
};
// Specific register result types for each config type
export type ControlledRegisterChangeResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TFormState extends FormikValues,
> = {
  value: TFormState[TName];
  onChange: (e: TChangeEvent) => void;
} & BaseRegisterResult<TName, TChangeEvent, TFormState>;

export type UncontrolledRegisterChangeResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TFormState extends FormikValues,
> = {
  onChange: (e: TChangeEvent) => void;
} & BaseRegisterResult<TName, TChangeEvent, TFormState>;

export type ControlledRegisterBlurResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TFormState extends FormikValues,
> = {
  value: TFormState[TName];
} & BaseRegisterResult<TName, TChangeEvent, TFormState>;

export type UncontrolledRegisterBlurResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TFormState extends FormikValues,
> = BaseRegisterResult<TName, TChangeEvent, TFormState>;

// Type that resolves to the correct return type based on the config type parameter
export type RegisterChangeResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TControlled extends boolean,
  TFormState extends FormikValues,
> = TControlled extends true
  ? ControlledRegisterChangeResult<TName, TChangeEvent, TFormState>
  : UncontrolledRegisterChangeResult<TName, TChangeEvent, TFormState>;

export type RegisterBlurResult<
  TName extends keyof TFormState,
  TChangeEvent extends SimpleChangeEvent<TFormState>,
  TControlled extends boolean,
  TFormState extends FormikValues,
> = TControlled extends true
  ? ControlledRegisterBlurResult<TName, TChangeEvent, TFormState>
  : UncontrolledRegisterBlurResult<TName, TChangeEvent, TFormState>;

/** Represents the data passed to the `children` render prop function. */
export type ChildrenFormikDataType<TFormState extends FormikValues> = {
  registerChange: <
    TName extends keyof TFormState,
    TChangeEvent extends SimpleChangeEvent<TFormState> = SimpleChangeEvent<TFormState>,
    TControlled extends boolean = true,
  >(
    name: TName,
    controlled?: TControlled,
  ) => RegisterChangeResult<TName, TChangeEvent, TControlled, TFormState>;

  registerBlur: <
    TName extends keyof TFormState,
    TBlurEvent extends SimpleChangeEvent<TFormState> = SimpleChangeEvent<TFormState>,
    TControlled extends boolean = true,
  >(
    name: TName,
    controlled?: TControlled,
  ) => RegisterBlurResult<TName, TBlurEvent, TControlled, TFormState>;
} & UseFormikResult<TFormState>;

export type FormProps<TFormState extends FormikValues> = {
  /** Additional CSS class for the form container.
   * @default undefined */
  className?: string;

  /** Render prop function to render the form fields. */
  children: (args: ChildrenFormikDataType<TFormState>) => ReactNode;

  /** Formik config returned by `useForm` custom hook. */
  formik: UseFormikResult<TFormState>;

  /** Whether inputs have disabled form submitting with enter key press. Its good to set this props to true when using Form and inputs inside alert that handles submit on confirm.
   * @default false */
  disableSubmitOnEnter?: boolean;

  t?: (string: string) => string;
};
