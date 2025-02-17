import { SectionId } from "../../types";

export type AccordionSectionContextProviderProps = {
  sectionId: SectionId;
  isSelected: boolean;
  isExpanded: boolean;
};

export type AccordionSectionContextType = {
  sectionId: SectionId;
  isSelected: boolean;
  isExpanded: boolean;
};
