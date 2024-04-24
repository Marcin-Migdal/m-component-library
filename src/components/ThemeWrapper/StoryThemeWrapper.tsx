import React, { CSSProperties, useRef } from "react";

import { Button, Card, Checkbox, Dropdown, ProgressSpinner, Textarea, Textfield, ToastsContainer } from "../..";
import { CardVariantTypes } from "../Panels/Card/card-interfaces";
import { ToastHandler } from "../Toast/ToastsContainer";
import { FailureIcon, SuccessIcon } from "../Toast/components/icons";
import { ToastConfigType } from "../Toast/toasts-interfaces";
import { InputLabelType, LabelPercentageWidth } from "../global-interfaces";
import ThemeWrapper from "./ThemeWrapper";
import { ThemeTypes } from "./theme-wrapper-interfaces";

export interface IStoryThemeWrapperProps {
    theme: ThemeTypes;
    inputLabelType: InputLabelType;
    error?: string;
    panelVariant?: CardVariantTypes;
}

type NewToastTypes = "ok" | "not_ok";

export const toastConfig: ToastConfigType<NewToastTypes> = {
    ok: { icon: <SuccessIcon />, default: true, variant: "success", title: "ok" },
    not_ok: { icon: <FailureIcon />, default: false, variant: "failure", title: "not_ok" },
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({ theme, inputLabelType = "floating", error = "", panelVariant = "default" }: IStoryThemeWrapperProps) => {
    const toastRef = useRef<ToastHandler<NewToastTypes>>(null);

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

                <Button variant="outlined" text="btn outlined" onClick={() => {}} />
                <Button variant="full" text="btn full" onClick={() => {}} />
                <Button variant="text" text="btn text" onClick={() => {}} />
                <Button variant="neon" text="btn neon" onClick={() => {}} />

                <SectionHeader theme={theme} text="INPUT SECTION" />

                <Textfield
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
                    name="1"
                />
                <Dropdown
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    options={options}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                    name="2"
                />
                <Checkbox label="label" labelType={checkboxLabelType} labelWidth={inputLabelWidth} error={error} />

                <SectionHeader theme={theme} text="TOAST SECTION" />

                <ToastsContainer ref={toastRef} toastConfig={toastConfig} />
                <div>
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
                                type: "not_ok",
                            })
                        }
                    />
                    {/* <Button
                        style={{ marginTop: "10px" }}
                        text="Warning toast"
                        onClick={() => toastRef.current?.addToast({ message: "Are you sure, you want to log out?", type: "warning" })}
                    />
                    <Button
                        style={{ marginTop: "10px" }}
                        text="Information toast"
                        onClick={() => toastRef.current?.addToast({ message: "You where singed out", type: "information" })}
                    /> */}
                    <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.clear()} />
                </div>

                <SectionHeader theme={theme} text="TOOLTIP SECTION" />

                <Button tooltip="test" tooltipConfig={{ position: "top" }} variant="outlined" text="Top" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ position: "bottom" }} variant="outlined" text="Bottom" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ position: "right" }} variant="outlined" text="Right" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ position: "left" }} variant="outlined" text="Left" onClick={() => {}} />

                <SectionHeader theme={theme} text="PANEL SECTION" />

                <Card variant={panelVariant} style={{ width: "300px" }}>
                    <h2 style={{ width: "100%", textAlign: "center", marginTop: "0px" }}>Card title</h2>

                    <Textfield
                        label="label"
                        placeholder="placeholder"
                        labelType={inputLabelType}
                        labelWidth={inputLabelWidth}
                        floatingInputWidth={floatingInputWidth}
                        error={error}
                    />

                    <span style={{ display: "inline-block", width: "100%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </Card>
                <SectionHeader theme={theme} text="MISCELLANEOUS" />
                <ProgressSpinner />
            </div>
        </ThemeWrapper>
    );
};

export default StoryThemeWrapper;

const options = [
    { label: "test 1", value: 1 },
    { label: "test 2", value: 2 },
    { label: "test 3", value: 3 },
    { label: "test 4", value: 4 },
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
                marginTop: "20px",
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
