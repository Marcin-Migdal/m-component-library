import React, { createContext, PropsWithChildren } from "react";

import { AccordionSectionContextProviderProps, AccordionSectionContextType } from "./types";

export const AccordionSectionContext = createContext<AccordionSectionContextType>({
  sectionId: "",
  isSelected: false,
  isExpanded: false,
});

export const AccordionSectionContextProvider = ({
  children,
  sectionId,
  isSelected,
  isExpanded,
}: PropsWithChildren<AccordionSectionContextProviderProps>) => {
  return (
    <AccordionSectionContext.Provider
      value={{
        sectionId,
        isSelected,
        isExpanded,
      }}
    >
      {children}
    </AccordionSectionContext.Provider>
  );
};
