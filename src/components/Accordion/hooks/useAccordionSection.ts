import { useContext } from "react";

import { AccordionSectionContext } from "../context/AccordionSectionContext/AccordionSectionContext";

export const useAccordionSection = () => {
  return useContext(AccordionSectionContext);
};
