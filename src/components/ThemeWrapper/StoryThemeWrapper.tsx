import React, { CSSProperties, useRef } from "react";

import { Input, Checkbox, Textarea, Dropdown, Button, ToastsContainer } from "../..";
import { InputLabelType, LabelPercentageWidth } from "../global-interfaces";
import { ILabelValue } from "../Inputs/Dropdown/dropdown-interfaces";
import { ToastHandler } from "../Toast/ToastsContainer";
import { ThemeTypes } from "./theme-wrapper-interfaces";
import ThemeWrapper from "./ThemeWrapper";

export interface IStoryThemeWrapperProps {
    theme: ThemeTypes;
    inputLabelType: InputLabelType;
    error?: string;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({ theme, inputLabelType = "floating", error = "" }: IStoryThemeWrapperProps) => {
    const toastRef = useRef<ToastHandler>(null);

    const checkboxLabelType = inputLabelType == "floating" ? "right" : inputLabelType;
    const inputLabelWidth: LabelPercentageWidth | undefined = inputLabelType == "floating" ? 90 : 20;
    const floatingInputWidth = 60;

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
                    <Button variant="outlined" text="btn outlined" onClick={() => {}} />
                    <Button variant="full" text="btn full" onClick={() => {}} />
                    <Button variant="text" text="btn text" onClick={() => {}} />
                    <Button variant="neon" text="btn neon" onClick={() => {}} />
                </div>

                <SectionHeader theme={theme} text="INPUT SECTION" />

                <Input
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                />
                <Textarea
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                />
                <Dropdown
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                />
                <Dropdown<ILabelValue<number>>
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    options={options}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                    onChange={(event, selected) => {
                        if (selected) {
                            selected.value;
                            selected.label;
                        }
                    }}
                />
                <Checkbox label="label" labelType={checkboxLabelType} labelWidth={inputLabelWidth} error={error} />

                <SectionHeader theme={theme} text="TOAST SECTION" />

                <ToastsContainer ref={toastRef} />
                <div>
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

const options: ILabelValue<number>[] = [
    { label: "test 1", value: 1 },
    { label: "test 2", value: 2 },
    { label: "test 3", value: 3 },
    { label: "test 4", value: 4 },
    { label: "test 5", value: 5 },
    { label: "test 6", value: 6 },
    { label: "test 7", value: 7 },
    { label: "test 8", value: 8 },
    { label: "test 9", value: 9 },
    { label: "test 10", value: 10 },
    { label: "test 11", value: 11 },
    { label: "test 12", value: 12 },
    { label: "test 13", value: 13 },
];

export type ILabelValue2 = {
    name: string;
    id: boolean;
};

const options2: ILabelValue2[] = [
    { name: "test 1", id: true },
    { name: "test 2", id: true },
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
