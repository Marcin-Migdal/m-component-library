import { Optionalize } from "../../types";

export type SectionId = string | number;

export type SectionState = SectionId | Record<SectionId, boolean> | null;
export type SectionStateChangeHandler = (selected: SectionState) => void;

export enum Mode {
  SINGLE = "single",
  MULTIPLE = "multiple",
}

export type ToggleIconPosition = "none" | "left" | "right";

type AccordionSelectProps = {
  selected?: SectionState;
  onSelect: SectionStateChangeHandler;
};

type AccordionExpandProps = {
  expanded?: SectionState;
  onExpand: SectionStateChangeHandler;
};

export type AccordionProps = {
  selectionMode?: `${Mode}`;
  expansionMode?: `${Mode}`;
  className?: string;
  variant?: "default" | "tree";
  expandAnimation?: "smooth" | "instant";

  // global toggle props
  instanceClassName?: string;
  icon?: ToggleIconPosition;
  expandOnIconClick?: boolean;
} & Optionalize<AccordionSelectProps> &
  Optionalize<AccordionExpandProps>;
