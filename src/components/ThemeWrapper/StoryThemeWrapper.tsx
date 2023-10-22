import React, { useRef } from "react";

import { Input, Checkbox, Textarea, Dropdown, Button, ToastsContainer } from "..";
import { ToastHandler } from "../Toast/ToastsContainer";
import { ThemeTypes } from "./theme-wrapper-interfaces";
import ThemeWrapper from "./ThemeWrapper";

export interface IStoryThemeWrapperProps {
    theme: ThemeTypes;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({ theme }: IStoryThemeWrapperProps) => {
    const toastRef = useRef<ToastHandler>(null);

    return (
        <ThemeWrapper theme={theme}>
            <SectionHeader style={{ marginTop: "0px" }} theme={theme} text="BUTTON SECTION" />
            <div style={{ marginBottom: "20px" }}>
                <Button style={{ marginRight: "5px" }} variant="outlined" text="btn text" onClick={() => {}} />
                <Button style={{ marginRight: "5px" }} variant="full" text="btn text" onClick={() => {}} />
                <Button style={{ marginRight: "5px" }} variant="text" text="btn text" onClick={() => {}} />
            </div>

            <SectionHeader theme={theme} text="INPUT SECTION" />

            <Input label="label" labelType="floating" labelPercentageWidth={80} />
            <Checkbox label="label" labelType="right" labelPercentageWidth={80} />
            <Textarea label="label" labelType="right" labelPercentageWidth={80} />
            <Dropdown label="label" labelType="right" labelPercentageWidth={80} />
            <Dropdown label="label" labelType="right" labelPercentageWidth={80} options={options} />

            <SectionHeader theme={theme} text="TOAST SECTION" />

            <ToastsContainer ref={toastRef} />
            <div style={{ display: "flex" }}>
                <Button
                    style={{ marginRight: "10px" }}
                    text="Success toast"
                    onClick={() => toastRef.current?.handleAddToast("success", "Sign in was successful")}
                />
                <Button
                    style={{ marginRight: "10px" }}
                    text="Failure toast"
                    onClick={() =>
                        toastRef.current?.handleAddToast(
                            "failure",
                            "While sign in, error has occurred, error has occurred, error has occurred, error has occurred"
                        )
                    }
                />
                <Button
                    style={{ marginRight: "10px" }}
                    text="Warning toast"
                    onClick={() => toastRef.current?.handleAddToast("warning", "Are you sure, you want to log out?")}
                />
                <Button
                    style={{ marginRight: "10px" }}
                    text="Information toast"
                    onClick={() => toastRef.current?.handleAddToast("information", "You where singed out")}
                />
                <Button style={{ marginRight: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.handleClear()} />
            </div>
        </ThemeWrapper>
    );
};

export default StoryThemeWrapper;

const options = [
    { label: "test 1", value: 1 },
    { label: "test 2", value: 2 },
];

interface ISectionHeaderProps {
    theme: ThemeTypes;
    text: string;
    style?: any;
}

const SectionHeader = ({ theme, text, style }: ISectionHeaderProps) => {
    return <h3 style={{ ...style, width: "100%", color: theme.includes("theme-dark") ? "white" : "black" }}>{text}</h3>;
};
