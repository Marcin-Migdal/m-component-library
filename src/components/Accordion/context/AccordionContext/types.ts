import { AccordionMode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

export type AccordionContextProviderProps = {
  selectionMode: AccordionMode | undefined;
  selected: SectionState | undefined;
  onSelect: SectionStateChangeHandler | undefined;

  expansionMode: AccordionMode | undefined;
  expanded: SectionState | undefined;
  onExpand: SectionStateChangeHandler | undefined;
  expandAnimation: "smooth" | "instant";

  instanceClassName: string | undefined;
  icon: "none" | "left" | "right";
  expandOnIconClick: boolean | undefined;
};

export type AccordionContextType = {
  selectionMode: AccordionMode | undefined;
  selected: SectionState;
  handleSelect: (sectionId: SectionId) => void;

  expansionMode: AccordionMode | undefined;
  expanded: SectionState;
  handleExpand: (sectionId: SectionId) => void;

  expandAnimation: "smooth" | "instant";
  instanceClassName: string | undefined;
  globalIcon: "none" | "left" | "right";
  globalExpandOnIconClick: boolean | undefined;
};
