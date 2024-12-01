import { SectionId, SectionState } from "../types";

export const isStateSelected = (state: SectionState, sectionId: SectionId): boolean => {
  return !state ? false : typeof state === "object" ? !!state[sectionId] : state === sectionId;
};
