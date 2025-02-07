import React, { createContext, PropsWithChildren } from "react";

import { AccordionMode } from "../../types";
import { AccordionContextProviderProps, AccordionContextType } from "./types";
import { useSectionState } from "./useSectionState";

export const AccordionContext = createContext<AccordionContextType>({
  selectionMode: undefined,
  selected: null,
  handleSelect: () => {},

  expansionMode: AccordionMode.SINGLE,
  expanded: null,
  handleExpand: () => {},

  expandAnimation: "smooth",
  instanceClassName: undefined,
  globalIcon: "right",
  globalExpandOnIconClick: undefined,
});

export const AccordionContextProvider = ({
  children,

  selectionMode: externalSelectionMode,
  selected: externalSelected,
  onSelect,

  expansionMode: externalExpansionMode,
  expanded: externalExpanded,
  onExpand,

  expandAnimation,
  instanceClassName,
  icon,
  expandOnIconClick,
}: PropsWithChildren<AccordionContextProviderProps>) => {
  const [selectionMode, selected, handleSelect] = useSectionState(externalSelectionMode, externalSelected, onSelect);
  const [expansionMode, expanded, handleExpand] = useSectionState(externalExpansionMode, externalExpanded, onExpand);

  return (
    <AccordionContext.Provider
      value={{
        selectionMode,
        selected,
        handleSelect,

        expansionMode,
        expanded,
        handleExpand,

        expandAnimation,
        instanceClassName,
        globalIcon: icon,
        globalExpandOnIconClick: expandOnIconClick,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
