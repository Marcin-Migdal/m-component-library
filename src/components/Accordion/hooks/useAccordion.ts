import { useContext } from "react";

import { AccordionContext } from "../context/AccordionContext/AccordionContext";

export const useAccordion = () => {
  return useContext(AccordionContext);
};
