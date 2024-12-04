import React, { CSSProperties, useRef, useState } from "react";

import { Placement } from "../../helpers/getPosition/getPosition-types";
import { ComponentSize, InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../global-types";
import ThemeWrapper from "./ThemeWrapper";

import {
  Alert,
  AlertHandler,
  Button,
  Card,
  CardVariantTypes,
  Checkbox,
  ColorPicker,
  Dropdown,
  FailureIcon,
  HueSliderCanvas,
  Icon,
  ImageField,
  ProgressSpinner,
  ReturnedColor,
  Slider,
  SuccessIcon,
  Textarea,
  Textfield,
  ToastConfig,
  ToastHandler,
  ToastsContainer,
  ToggleSwitch,
} from "../..";
import StoryBreadcrumbWrapper from "../Breadcrumb/StoryButtonWrapper";

export type StoryThemeWrapperProps = {
  darkMode: boolean;
  inputLabelType: `${InputLabel}`;
  inputSize: `${ComponentSize}`;
  error?: string;
  label?: string;
  panelVariant?: CardVariantTypes;
  disabled?: boolean;
  readOnly?: boolean;
};

type NewToastTypes = "ok" | "not_ok";

export const toastConfig: ToastConfig<NewToastTypes> = {
  ok: { icon: <SuccessIcon />, default: true, variant: "success", title: "ok" },
  not_ok: {
    icon: <FailureIcon />,
    default: false,
    variant: "failure",
    title: "not_ok",
  },
};

const options = [
  { label: "test 1", value: 1 },
  { label: "test 2", value: 2 },
  { label: "test 3", value: 3 },
  { label: "test 4", value: 4 },
];

type SectionHeaderProps = {
  text: string;
  style?: CSSProperties;
  headerStyle?: CSSProperties;
};

const SectionHeader = ({ text, style = {}, headerStyle = {} }: SectionHeaderProps) => {
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

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryThemeWrapper = ({
  darkMode,
  inputLabelType = InputLabel.FLOATING,
  inputSize = ComponentSize.MEDIUM,
  error = "",
  label = "Label",
  panelVariant = "default",
  disabled = false,
  readOnly = false,
}: StoryThemeWrapperProps) => {
  const toastRef = useRef<ToastHandler<NewToastTypes>>(null);
  const alertRef = useRef<AlertHandler>(null);

  const [hue, setHue] = useState<number | undefined>(undefined);

  const checkboxLabelType = (
    inputLabelType === InputLabel.FLOATING ? SimpleInputLabel.RIGHT : inputLabelType
  ) as SimpleInputLabel;

  const inputLabelWidth: LabelPercentageWidth | undefined = inputLabelType === InputLabel.FLOATING ? 90 : 35;
  const floatingInputWidth = 60;

  return (
    <ThemeWrapper darkMode={darkMode} hue={hue}>
      <div style={{ padding: "1rem" }}>
        <SectionHeader
          style={{ marginTop: "0px", borderTop: "none" }}
          headerStyle={{ marginTop: "unset" }}
          text="BUTTON SECTION"
        />
        <Button disabled={disabled} variant="outlined" text="btn outlined" onClick={() => {}} />
        <Button disabled={disabled} variant="full" text="btn full" onClick={() => {}} />
        <Button disabled={disabled} variant="text" text="btn text" onClick={() => {}} />
        <Button disabled={disabled} variant="neon" text="btn neon" onClick={() => {}} />
        <SectionHeader text="INPUT SECTION" />
        <Textfield
          label={label}
          placeholder="placeholder"
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          error={error}
          size={inputSize}
          disabled={disabled}
          readOnly={readOnly}
        />
        <Textarea
          label={label}
          placeholder="placeholder"
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <ImageField
          label={label}
          labelType={checkboxLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <Dropdown
          label={label}
          placeholder="placeholder"
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          error={error}
          name="1"
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <Dropdown
          label={label}
          placeholder="placeholder"
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          options={options}
          floatingInputWidth={floatingInputWidth}
          error={error}
          name="2"
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <Slider
          min={0}
          max={100}
          label={label}
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
          error={error}
        />
        <Checkbox
          label={label}
          labelType={checkboxLabelType}
          labelWidth={inputLabelWidth}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <ToggleSwitch
          label={label}
          labelType={checkboxLabelType}
          labelWidth={inputLabelWidth}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <ColorPicker
          labelType={inputLabelType}
          labelWidth={inputLabelWidth}
          floatingInputWidth={floatingInputWidth}
          label={label}
          returnedColorType={ReturnedColor.HSL}
          onChange={(color) => {
            // eslint-disable-next-line no-console
            console.log(color.target.value); // console log used for documentation;
          }}
          disabled={disabled}
          readOnly={readOnly}
          size={inputSize}
        />
        <SectionHeader text="DYNAMIC THEME COLOR CONTROL" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <HueSliderCanvas hue={0} onChange={(newHue) => setHue(newHue)} readOnly={readOnly} />
          <Button
            icon={["fas", "refresh"]}
            style={{ marginLeft: "10px" }}
            text="Default"
            onClick={() => setHue(undefined)}
          />
        </div>
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
                message:
                  "While sign in, error has occurred, error has occurred, error has occurred, error has occurred",
                type: "not_ok",
              })
            }
          />
          <Button style={{ marginTop: "10px" }} text="Clear toasts" onClick={() => toastRef.current?.clear()} />
        </div>
        <SectionHeader text="TOOLTIP SECTION" />
        <Button
          tooltip="test"
          tooltipConfig={{ placement: Placement.TOP }}
          variant="outlined"
          text="Top"
          onClick={() => {}}
        />
        <Button
          tooltip="test"
          tooltipConfig={{ placement: Placement.BOTTOM }}
          variant="outlined"
          text="Bottom"
          onClick={() => {}}
        />
        <Button
          tooltip="test"
          tooltipConfig={{ placement: Placement.RIGHT }}
          variant="outlined"
          text="Right"
          onClick={() => {}}
        />
        <Button
          tooltip="test"
          tooltipConfig={{ placement: Placement.LEFT }}
          variant="outlined"
          text="Left"
          onClick={() => {}}
        />
        <SectionHeader text="PANEL SECTION" />
        <Card variant={panelVariant} style={{ width: "300px", padding: "1rem" }}>
          <h2
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "0px",
              color: "var(--primary-text-color)",
            }}
          >
            Card title
          </h2>

          <Textfield
            label={label}
            placeholder="placeholder"
            labelType={inputLabelType}
            labelWidth={inputLabelWidth}
            floatingInputWidth={floatingInputWidth}
            error={error}
          />

          <span style={{ display: "inline-block", width: "100%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </span>
        </Card>
        <SectionHeader text="MISCELLANEOUS" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ProgressSpinner />
          <Icon icon={["fab", "facebook"]} style={{ width: "fit-content" }} />
        </div>
        <SectionHeader text="ALERT" />
        <Button text="Open alert" onClick={() => alertRef.current?.openAlert()} />
        <Alert
          ref={alertRef}
          header={{ header: "Test header" }}
          footer={{
            onConfirmBtnClick: () => {
              alertRef.current?.closeAlert();

              // eslint-disable-next-line no-console
              console.log("Confirm Button Click"); // console log used for documentation
            },
            onDeclineBtnClick: () => {
              alertRef.current?.closeAlert();

              // eslint-disable-next-line no-console
              console.log("Decline Button Click"); // console log used for documentation
            },
          }}
        >
          test
        </Alert>
        <SectionHeader text="BREADCRUMB" />
        <StoryBreadcrumbWrapper disableLastCrumb={false} variant={"default"} />
      </div>
    </ThemeWrapper>
  );
};

export default StoryThemeWrapper;
