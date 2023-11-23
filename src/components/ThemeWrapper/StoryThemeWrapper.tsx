import React, { CSSProperties, useRef } from "react";

import { Input, Checkbox, Textarea, Dropdown, Button, ToastsContainer } from "..";
import { InputLabelType, LabelPercentageWidth } from "../global-interfaces";
import { ToastHandler } from "../Toast/ToastsContainer";
import { ThemeTypes } from "./theme-wrapper-interfaces";
import ThemeWrapper from "./ThemeWrapper";

export interface IStoryThemeWrapperProps {
    theme: ThemeTypes;
    inputLabelType: InputLabelType;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({ theme, inputLabelType = "floating" }: IStoryThemeWrapperProps) => {
    const toastRef = useRef<ToastHandler>(null);

    const checkboxLabelType = inputLabelType == "floating" ? "right" : inputLabelType;
    const inputLabelWidth: LabelPercentageWidth | undefined = inputLabelType == "floating" ? 90 : 20;
    const floatingInputWidth = 50;

    return (
        <ThemeWrapper theme={theme}>
            <div style={{ padding: "1rem" }}>
                <SectionHeader
                    style={{ marginTop: "0px", borderTop: "none" }}
                    headerStyle={{ marginTop: "unset" }}
                    theme={theme}
                    text="BUTTON SECTION"
                />
                <div style={{ marginBottom: "20px" }}>
                    <Button variant="outlined" text="btn text" onClick={() => {}} />
                    <Button variant="full" text="btn text" onClick={() => {}} />
                    <Button variant="text" text="btn text" onClick={() => {}} />
                </div>

                <SectionHeader theme={theme} text="INPUT SECTION" />

                <Input
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                />
                <Textarea
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                />
                <Dropdown
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                />
                <Dropdown
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    options={options}
                    floatingInputWidth={floatingInputWidth}
                />
                <Checkbox label="label" labelType={checkboxLabelType} labelWidth={inputLabelWidth} />

                <SectionHeader theme={theme} text="TOAST SECTION" />

                <ToastsContainer ref={toastRef} />
                <div style={{ display: "flex" }}>
                    <Button text="Success toast" onClick={() => toastRef.current?.handleAddToast("success", "Sign in was successful")} />
                    <Button
                        text="Failure toast"
                        onClick={() =>
                            toastRef.current?.handleAddToast(
                                "failure",
                                "While sign in, error has occurred, error has occurred, error has occurred, error has occurred"
                            )
                        }
                    />
                    <Button
                        text="Warning toast"
                        onClick={() => toastRef.current?.handleAddToast("warning", "Are you sure, you want to log out?")}
                    />
                    <Button
                        text="Information toast"
                        onClick={() => toastRef.current?.handleAddToast("information", "You where singed out")}
                    />
                    <Button style={{ marginRight: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.handleClear()} />
                </div>
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
    style?: CSSProperties;
    headerStyle?: CSSProperties;
}

const SectionHeader = ({ theme, text, style, headerStyle }: ISectionHeaderProps) => {
    return (
        <div
            style={{
                width: "calc(100% + 32px)",
                borderTop: `1px solid ${theme.includes("theme-dark") ? "white" : "black"}`,
                marginLeft: "-16px",
                ...style,
            }}
        >
            <h3
                style={{
                    ...headerStyle,
                    width: "100%",
                    color: theme.includes("theme-dark") ? "white" : "black",
                    marginLeft: "16px",
                }}
            >
                {text}
            </h3>
        </div>
    );
};
