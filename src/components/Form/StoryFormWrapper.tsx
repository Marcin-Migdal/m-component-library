import React from "react";
import * as Yup from "yup";

import { Button, Form, Textfield } from "../..";

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

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryFormWrapper = () => {
    const handleSubmit = (values: SignUpState) => {
        // eslint-disable-next-line no-console
        console.log(values); // console log used for documentation
    };

    return (
        <Form<SignUpState> initialValues={signUpInitialValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
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
};

export default StoryFormWrapper;
