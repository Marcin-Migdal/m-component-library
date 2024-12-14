import { getPosition } from "../../../helpers";
import { DropdownMenuPosition } from "../types";

export const getDropdownPosition = (
  parentElement: HTMLDivElement,
  dropdownMenuElement: HTMLUListElement,
  placement: "top" | "bottom",
  autoPosition: boolean
): DropdownMenuPosition => {
  const positionResponse = getPosition(parentElement, dropdownMenuElement, {
    placement: placement,
    autoPosition: autoPosition,
  });

  return {
    top: positionResponse.top,
    left: positionResponse.left,
  };
};
