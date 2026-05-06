export type AccordionSectionContextProviderProps = {
  sectionId: string;
  isSelected: boolean;
  isExpanded: boolean;
  disableSelection?: boolean;
  disableExpansion?: boolean;
};

export type AccordionSectionContextType = {
  sectionId: string;
  isSelected: boolean;
  isExpanded: boolean;
  disableSelection?: boolean;
  disableExpansion?: boolean;
};
