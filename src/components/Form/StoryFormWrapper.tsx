import * as Yup from "yup";
import React from "react";

import { Button, Form, Input } from "../..";

export interface IStoryFormWrapperProps {}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryFormWrapper = (props: IStoryFormWrapperProps) => {
    const handleSubmit = (values: ISignUpState) => {
        console.log(values);
    };

    return (
        <Form<ISignUpState>
            className="chat-form sign-in"
            initialValues={signUpInitialValues}
            handleSubmit={handleSubmit}
            validationSchema={signUpValidationSchema}
        >
            {({ values, errors, handleChange, handleBlur, isValid }) => (
                <>
                    <Input
                        label="Username"
                        value={values.userName}
                        name="userName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.userName}
                    />
                    <Input
                        label="Email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.password}
                    />
                    <Input
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
};

export default StoryFormWrapper;

interface ISignUpState {
    email: string;
    userName: string;
    password: string;
    verifyPassword: string;
}

const signUpInitialValues: ISignUpState = {
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
