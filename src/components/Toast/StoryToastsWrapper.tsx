import React, { useRef } from "react";

import ToastsContainer, { ToastHandler, ToastsPositionTypes } from "./ToastsContainer";
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
                    onClick={() => toastRef.current?.handleAddToast("success", "Sign in was successful")}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Failure toast"
                    onClick={() =>
                        toastRef.current?.handleAddToast(
                            "failure",
                            "While sign in, error has occurred, error has occurred, error has occurred, error has occurred"
                        )
                    }
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Warning toast"
                    onClick={() => toastRef.current?.handleAddToast("warning", "Are you sure, you want to log out?")}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Information toast"
                    onClick={() => toastRef.current?.handleAddToast("information", "You where singed out")}
                />
                <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.handleClear()} />
            </div>
        </>
    );
};

export default StoryToastsWrapper;
