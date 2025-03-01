import { Meta, StoryObj } from "@storybook/react";
import { InputType } from "storybook/internal/types";
import { inputArgTypes } from "../../internalUtils/inputArgTypes";
import { defaultInputPropsValue } from "../Inputs/_inputUtils/defaultInputPropsValue";
import { ThemeWrapperStoryExample, ThemeWrapperStoryExampleProps } from "./ThemeWrapperStoryExample";

type ArgTypes = Partial<Record<keyof ThemeWrapperStoryExampleProps, InputType>>;

const createArgTypes = (argTypes: ArgTypes): ArgTypes => {
  const result: ArgTypes = {
    placeholder: {
      description: "Placeholder text displayed when the input is empty.",
      name: "placeholder (Custom Story control)",
    },
    hue: {
      name: "hue (Custom Story control)",
      control: false,
      description: "Hue of the ThemeWrapper primary color. <br/> <b>This value can be controlled with hue slider</b>",
    },
  };

  for (const [key, value] of Object.entries(argTypes)) {
    if (!["name", "readOnly", "marginBottomType"].includes(key)) {
      result[key] = {
        name: `${key} (Custom Story control)`,
        ...value!,
      };
    }
  }

  return {
    ...result,
    disabled: {
      ...result.disabled,
      description: "Whether the component is disabled.",
    },
    size: {
      ...result.size,
      description: "Size of the component.",
    },
  };
};

const argTypes: ArgTypes = createArgTypes(inputArgTypes);

const meta: Meta<typeof ThemeWrapperStoryExample> = {
  title: "Components/ThemeWrapper",
  component: ThemeWrapperStoryExample,
  parameters: {
    disableGlobalDecorator: true,
    docs: { source: { code: "No preview" } },
  },
  args: {
    darkMode: true,
    size: defaultInputPropsValue.size,
    labelType: defaultInputPropsValue.labelType,
    labelWidth: defaultInputPropsValue.labelWidth,
    floatingInputWidth: defaultInputPropsValue.floatingInputWidth,
    disabled: defaultInputPropsValue.disabled,
    error: "",
  },
  argTypes,
};

export default meta;

export const Default: StoryObj<typeof ThemeWrapperStoryExample> = {};
