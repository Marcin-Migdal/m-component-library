import { useEffect, useMemo, useState } from "react";

import { deepCopy } from "../../../../utils";
import { AccordionMode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

const getMode = (
  externalMode: AccordionMode | undefined,
  externalSectionState: SectionState | undefined,
  onSectionStateChange: SectionStateChangeHandler | undefined
): AccordionMode | undefined => {
  if (externalMode) {
    return externalMode;
  }

  if (externalSectionState === undefined && onSectionStateChange === undefined) {
    return undefined;
  }

  if (externalSectionState !== null && typeof externalSectionState === "object") {
    return AccordionMode.MULTIPLE;
  }

  return AccordionMode.SINGLE;
};

export const useSectionState = (
  externalMode: AccordionMode | undefined,
  externalSectionState: SectionState | undefined,
  onSectionStateChange: SectionStateChangeHandler | undefined
): [AccordionMode | undefined, SectionState, (sectionId: SectionId) => void] => {
  const [internalSectionState, setInternalSectionState] = useState<SectionState>(
    externalMode === AccordionMode.MULTIPLE ? {} : null
  );

  const sectionStateControlled = externalSectionState !== undefined;
  const sectionState = sectionStateControlled ? externalSectionState : internalSectionState;

  const mode = useMemo(() => {
    return getMode(externalMode, externalSectionState, onSectionStateChange);
  }, [externalMode, externalSectionState, !onSectionStateChange]);

  useEffect(() => {
    if (!sectionStateControlled) {
      const newInitValue = externalMode === AccordionMode.MULTIPLE ? {} : null;

      newInitValue !== internalSectionState && setInternalSectionState(newInitValue);
    }
  }, [mode]);

  const handleSectionState = (sectionId: SectionId) => {
    let newSectionState: SectionState = null;

    switch (mode) {
      case undefined: {
        return;
      }

      case AccordionMode.SINGLE: {
        if (sectionState !== null && typeof sectionState === "object") {
          // eslint-disable-next-line no-console
          console.warn(
            "Wrong controlled value, passed value is an object, you are trying to change object mode SINGLE, pass string | number | null as a value"
          );
          return;
        }

        newSectionState = sectionState === sectionId ? null : sectionId;
        break;
      }

      case AccordionMode.MULTIPLE: {
        if (!sectionState || typeof sectionState !== "object") {
          // eslint-disable-next-line no-console
          console.warn(
            `Wrong controlled value, passed value is an ${
              sectionState === null ? "null" : typeof sectionState
            }, you are trying to change it in mode MULTIPLE, pass object as a value`
          );
          return;
        }

        if (sectionState?.[sectionId]) {
          newSectionState = deepCopy(sectionState);
          delete newSectionState[sectionId];
        } else {
          newSectionState = {
            ...sectionState,
            [sectionId]: true,
          };
        }

        break;
      }
    }

    onSectionStateChange && onSectionStateChange(newSectionState);
    !sectionStateControlled && setInternalSectionState(newSectionState);
  };

  return [mode, sectionState, handleSectionState];
};
