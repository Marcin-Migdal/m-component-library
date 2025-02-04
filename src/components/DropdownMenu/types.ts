import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, ReactElement } from "react";

export type DropdownMenuOption = {
  id?: number | string;
  label?: string;
  icon?: IconProp;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, option: DropdownMenuOption) => void;
  options?: DropdownMenuOption[];
  template?: (templateProps: {
    className: string;
    indicatorPresent: boolean;
    option: DropdownMenuOption;
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closeMenu: () => void;
  }) => ReactElement;
};

export enum OpenEvent {
  CLICK = "click",
  HOVER = "hover",
  CONTEXT_CLICK = "context-click",
}

export enum OpenPosition {
  BOTTOM = "bottom",
  AUTO_BOTTOM = "auto-bottom",
  TOP = "top",
  AUTO_TOP = "auto-top",
  OCCURRED_EVENT = "occurred-event",
}

export type DropdownMenuProps = {
  triggerContainerClassName?: string;
  popupClassName?: string;
  options: DropdownMenuOption[];
  hideDisabled?: boolean;
  emptyOptionsMessage?: string;
  openEvent?: `${OpenEvent}`;
  openPosition?: `${OpenPosition}`;
  zIndex?: number;
  centerConsumer?: boolean;
  optionHeightFit?: number;
  onOpen?: () => void;
  onClose?: () => void;
};

export type HorizontalOpenDirection = "left" | "right" | "left-fit" | "right-fit";

export type DropdownMenuPosition = {
  top: CSSProperties["top"];
  left: CSSProperties["left"];
  right?: CSSProperties["left"];
  horizontalOpenDirection?: HorizontalOpenDirection;
};

export type DropdownMenuConfig = {
  zIndex: CSSProperties["zIndex"];
  opacity: CSSProperties["opacity"];
  maxHeight: CSSProperties["maxHeight"];
} & DropdownMenuPosition;

export type OpenConfig = {
  openedBy: OpenEvent;
  eventPosition: { top: number; left: number };
};
