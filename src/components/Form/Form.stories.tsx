import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import * as Yup from "yup";

import { Button } from "../Button";
import { Dropdown, Textarea } from "../Inputs";
import { DropdownChangeEvent, DropdownStringOption } from "../Inputs/Dropdown/types";
import { NumberField } from "../Inputs/NumberField";
import { Textfield } from "../Inputs/Textfield";
import Form from "./Form";
import { useForm } from "./hooks/useForm/useForm";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  argTypes: {
    className: {
      description: "Additional CSS class for the form container.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      description: "Render prop function to render the form fields.",
      control: false,
      table: {
        type: { summary: "(e: ChildrenFormikDataType<T>) => ReactNode" },
      },
    },
    formik: {
      control: false,
    },
  },
};

export default meta;

type SignUpState = {
  email: string;
  userName: string;
  password: string;
  verifyPassword: string;
  userDescription: string;
  role: DropdownStringOption | null;
  superior: DropdownStringOption | null;
  yearOfBirth: number | null;
};

const signUpInitialValues: SignUpState = {
  email: "",
  userName: "",
  password: "",
  verifyPassword: "",
  userDescription: "",
  role: null,
  superior: null,
  yearOfBirth: null,
};

const signUpValidationSchema = Yup.object().shape({
  role: Yup.object()
    .nullable()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .required("Required"),
  superior: Yup.object()
    .nullable()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .required("Required"),
  email: Yup.string().email("Invalid email addres").required("Required"),
  userName: Yup.string()
    .required("Required")
    .matches(/^S*/, "no spaces")
    .min(3, "Must be at least 3 characters")
    .max(20, "Max length of the password is 20 characters"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters long")
    .max(20, "Max length of the password is 20 characters"),
  verifyPassword: Yup.string()
    .required("Required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  userDescription: Yup.string().required("Required"),
  yearOfBirth: Yup.number().nullable().min(1900).max(new Date().getFullYear()).required("Required"),
});

export const Default: StoryObj<typeof Form> = {
  render: () => {
    const handleSubmit = (values: SignUpState) => {
      // eslint-disable-next-line no-console
      console.log(values);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useForm<SignUpState>({
      initialValues: signUpInitialValues,
      validationSchema: signUpValidationSchema,
      onSubmit: handleSubmit,
    });

    const roleOptions: DropdownStringOption[] = [
      { value: "1", label: "Developer" },
      { value: "2", label: "Student" },
    ];

    const superiorOptions: DropdownStringOption[] = [
      { value: "1", label: "John" },
      { value: "2", label: "Paul" },
    ];

    return (
      <Form formik={formik}>
        {({ values, handleChange, isValid, registerChange }) => (
          <>
            <Textfield label="Username" {...registerChange("userName")} />
            <Textfield label="Email" {...registerChange("email")} />
            <Textfield type="password" label="Password" {...registerChange("password")} />
            <Textfield type="password" label="Verify Password" {...registerChange("verifyPassword")} />

            <Textarea label="User description" {...registerChange("userDescription")} />
            <NumberField label="Year of birth" {...registerChange("yearOfBirth")} />
            <Dropdown
              label="Role"
              options={roleOptions}
              {...registerChange<"role", DropdownChangeEvent<DropdownStringOption>>("role")}
            />
            <Dropdown
              label="Superior"
              options={superiorOptions}
              name="superior"
              onChange={(e) => handleChange(e)}
              value={values.superior}
            />
            <Button text="Submit" type="submit" variant="full" disabled={!isValid} />
            <Button text="Clear" onClick={() => formik.resetForm()} />
          </>
        )}
      </Form>
    );
  },
};

export const SubmitButtonOutsideForm: StoryObj<typeof Form> = {
  render: () => {
    const handleSubmit = (values: SignUpState) => {
      // eslint-disable-next-line no-console
      console.log(values);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useForm({
      initialValues: signUpInitialValues,
      validationSchema: signUpValidationSchema,
      onSubmit: handleSubmit,
    });

    return (
      <>
        <Form formik={formik}>
          {({ registerChange: register }) => (
            <>
              <Textfield label="Username" {...register("userName")} />
              <Textfield label="Email" {...register("email")} />
              <Textfield type="password" label="Password" {...register("password")} />
              <Textfield type="password" label="Verify Password" {...register("verifyPassword")} />
            </>
          )}
        </Form>
        <Button text="Submit" variant="full" disabled={!formik.isValid} onClick={() => formik.submitForm()} />
      </>
    );
  },
};
