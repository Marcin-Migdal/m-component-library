import { useEffect, useMemo, useState } from "react";

import { deepCopy } from "../../../../utils";
import { AccordionMode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

const getInitialState = (mode: AccordionMode | undefined): SectionState<AccordionMode> => {
  return (mode === AccordionMode.MULTIPLE ? {} : null) as SectionState<AccordionMode>;
};

const getMode = (
  externalMode: AccordionMode | undefined,
  externalSectionState: SectionState<AccordionMode> | undefined,
  onSectionStateChange: SectionStateChangeHandler<AccordionMode> | undefined
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
  externalSectionState: SectionState<AccordionMode> | undefined,
  onSectionStateChange: SectionStateChangeHandler<AccordionMode> | undefined
): [AccordionMode | undefined, SectionState<AccordionMode>, (sectionId: SectionId) => void] => {
  const mode = useMemo(() => {
    return getMode(externalMode, externalSectionState, onSectionStateChange);
  }, [externalMode, externalSectionState, !onSectionStateChange]);

  const [internalSectionState, setInternalSectionState] = useState<SectionState<AccordionMode>>(getInitialState(mode));

  const sectionStateControlled = externalSectionState !== undefined;
  const sectionState = sectionStateControlled ? externalSectionState : internalSectionState;

  useEffect(() => {
    if (!sectionStateControlled) {
      const newInitValue: SectionState<AccordionMode> = getInitialState(mode);

      newInitValue !== internalSectionState && setInternalSectionState(newInitValue);
    }
  }, [mode]);

  const handleSectionState = (sectionId: SectionId) => {
    let newSectionState: SectionState<AccordionMode> = null;

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

        newSectionState = (sectionState === sectionId ? null : sectionId) as SectionState<AccordionMode>;
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
