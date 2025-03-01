import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import * as Yup from "yup";

import { Button } from "../Button";
import { Textfield } from "../Inputs/Textfield";
import Form from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  argTypes: {
    initialValues: {
      description: "Initial values for the form fields.",
      control: false,
      table: {
        type: { summary: "Object" },
      },
    },
    onSubmit: {
      description: "Callback function triggered when the form is submitted.",
      control: false,
      table: {
        type: { summary: "(values: T, formikHelpers: FormikHelpers<T>) => void" },
      },
    },
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
    validationSchema: {
      description: "Yup validation schema for form validation.",
      control: false,
      table: {
        type: { summary: "Object" },
      },
    },
    handleValuesChange: {
      description: "Callback function to handle custom value changes.",
      control: false,
      table: {
        type: { summary: "(event: SimpleChangeEvent, formik: UseFormikReturnType<T>) => T" },
      },
    },
    externalErrors: {
      description: "External errors to display in the form (e.g., API errors).",
      control: false,
      table: {
        type: { summary: "Object" },
      },
    },
    onExternalErrorChange: {
      description: "Callback function triggered when external errors change.",
      control: false,
      table: {
        type: { summary: "(errors: FormErrorsType<T>) => void" },
      },
    },
  },
};

export default meta;

type SignUpState = {
  email: string;
  userName: string;
  password: string;
  verifyPassword: string;
};

const signUpInitialValues: SignUpState = {
  email: "",
  userName: "",
  password: "",
  verifyPassword: "",
};

const signUpValidationSchema = Yup.object().shape({
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
});

export const SignUpForm: StoryObj<typeof Form> = {
  render: () => {
    const handleSubmit = (values: SignUpState) => {
      // eslint-disable-next-line no-console
      console.log(values); // console log used for documentation
    };

    return (
      <Form<SignUpState>
        initialValues={signUpInitialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({ values, errors, handleChange, handleBlur, isValid }) => (
          <>
            <Textfield
              label="Username"
              value={values.userName}
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userName}
            />
            <Textfield
              label="Email"
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
            <Textfield
              type="password"
              label="Password"
              value={values.password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
            />
            <Textfield
              type="password"
              label="Verify Password"
              value={values.verifyPassword}
              name="verifyPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.verifyPassword}
            />
            <Button text="Submit" type="submit" variant="full" disabled={!isValid} />
          </>
        )}
      </Form>
    );
  },
};
