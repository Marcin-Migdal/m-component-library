import { ColorValue, RangeDate } from "../components/Inputs";
import { DropdownNumberOption, DropdownStringOption } from "../components/Inputs/Dropdown/types";
import { MInputChangeEvent } from "./MInputChangeEvent";

export type MFormChangeEvent<TAdditionalType = undefined> = MInputChangeEvent<
  | string
  | number
  | boolean
  | DropdownStringOption
  | DropdownNumberOption
  | Date
  | RangeDate
  | ColorValue
  | File
  | undefined
  | TAdditionalType
>;
