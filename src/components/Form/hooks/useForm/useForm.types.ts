import { FormikHelpers, FormikTouched, FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { InferType, ObjectSchema } from "yup";

export type InferSchemaType<TSchema extends ObjectSchema<Record<string, unknown>>> = InferType<TSchema>;

/** Represents a simple change event with a target containing a name and value. */
export type SimpleChangeEvent<T extends FormikValues, K extends keyof T = keyof T> = {
  target: {
    name: string;
    value: T[K];
  };
};
type BaseUseFormArgs<T extends FormikValues> = {
  /** Initial values for the form fields.
   * @default {} */
  initialValues: T;

  /** Initial touched values for the fields.
   * @default {} */
  initialTouched?: FormikTouched<T>;

  /** Callback function triggered when the form is submitted. */
  onSubmit?: (values: T, formikHelpers: FormikHelpers<T>) => void;

  /** Yup validation schema for form validation. */
  validationSchema: Yup.ObjectSchema<T>;

  /** Flag that controls if validation will run on component mount.
   * @default false */
  validateOnMount?: boolean;

  /** Callback function triggered when form values validation change.
   * @default undefined */
  onValidChange?: (isValid: boolean) => undefined;

  /** Additional errors to display in the form (e.g., API errors), those errors will replace default errors if they exist. */
  additionalErrors?: undefined;

  /** Callback function triggered when additional errors change, this function will be called when related input is called. */
  onAdditionalErrors?: undefined;
};
/** Represents a type for form errors, where each key corresponds to a field name. */

export type FormErrors<T> = {
  [K in keyof T]?: T[K] extends string | number | boolean | undefined | null ? string : FormErrors<T[K]>;
};
type ErrorUseFormArgs<T extends FormikValues> = Omit<BaseUseFormArgs<T>, "additionalErrors" | "onAdditionalErrors"> & {
  /** Additional errors to display in the form (e.g., API errors), those errors will replace default errors if they exist. */
  additionalErrors: FormErrors<T>;

  /** Callback function triggered when additional errors change, this function will be called when related input is called. */
  onAdditionalErrors: (errors: FormErrors<T>) => void;
};

export type UseFormArgs<T extends FormikValues> = BaseUseFormArgs<T> | ErrorUseFormArgs<T>;

export type UseFormikResult<T extends FormikValues> = Omit<
  ReturnType<typeof useFormik<T>>,
  "handleChange" | "handleBlur" | "errors"
> & {
  handleChange: (e: SimpleChangeEvent<T>) => void;
  handleBlur: (e: SimpleChangeEvent<T>) => void;
  handleClear: (e: SimpleChangeEvent<T>) => void;
  formikOrgHandleBlur: {
    (e: React.FocusEvent<Element, Element>): void;
  };
  errors: FormErrors<T>;
};
