import React, { useRef } from "react";

import ToastsContainer, { ToastHandler } from "./ToastsContainer";
import { ToastsPositionTypes } from "./toasts-interfaces";
import Button from "../Button";

export interface IStoryToastsWrapperProps {
    autoClose?: boolean;
    toastsPosition?: ToastsPositionTypes;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryToastsWrapper = ({ autoClose = true, toastsPosition = "top-right" }: IStoryToastsWrapperProps) => {
    const toastRef = useRef<ToastHandler>(null);

    return (
        <>
            <ToastsContainer ref={toastRef} autoClose={autoClose} toastsPosition={toastsPosition} />
            <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
                <Button
                    style={{ marginTop: "10px" }}
                    text="Success toast"
                    onClick={() => toastRef.current?.addToast("success", "Sign in was successful")}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Failure toast"
                    onClick={() =>
                        toastRef.current?.addToast(
                            "failure",
                            "While sign in, error has occurred, error has occurred, error has occurred, error has occurred"
                        )
                    }
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Warning toast"
                    onClick={() => toastRef.current?.addToast("warning", "Are you sure, you want to log out?")}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Information toast"
                    onClick={() => toastRef.current?.addToast("information", "You where singed out")}
                />
                <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.clear()} />
            </div>
        </>
    );
};

export default StoryToastsWrapper;
