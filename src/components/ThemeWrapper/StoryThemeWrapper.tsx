import React, { CSSProperties, useRef } from "react";

import { CardVariantTypes } from "../Panels/Card/card-interfaces";
import Alert from "../Popups/Alerts/Alert";
import { FailureIcon, SuccessIcon } from "../Popups/Toast/components/icons";
import { InputLabelType, LabelPercentageWidth } from "../global-interfaces";
import ThemeWrapper from "./ThemeWrapper";
import { ThemeTypes } from "./theme-wrapper-interfaces";

import {
    AlertHandler,
    Button,
    Card,
    Checkbox,
    ColorPicker,
    Dropdown,
    ProgressSpinner,
    ReturnedColorType,
    Slider,
    Textarea,
    Textfield,
    ToastConfigType,
    ToastHandler,
    ToastsContainer,
} from "../..";

export interface IStoryThemeWrapperProps {
    theme: ThemeTypes;
    inputLabelType: InputLabelType;
    error?: string;
    panelVariant?: CardVariantTypes;
    disabled?: boolean;
}

type NewToastTypes = "ok" | "not_ok";

export const toastConfig: ToastConfigType<NewToastTypes> = {
    ok: { icon: <SuccessIcon />, default: true, variant: "success", title: "ok" },
    not_ok: { icon: <FailureIcon />, default: false, variant: "failure", title: "not_ok" },
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({
    theme,
    inputLabelType = "floating",
    error = "",
    panelVariant = "default",
    disabled,
}: IStoryThemeWrapperProps) => {
    const toastRef = useRef<ToastHandler<NewToastTypes>>(null);
    const alertRef = useRef<AlertHandler>(null);

    const checkboxLabelType = inputLabelType == "floating" ? "right" : inputLabelType;
    const inputLabelWidth: LabelPercentageWidth | undefined = inputLabelType == "floating" ? 90 : 35;
    const floatingInputWidth = 60;

    return (
        <ThemeWrapper theme={theme}>
            <div style={{ padding: "1rem" }}>
                <SectionHeader style={{ marginTop: "0px", borderTop: "none" }} headerStyle={{ marginTop: "unset" }} text="BUTTON SECTION" />

                <Button disabled={disabled} variant="outlined" text="btn outlined" onClick={() => {}} />
                <Button disabled={disabled} variant="full" text="btn full" onClick={() => {}} />
                <Button disabled={disabled} variant="text" text="btn text" onClick={() => {}} />
                <Button disabled={disabled} variant="neon" text="btn neon" onClick={() => {}} />

                <SectionHeader text="INPUT SECTION" />

                <Textfield
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                    disabled={disabled}
                />
                <Textarea
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                    value="test"
                    disabled={disabled}
                />
                <Dropdown
                    label="label"
                    placeholder="placeholder"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    error={error}
                    name="1"
                    disabled={disabled}
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
                    disabled={disabled}
                />
                <Slider
                    min={0}
                    max={100}
                    label="label"
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    disabled={disabled}
                />
                <Checkbox label="label" labelType={checkboxLabelType} labelWidth={inputLabelWidth} error={error} disabled={disabled} />

                <ColorPicker
                    labelType={inputLabelType}
                    labelWidth={inputLabelWidth}
                    floatingInputWidth={floatingInputWidth}
                    label="test"
                    returnedColorType={ReturnedColorType.RGB}
                    onChange={(color) => console.log(color)}
                    disabled={disabled}
                />

                <SectionHeader text="TOAST SECTION" />

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
                    <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.clear()} />
                </div>

                <SectionHeader text="TOOLTIP SECTION" />

                <Button tooltip="test" tooltipConfig={{ placement: "top" }} variant="outlined" text="Top" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ placement: "bottom" }} variant="outlined" text="Bottom" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ placement: "right" }} variant="outlined" text="Right" onClick={() => {}} />
                <Button tooltip="test" tooltipConfig={{ placement: "left" }} variant="outlined" text="Left" onClick={() => {}} />

                <SectionHeader text="PANEL SECTION" />

                <Card variant={panelVariant} style={{ width: "300px", padding: "1rem" }}>
                    <h2 style={{ width: "100%", textAlign: "center", marginTop: "0px", color: "var(--primary-text-color)" }}>Card title</h2>

                    <Textfield
                        label="label"
                        placeholder="placeholder"
                        labelType={inputLabelType}
                        labelWidth={inputLabelWidth}
                        floatingInputWidth={floatingInputWidth}
                        error={error}
                    />

                    <span style={{ display: "inline-block", width: "100%", color: "var(--primary-text-color)" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </Card>
                <SectionHeader text="MISCELLANEOUS" />
                <ProgressSpinner />
                <SectionHeader text="ALERT" />

                <Button text="Open alert" onClick={() => alertRef.current?.openAlert()} />
                <Alert
                    ref={alertRef}
                    header={{ header: "Test header" }}
                    footer={{
                        onConfirmBtnClick: () => {
                            alertRef.current?.closeAlert();
                            console.log("Confirm Button Click");
                        },
                        onDeclineBtnClick: () => {
                            alertRef.current?.closeAlert();
                            console.log("Decline Button Click");
                        },
                    }}
                >
                    test
                </Alert>
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
    text: string;
    style?: CSSProperties;
    headerStyle?: CSSProperties;
}

const SectionHeader = ({ text, style, headerStyle }: ISectionHeaderProps) => {
    return (
        <div
            style={{
                width: "calc(100% + 16px)",
                borderTop: "1px solid var(--primary-text-color)",
                marginLeft: "-16px",
                marginTop: "20px",
                ...style,
            }}
        >
            <h3
                style={{
                    ...headerStyle,
                    width: "100%",
                    color: "var(--primary-text-color)",
                    marginLeft: "16px",
                }}
            >
                {text}
            </h3>
        </div>
    );
};
