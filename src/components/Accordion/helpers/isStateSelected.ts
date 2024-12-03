import { SectionId, SectionState } from "../types";

export const isStateSelected = (state: SectionState, sectionId: SectionId): boolean => {
  if (!state) {
    return false;
  }
  return typeof state === "object" ? !!state[sectionId] : state === sectionId;
};
