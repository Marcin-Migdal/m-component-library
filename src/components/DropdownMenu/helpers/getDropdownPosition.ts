import { getPosition } from "../../../utils";
import { DropdownMenuPosition } from "../types";

export const getDropdownPosition = (
  parentElement: HTMLDivElement,
  dropdownMenuElement: HTMLUListElement,
  placement: "top" | "bottom",
  autoPosition: boolean,
  centerConsumer: boolean
): DropdownMenuPosition => {
  const positionResponse = getPosition(parentElement, dropdownMenuElement, { placement, autoPosition, centerConsumer });

  return {
    top: positionResponse.top,
    left: positionResponse.left,
  };
};
