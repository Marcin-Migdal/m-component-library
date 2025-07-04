import { AccordionMode, SectionId, SectionState } from "../types";

export const isStateSelected = <M extends AccordionMode>(state: SectionState<M>, sectionId: SectionId): boolean => {
  if (!state) {
    return false;
  }

  return typeof state === "object" ? !!state[sectionId] : state === sectionId;
};
