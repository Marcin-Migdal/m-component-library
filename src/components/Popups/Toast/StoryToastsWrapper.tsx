import React, { useRef } from "react";

import Button from "../../Button";
import ToastsContainer, { ToastHandler } from "./ToastsContainer";
import { ToastsPositionTypes } from "./toasts-interfaces";

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
                    onClick={() => toastRef.current?.addToast({ message: "Sign in was successful" })}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Failure toast"
                    onClick={() =>
                        toastRef.current?.addToast({
                            message: "While sign in, error has occurred, error has occurred, error has occurred, error has occurred",
                            type: "failure",
                        })
                    }
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Warning toast"
                    onClick={() => toastRef.current?.addToast({ message: "Are you sure, you want to log out?", type: "warning" })}
                />
                <Button
                    style={{ marginTop: "10px" }}
                    text="Information toast"
                    onClick={() => toastRef.current?.addToast({ message: "You where singed out", type: "information" })}
                />
                <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.clear()} />
            </div>
        </>
    );
};

export default StoryToastsWrapper;
