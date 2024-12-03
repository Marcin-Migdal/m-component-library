import { Mode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

export type AccordionContextProviderProps = {
  selectionMode: Mode | undefined;
  selected: SectionState | undefined;
  onSelect: SectionStateChangeHandler | undefined;

  expansionMode: Mode | undefined;
  expanded: SectionState | undefined;
  onExpand: SectionStateChangeHandler | undefined;
  expandAnimation: "smooth" | "instant";

  instanceClassName: string | undefined;
  icon: "none" | "left" | "right" | undefined;
  expandOnIconClick: boolean | undefined;
};

export type AccordionContextType = {
  selectionMode: Mode | undefined;
  selected: SectionState;
  handleSelect: (sectionId: SectionId) => void;

  expansionMode: Mode | undefined;
  expanded: SectionState;
  handleExpand: (sectionId: SectionId) => void;
  expandAnimation: "smooth" | "instant";

  instanceClassName: string | undefined;
  globalIcon: "none" | "left" | "right" | undefined;
  globalExpandOnIconClick: boolean | undefined;
};
