import { AccordionMode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

export type AccordionContextProviderProps = {
  selectionMode: AccordionMode | undefined;
  selected: SectionState<AccordionMode> | undefined;
  onSelect: SectionStateChangeHandler<AccordionMode> | undefined;

  expansionMode: AccordionMode | undefined;
  expanded: SectionState<AccordionMode> | undefined;
  onExpand: SectionStateChangeHandler<AccordionMode> | undefined;
  expandAnimation: "smooth" | "instant";

  instanceClassName: string | undefined;
  icon: "none" | "left" | "right";
  expandOnIconClick: boolean | undefined;
};

export type AccordionContextType = {
  selectionMode: AccordionMode | undefined;
  selected: SectionState<AccordionMode>;
  handleSelect: (sectionId: SectionId) => void;

  expansionMode: AccordionMode | undefined;
  expanded: SectionState<AccordionMode>;
  handleExpand: (sectionId: SectionId) => void;

  expandAnimation: "smooth" | "instant";
  instanceClassName: string | undefined;
  globalIcon: "none" | "left" | "right";
  globalExpandOnIconClick: boolean | undefined;
};
