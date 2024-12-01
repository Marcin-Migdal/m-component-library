import { useMemo, useState } from "react";

import { deepCopy } from "../../../../helpers";
import { Mode, SectionId, SectionState, SectionStateChangeHandler } from "../../types";

const getMode = (
  externalMode: Mode | undefined,
  externalSectionState: SectionState | undefined,
  onSectionStateChange: SectionStateChangeHandler | undefined
): Mode | undefined => {
  if (externalMode) {
    return externalMode;
  }

  if (externalSectionState === undefined && onSectionStateChange === undefined) {
    return undefined;
  }

  if (externalSectionState !== null && typeof externalSectionState === "object") {
    return Mode.MULTIPLE;
  }

  return Mode.SINGLE;
};

export const useSectionState = (
  externalMode: Mode | undefined,
  externalSectionState: SectionState | undefined,
  onSectionStateChange: SectionStateChangeHandler | undefined
): [Mode | undefined, SectionState, (sectionId: SectionId) => void] => {
  const [internalSectionState, setInternalSectionState] = useState<SectionState>(
    externalMode === Mode.MULTIPLE ? {} : null
  );

  const sectionStateControlled = externalSectionState !== undefined;
  const sectionState = sectionStateControlled ? externalSectionState : internalSectionState;

  const mode = useMemo(() => {
    return getMode(externalMode, externalSectionState, onSectionStateChange);
  }, [externalMode, externalSectionState, !onSectionStateChange]);

  const handleSectionState = (sectionId: SectionId) => {
    let newSectionState: SectionState = null;

    switch (mode) {
      case undefined: {
        return;
      }

      case Mode.SINGLE: {
        if (sectionState !== null && typeof sectionState === "object") {
          console.warn(
            "Wrong controlled value, passed value is an object, you are trying to change object mode SINGLE, pass string | number | null as a value"
          );
          return;
        }

        newSectionState = sectionState === sectionId ? null : sectionId;
        break;
      }

      case Mode.MULTIPLE: {
        if (!sectionState || typeof sectionState !== "object") {
          console.warn(
            `Wrong controlled value, passed value is an ${sectionState === null ? "null" : typeof sectionState}, you are trying to change it in mode MULTIPLE, pass object as a value`
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
