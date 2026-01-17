import * as Yup from "yup";
import { InferSchemaType } from "../../Form/hooks/useForm/useForm.types";
import { ColorValue, RangeDate } from "../../Inputs";
import { DropdownStringOption } from "../../Inputs/Dropdown/types";

export type EmptyAlertInputsState = {
  name: string;
  description: string;
  superior: DropdownStringOption | null;
  role: DropdownStringOption | null;

  currentDate: Date | null;
  rangeDate: RangeDate;
  color: ColorValue | null;
  icon: string | null;
  image: File | null;
  percentage: number;
  remember: boolean;
  darkMode: boolean;
};

export const initEmptyAlertInputsState: EmptyAlertInputsState = {
  name: "",
  description: "",
  superior: null,
  role: null,

  currentDate: null,
  rangeDate: [null, null],
  color: null,
  icon: null,
  image: null,
  percentage: 0,
  remember: false,
  darkMode: false,
};

export const emptyAlertInputsStateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().default("").required("Description is required"),
  superior: Yup.object()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .default({ value: "1", label: "John" }),
  role: Yup.object()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .nullable()
    .required("Required"),

  currentDate: Yup.date().nullable().required("Current date is required"),
  rangeDate: Yup.tuple([
    Yup.date().required("Start date is required"),
    Yup.date().required("End date is required"),
  ]).required("Range date is required"),

  color: Yup.object()
    .shape({
      r: Yup.number().required("Required"),
      g: Yup.number().required("Required"),
      b: Yup.number().required("Required"),
    })
    .nullable()
    .required("Color is required"),
  icon: Yup.string().nullable().required("Icon is required"),
  image: Yup.mixed<File>().nullable().required("Image is required"),
  percentage: Yup.number().min(20, "Percentage must be at least 20").required("Percentage is required"),
  remember: Yup.boolean().default(false),
  darkMode: Yup.boolean().default(false),
});

export type EmptyAlertInputsSubmitState = InferSchemaType<typeof emptyAlertInputsStateSchema>;

//! Filled inputs
export type FilledAlertInputsState = {
  name: string;
  description: string;
  superior: DropdownStringOption;
  role: DropdownStringOption;

  currentDate: Date;
  rangeDate: RangeDate;
  color: ColorValue;
  icon: string;
  image: File | null;
  percentage: number;
  remember: boolean;
  darkMode: boolean;
};

export const initFilledAlertInputsState: FilledAlertInputsState = {
  name: "Test",
  description: "Test",
  superior: { value: "1", label: "John" },
  role: { value: "1", label: "Developer" },

  currentDate: new Date("2015-04-15"),
  rangeDate: [new Date("2015-04-15"), new Date("2015-04-20")],
  color: { r: 0, g: 0, b: 0 },
  icon: "plus",
  image: null,
  percentage: 30,
  remember: false,
  darkMode: false,
};

export const filledAlertInputsStateSchema = Yup.object().shape({
  name: Yup.string().default("Test"),
  description: Yup.string().default("Test"),
  superior: Yup.object()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .default({ value: "1", label: "John" }),
  role: Yup.object()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    })
    .default({ value: "1", label: "Developer" }),
  currentDate: Yup.date().required("Required"),
  rangeDate: Yup.tuple([
    Yup.date().required("Start date is required"),
    Yup.date().nullable().required("End date is required"),
  ]).required("Range date is required"),

  color: Yup.object()
    .shape({
      r: Yup.number().required("Required"),
      g: Yup.number().required("Required"),
      b: Yup.number().required("Required"),
    })
    .default({ r: 0, g: 0, b: 0 }),
  icon: Yup.string().default("plus"),
  image: Yup.mixed<File>().nullable().required("Image is required"),
  percentage: Yup.number().min(20, "Percentage must be at least 20").default(30),
  remember: Yup.boolean().default(false),
  darkMode: Yup.boolean().default(false),
});

export type FilledAlertInputsSubmitState = InferSchemaType<typeof filledAlertInputsStateSchema>;
