import React, { createContext, PropsWithChildren } from "react";

import { AccordionSectionContextProviderProps, AccordionSectionContextType } from "./types";

export const AccordionSectionContext = createContext<AccordionSectionContextType>({
  sectionId: "",
  isSelected: false,
  isExpanded: false,
  disableSelection: false,
  disableExpansion: false,
});

export const AccordionSectionContextProvider = ({
  children,
  sectionId,
  isSelected,
  isExpanded,
  disableSelection,
  disableExpansion,
}: PropsWithChildren<AccordionSectionContextProviderProps>) => {
  return (
    <AccordionSectionContext.Provider
      value={{
        sectionId,
        isSelected,
        isExpanded,
        disableSelection,
        disableExpansion,
      }}
    >
      {children}
    </AccordionSectionContext.Provider>
  );
};
