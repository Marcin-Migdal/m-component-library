import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Button } from "../../Button";
import { Form, useForm } from "../../Form";
import { DropdownChangeEvent, DropdownStringOption } from "../../Inputs/Dropdown/types";
import Alert from "./Alert";
import { useAlert } from "./hooks/useAlert";

import {
  Checkbox,
  ColorPicker,
  DateField,
  Dropdown,
  IconField,
  ImageField,
  Slider,
  Textarea,
  Textfield,
  ToggleSwitch,
} from "../../Inputs";

import {
  EmptyAlertInputsState,
  emptyAlertInputsStateSchema,
  EmptyAlertInputsSubmitState,
  FilledAlertInputsState,
  filledAlertInputsStateSchema,
  FilledAlertInputsSubmitState,
  initEmptyAlertInputsState,
  initFilledAlertInputsState,
} from "./Alert.stories-schemas";

import { ComponentCssVariableTable } from "../../../internalUtils/components/ComponentCssVariableTable";
import { cssVariablesData } from "./Alert.stories.consts";

const meta: Meta<typeof Alert> = {
  title: "Components/Popups/Alert",
  component: Alert,
  args: { header: "Alert header" },
  argTypes: {
    header: { description: "The header text for the alert." },
    alertOpen: {
      control: false,
    },
    confirmBtnText: {
      table: {
        defaultValue: { summary: "Confirm" },
      },
    },
    confirmBtnDisabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    declineBtnText: {
      table: {
        defaultValue: { summary: "Close" },
      },
    },
    declineBtnDisabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disableCloseOnEscape: {
      description: "If set to true, alert `onClose` callback will not be called when `esc` key is pressed",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disableConfirmOnEnter: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert();

    return (
      <>
        <Button text="Open alert" onClick={() => handleOpen()} />
        <Alert
          {...alertProps}
          {...args}
          onConfirm={() => {
            // eslint-disable-next-line no-console
            console.log("Confirm Button Click"); // console log used for documentation
          }}
          onDecline={() => {
            // eslint-disable-next-line no-console
            console.log("Decline Button Click"); // console log used for documentation
          }}
        >
          <Textfield />
        </Alert>
      </>
    );
  },
};

export const AlertWithEmptyControlledInputsInForm: Story = {
  render: (args) => {
    const handleSubmit = (values: EmptyAlertInputsSubmitState) => {
      // eslint-disable-next-line no-console
      console.log(values);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useForm<EmptyAlertInputsState>({
      initialValues: initEmptyAlertInputsState,
      validationSchema: emptyAlertInputsStateSchema,
      onSubmit: (state: EmptyAlertInputsSubmitState) => handleSubmit(state),
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert({
      onClose: () => formik.resetForm(),
    });

    const superiorOptions: DropdownStringOption[] = [
      { value: "1", label: "John" },
      { value: "2", label: "David" },
    ];

    const options: DropdownStringOption[] = [
      { value: "1", label: "Developer" },
      { value: "2", label: "Student" },
    ];

    return (
      <>
        <Button text="Open alert" onClick={() => handleOpen()} />

        <Alert
          {...alertProps}
          {...args}
          disableCloseOnEscape
          className="w-600-px"
          onConfirm={formik.submitForm}
          onDecline={alertProps.handleClose}
        >
          <Form formik={formik} disableSubmitOnEnter>
            {({ registerChange, registerBlur, handleClear }) => {
              return (
                <>
                  <Textfield label="name" {...registerChange("name")} />
                  <Textarea label="description" {...registerChange("description")} />
                  <Dropdown
                    clearable
                    options={superiorOptions}
                    label="superior"
                    onClear={handleClear}
                    {...registerBlur<"superior", DropdownChangeEvent<DropdownStringOption>>("superior")}
                  />
                  <Dropdown
                    clearable
                    options={options}
                    label="role"
                    onClear={handleClear}
                    {...registerBlur<"role", DropdownChangeEvent<DropdownStringOption>>("role")}
                  />
                  <DateField label="currentDate" {...registerBlur("currentDate")} />
                  <DateField label="rangeDate" range {...registerChange("rangeDate")} />
                  <ColorPicker label="color" {...registerChange("color")} />
                  <IconField label="Icon" onClear={handleClear} {...registerBlur("icon")} />
                  <ImageField label="image" {...registerBlur("image")} />
                  <Slider
                    min={0}
                    max={100}
                    label="Percentage"
                    valuePreviewType="bottom-static"
                    {...registerChange("percentage")}
                  />
                  <Checkbox label="remember" {...registerChange("remember")} />
                  <ToggleSwitch label="darkMode" {...registerChange("darkMode")} />

                  <Button text="Clear" onClick={() => formik.resetForm()} />
                </>
              );
            }}
          </Form>
        </Alert>
      </>
    );
  },
};

export const AlertWithFilledControlledInputsInForm: Story = {
  render: (args) => {
    const handleSubmit = (values: FilledAlertInputsSubmitState) => {
      // eslint-disable-next-line no-console
      console.log(values);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useForm<FilledAlertInputsState>({
      initialValues: initFilledAlertInputsState,
      validationSchema: filledAlertInputsStateSchema,
      onSubmit: (state: FilledAlertInputsSubmitState) => handleSubmit(state),
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert({
      onClose: () => formik.resetForm(),
    });

    const superiorOptions: DropdownStringOption[] = [
      { value: "1", label: "John" },
      { value: "2", label: "David" },
    ];

    const roleOptions: DropdownStringOption[] = [
      { value: "1", label: "Developer" },
      { value: "2", label: "Student" },
    ];

    return (
      <>
        <Button text="Open alert" onClick={() => handleOpen()} />

        <Alert
          {...alertProps}
          {...args}
          disableCloseOnEscape
          className="w-600-px"
          onConfirm={formik.submitForm}
          onDecline={alertProps.handleClose}
        >
          <Form formik={formik} disableSubmitOnEnter>
            {({ registerChange, registerBlur, handleClear }) => {
              return (
                <>
                  <Textfield label="name" {...registerChange("name")} />
                  <Textarea label="description" {...registerChange("description")} />
                  <Dropdown
                    clearable
                    options={superiorOptions}
                    label="superior"
                    onClear={handleClear}
                    {...registerBlur<"superior", DropdownChangeEvent<DropdownStringOption>>("superior")}
                  />
                  <Dropdown
                    clearable
                    options={roleOptions}
                    label="role"
                    onClear={handleClear}
                    {...registerBlur<"role", DropdownChangeEvent<DropdownStringOption>>("role")}
                  />
                  <DateField label="currentDate" {...registerBlur("currentDate")} />
                  <DateField label="rangeDate" range {...registerChange("rangeDate")} />
                  <ColorPicker label="color" {...registerChange("color")} />
                  <IconField label="Icon" onClear={handleClear} {...registerBlur("icon")} />
                  <ImageField label="image" {...registerBlur("image")} />
                  <Slider
                    min={0}
                    max={100}
                    label="Percentage"
                    valuePreviewType="bottom-static"
                    {...registerChange("percentage")}
                  />
                  <Checkbox label="remember" {...registerChange("remember")} />
                  <ToggleSwitch label="darkMode" {...registerChange("darkMode")} />

                  <Button text="Clear" onClick={() => formik.resetForm()} />
                </>
              );
            }}
          </Form>
        </Alert>
      </>
    );
  },
};

export const AlertWithInputs: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen, alertProps] = useAlert();

    const options: DropdownStringOption[] = [
      { value: "1", label: "Developer" },
      { value: "2", label: "Student" },
    ];

    return (
      <>
        <Button text="Open alert" onClick={() => handleOpen()} />
        <Alert
          {...alertProps}
          {...args}
          className="w-600-px"
          onConfirm={() => {
            // eslint-disable-next-line no-console
            console.log("Confirm Button Click"); // console log used for documentation
          }}
          onDecline={alertProps.handleClose}
        >
          <Textfield label="name" />
          <Textarea label="description" />
          <Dropdown options={options} label="role" />
          <DateField label="currentDate" />
          <DateField label="rangeDate" range />
          <ColorPicker label="color" />
          <IconField label="Icon" />
          <ImageField label="image" />
          <Slider min={0} max={100} label="Percentage" valuePreviewType="bottom-static" />
          <Checkbox label="remember" />
          <ToggleSwitch label="darkMode" />
        </Alert>
      </>
    );
  },
};

export const CSSVariables = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};

export const NestedAlerts: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen1, alertProps1] = useAlert();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [handleOpen2, alertProps2] = useAlert();

    return (
      <>
        <Button text="Open Alert 1" onClick={() => handleOpen1()} />
        <Alert
          {...alertProps1}
          {...args}
          header="Level 1 Alert"
          onDecline={alertProps1.handleClose}
          declineBtnText="Close Level 1"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p>This is the first level alert.</p>
            <p>Click the button below to open a nested alert.</p>
            <Button text="Open Nested Alert (Level 2)" onClick={() => handleOpen2()} />

            <Alert
              {...alertProps2}
              {...args}
              header="Level 2 Alert"
              onDecline={alertProps2.handleClose}
              declineBtnText="Close Level 2"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p>This is the second level alert.</p>
                <p>It should be displayed ABOVE the first alert.</p>
                <p>Interact with inputs here to verify nothing is blocked.</p>
                <Textfield label="Nested Input" />
              </div>
            </Alert>
          </div>
        </Alert>
      </>
    );
  },
};
