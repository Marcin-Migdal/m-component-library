import React, { ReactNode, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, SectionState } from "../Accordion";
import { Breadcrumb } from "../Breadcrumb";
import { crumbs } from "../Breadcrumb/Breadcrumb.stories";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import { dropdownMenuOptions } from "../DropdownMenu/DropdownMenu.stories";
import { ComponentSize, FloatingInputWidth, InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../global-types";
import { DateField, Textfield } from "../Inputs";
import { Checkbox } from "../Inputs/Checkbox";
import { ColorPicker } from "../Inputs/ColorPicker";
import { Dropdown } from "../Inputs/Dropdown";
import { options } from "../Inputs/Dropdown/Dropdown.stories";
import { IconField } from "../Inputs/IconField";
import { ImageField } from "../Inputs/ImageField";
import { Slider } from "../Inputs/Slider";
import { Textarea } from "../Inputs/Textarea";
import { ToggleSwitch } from "../Inputs/ToggleSwitch";
import { HueSliderCanvas, Icon, ProgressSpinner, Tooltip } from "../Miscellaneous";
import { Card } from "../Panels";
import { Alert, ToastHandler, ToastsContainer, useAlert } from "../Popups";
import ThemeWrapper from "./ThemeWrapper";

export type ThemeWrapperStoryExampleProps = {
  darkMode?: boolean;

  size?: `${ComponentSize}`;
  label?: string;
  labelType?: `${InputLabel}`;
  labelWidth?: LabelPercentageWidth;
  floatingInputWidth?: FloatingInputWidth;
  disabled?: boolean;
  placeholder?: string;
  error?: string;

  hue?: number;
};

type Section = {
  toggleText: string;
  content: ReactNode;
};

/** `ThemeWrapper` is a wrapper component, that has to wrap component for proper styles and themes to be applied to the components
 * <br/> Props with <b>Custom Story control</b> are not `ThemeWrapper` props,
 * they are props specially created for the sake of the `ThemeWrapper` stories documentation,
 * to control components that are rendered in the `ThemeWrapper`.
 * */
export const ThemeWrapperStoryExample = ({
  darkMode,
  size,
  label,
  labelType,
  labelWidth,
  floatingInputWidth,
  disabled,
  placeholder,
  error,
}: ThemeWrapperStoryExampleProps) => {
  const iconRef = useRef<SVGSVGElement>(null);
  const toastRef = useRef<ToastHandler>(null);

  const [handleOpen, alertProps] = useAlert();

  const [themeHue, setThemeHue] = useState<number | undefined>(undefined);
  const [expanded, setExpanded] = useState<SectionState>({ "Dropdown Menu": true });

  const handleHueChange = (hue: number) => setThemeHue(hue);

  const inputProps = {
    size,
    label,
    labelType,
    labelWidth,
    disabled,
    placeholder,
    error,
  };

  const simpleInputLabel: SimpleInputLabel = (labelType === "floating" ? "left" : labelType) as SimpleInputLabel;

  const sectionsArray: Section[] = [
    { toggleText: "Breadcrumb", content: <Breadcrumb crumbs={crumbs} /> },
    {
      toggleText: "Button",
      content: (
        <div className="flex">
          <Button
            size={size}
            disabled={disabled}
            onClick={() => {}}
            text="Outlined Icon"
            variant="outlined"
            icon="plus"
          />
          <Button size={size} onClick={() => {}} text="Outlined Busy" variant="outlined" busy />
          <Button size={size} disabled={disabled} onClick={() => {}} text="Outlined" variant="outlined" />
          <Button size={size} disabled={disabled} onClick={() => {}} text="Full" variant="full" />
          <Button size={size} disabled={disabled} onClick={() => {}} text="Text" variant="text" />
          <Button size={size} disabled={disabled} onClick={() => {}} text="Neon" variant="neon" />
        </div>
      ),
    },
    {
      toggleText: "Dropdown Menu",
      content: (
        <DropdownMenu options={dropdownMenuOptions}>
          <Button style={{ width: "fit-content" }} text="Currency" icon="money-bill-wave" onClick={() => {}} />
        </DropdownMenu>
      ),
    },
    {
      toggleText: "Icons & Progress spinner",
      content: (
        <>
          <div className="flex g-4-rem mb-4-rem">
            <Icon icon="search" />
            <Icon icon="home" />
            <Icon icon="user" />
            <Icon icon="cog" />
            <Icon icon="envelope" />
            <Icon icon="bell" />
            <Icon icon="star" />
            <Icon icon="trash-alt" />
            <Icon icon="check-circle" />
            <Icon icon="exclamation-circle" />
          </div>
          <ProgressSpinner />
        </>
      ),
    },
    {
      toggleText: "Tooltip",
      content: (
        <div>
          <FontAwesomeIcon ref={iconRef} icon="plus" />
          <Tooltip placement="right" targetRef={iconRef}>
            Tooltip content
          </Tooltip>
        </div>
      ),
    },
    {
      toggleText: "Card",
      content: (
        <div className="flex g-4-rem w-100-percent" style={{ position: "relative" }}>
          <Card wrapperClassName="flex-1 h-194-px" className="p-4-rem" variant="default">
            Default
          </Card>
          <Card wrapperClassName="flex-1 h-194-px" className="p-4-rem" variant="border">
            Border
          </Card>
          <Card wrapperClassName="flex-1 h-194-px" className="p-4-rem" variant="gradient-border">
            Gradient border
          </Card>
          <Card wrapperClassName="flex-1 h-194-px" className="p-4-rem" variant="gradient-border-glow">
            Gradient border glow
          </Card>
        </div>
      ),
    },
    {
      toggleText: "Alert",
      content: (
        <>
          <Button text="Open alert" onClick={handleOpen} />
          <Alert
            header="Alert header"
            {...alertProps}
            onConfirm={() => {
              // eslint-disable-next-line no-console
              console.log("Confirm Button Click"); // console log used for documentation
            }}
            onDecline={() => {
              // eslint-disable-next-line no-console
              console.log("Decline Button Click"); // console log used for documentation
            }}
          >
            Alert text content
          </Alert>
        </>
      ),
    },
    {
      toggleText: "Toast",
      content: (
        <div>
          <Button
            icon="thumbs-up"
            style={{ backgroundColor: "var(--success-color)", borderColor: "var(--success-color)" }}
            variant="full"
            text="Success"
            onClick={() => toastRef.current?.addToast({ type: "success", message: "Success toast message" })}
          />
          <Button
            icon="circle-xmark"
            style={{ backgroundColor: "var(--failure-color)", borderColor: "var(--failure-color)" }}
            variant="full"
            text="Failure"
            onClick={() => toastRef.current?.addToast({ type: "failure", message: "Failure toast message" })}
          />
          <Button
            icon="exclamation-circle"
            style={{ backgroundColor: "var(--warning-color)", borderColor: "var(--warning-color)" }}
            variant="full"
            text="Warning"
            onClick={() => toastRef.current?.addToast({ type: "warning", message: "Warning toast message" })}
          />
          <Button
            icon="info-circle"
            style={{ backgroundColor: "var(--information-color)", borderColor: "var(--information-color)" }}
            variant="full"
            text="Information"
            onClick={() => toastRef.current?.addToast({ type: "information", message: "Information toast message" })}
          />
          <Button icon="times" text="Clear" onClick={() => toastRef.current?.clear()} />
          <ToastsContainer ref={toastRef} />
        </div>
      ),
    },
    {
      toggleText: "Inputs",
      content: (
        <div>
          <Textfield {...inputProps} floatingInputWidth={floatingInputWidth} />
          <Textarea {...inputProps} floatingInputWidth={floatingInputWidth} />
          <Dropdown {...inputProps} floatingInputWidth={floatingInputWidth} />
          <Dropdown {...inputProps} floatingInputWidth={floatingInputWidth} clearable options={options} />
          <DateField {...inputProps} floatingInputWidth={floatingInputWidth} />
          <IconField {...inputProps} floatingInputWidth={floatingInputWidth} />
          <ColorPicker {...inputProps} floatingInputWidth={floatingInputWidth} />
          <ImageField {...inputProps} labelType={simpleInputLabel} />
          <Slider {...inputProps} min={0} max={100} />
          <Checkbox {...inputProps} labelType={simpleInputLabel} />
          <ToggleSwitch {...inputProps} labelType={simpleInputLabel} />
        </div>
      ),
    },
  ];

  const handleExpand = (newExpanded: SectionState) => {
    setExpanded(newExpanded);
  };

  const handleExpandAll = () => {
    const allExpanded: SectionState = {};

    sectionsArray.forEach(({ toggleText }) => {
      allExpanded[toggleText] = true;
    });

    setExpanded(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpanded({});
  };

  return (
    <ThemeWrapper darkMode={darkMode} hue={themeHue}>
      <div className="p-4-rem">
        <div className="flex items-center">
          <HueSliderCanvas hue={themeHue || 0} onChange={handleHueChange} />
          <Button icon={["fas", "refresh"]} className="ml-4-rem" text="Revert" onClick={() => setThemeHue(undefined)} />
          <Button text="Expand all" onClick={handleExpandAll} icon="chevron-down" />
          <Button text="Collapse all" onClick={handleCollapseAll} icon="chevron-up" />
        </div>
        <Accordion className="mt-4-rem" expanded={expanded} onExpand={handleExpand} expansionMode="multiple">
          {sectionsArray.map(({ toggleText, content }) => (
            <Accordion.Section key={toggleText} sectionId={toggleText}>
              <Accordion.Toggle>{toggleText}</Accordion.Toggle>
              <Accordion.Content>{content}</Accordion.Content>
            </Accordion.Section>
          ))}
        </Accordion>
      </div>
    </ThemeWrapper>
  );
};
