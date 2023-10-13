import React, { useRef } from "react";

import ToastsContainer, { ToastHandler } from "./components/ToastsList";
import Button from "../Button";

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryToastsWrapper = ({}) => {
    const toastRef = useRef<ToastHandler>(null);

    return (
        <>
            <ToastsContainer ref={toastRef} autoClose={false} toastsPosition="top-right" />
            <Button text="Success toast" onClick={() => toastRef.current?.handleAddToast("success", "Sign in was successful")} />
            <Button text="Failure toast" onClick={() => toastRef.current?.handleAddToast("failure", "While sign in, error has occurred")} />
            <Button text="Warning" onClick={() => toastRef.current?.handleAddToast("warning", "Are you sure, you want to log out?")} />
            <Button text="Clear" onClick={() => toastRef.current?.handleClear()} />
        </>
    );
};

export default StoryToastsWrapper;
