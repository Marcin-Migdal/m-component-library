import { InputLabelType } from "../global-interfaces";

export type ConditionalInputLabelType = { label?: undefined; labelType?: undefined } | { label: string; labelType?: InputLabelType };
