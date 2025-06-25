import { getPosition, SecondaryPlacement } from "../../../utils";
import { DropdownMenuPosition } from "../types";

export const getDropdownPosition = (
  parentElement: HTMLDivElement,
  dropdownMenuElement: HTMLUListElement,
  primaryPlacement: "top" | "bottom",
  autoPosition: boolean,
  secondaryPlacement: `${SecondaryPlacement}`
): DropdownMenuPosition => {
  const positionResponse = getPosition(parentElement, dropdownMenuElement, {
    primaryPlacement,
    autoPosition,
    secondaryPlacement,
  });

  return {
    top: positionResponse.top,
    left: positionResponse.left,
  };
};
