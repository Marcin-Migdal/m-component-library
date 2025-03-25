import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, ReactElement } from "react";

/** Represents an individual option within the dropdown menu. */
export type DropdownMenuOption = {
  /** Unique identifier for the option. */
  id?: number | string;

  /** Display label for the option. */
  label?: string;

  /** Icon to be displayed alongside the option. */
  icon?: IconProp;

  /** Whether the option is disabled. */
  disabled?: boolean;

  /** Callback function triggered when the option is clicked. */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, option: DropdownMenuOption) => void;

  /** Nested options for submenus. */
  options?: DropdownMenuOption[];

  /** Custom template function for rendering the option. */
  template?: (templateProps: {
    className: string;
    indicatorPresent: boolean;
    option: DropdownMenuOption;
    handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closeMenu: () => void;
  }) => ReactElement;
};

/** Defines the event types that can trigger the dropdown menu. */
export enum OpenEvent {
  /** Open on left-click. */
  CLICK = "click",

  /** Open when hovered over. */
  HOVER = "hover",

  /** Open on right-click or context menu event. */
  CONTEXT_CLICK = "context-click",
}

/** Defines the possible positions for the dropdown menu. */
export enum OpenPosition {
  /** Open below the trigger element. */
  BOTTOM = "bottom",

  /** Open below, adjusting automatically to fit. */
  AUTO_BOTTOM = "auto-bottom",

  /** Open above the trigger element. */
  TOP = "top",

  /** Open above, adjusting automatically to fit. */
  AUTO_TOP = "auto-top",

  /** Open at the position where the triggering event occurred. */
  OCCURRED_EVENT = "occurred-event",
}

export type DropdownMenuProps = {
  /** Additional CSS class for the trigger container.
   * @default undefined */
  triggerContainerClassName?: string;

  /** Additional CSS class for the dropdown popup.
   * @default undefined */
  popupClassName?: string;

  /** List of available options in the dropdown menu. */
  options: DropdownMenuOption[];

  /** Whether to hide disabled options.
   * @default false */
  hideDisabledOptions?: boolean;

  /** Whether to hide dropdown trigger if all options are disabled.
   * <b>USING THIS PROPS MAKE SURE THAT `OPTION` PROPS IS NOT DEFINED ON EACH RERENDER, eq. const variable, value passed in options props should be stored in state or returned by useMemo hook</b>
   * @default false */
  hideOnDisabledOptions?: boolean;

  /** Message to display when there are no options available.
   * @default undefined */
  emptyOptionsMessage?: string;

  /** Event type that triggers the dropdown menu to open.
   * - `context-click` default openEvent.
   * - `click`
   * - `hover`
   * @default "context-click" */
  openEvent?: `${OpenEvent}`;

  /** Position where the `dropdown menu` should open relative to the `trigger`.
   * - `bottom` default openPosition.
   * - `auto-bottom`
   * - `top`
   * - `auto-top`
   * - `occurred-event`
   * @default "bottom" */
  openPosition?: `${OpenPosition}`;

  /** The z-index value of the `dropdown menu`.
   * @default 1 */
  zIndex?: number;

  /** Whether the `dropdown menu` should be centered relative to its `trigger`.
   * @default false */
  centerConsumer?: boolean;

  /** Number of `options` to fit in `dropdown menu` when calculating height.
   * @default 6 */
  // optionHeightFit?: number;

  /** Callback function triggered when the dropdown opens. */
  onOpen?: () => void;

  /** Callback function triggered when the dropdown closes. */
  onClose?: () => void;
};

/** Defines possible horizontal opening directions for the dropdown. */
export type HorizontalOpenDirection = "left" | "right" | "left-fit" | "right-fit";

/** Represents the position of the dropdown menu. */
export type DropdownMenuPosition = {
  /** Top position of the dropdown relative to the viewport or container. */
  top: CSSProperties["top"];

  /** Left position of the dropdown relative to the viewport or container. */
  left: CSSProperties["left"];

  /** Right position (optional) for alternative positioning. */
  right?: CSSProperties["left"];

  /** Determines how the dropdown opens horizontally. */
  horizontalOpenDirection?: HorizontalOpenDirection;
};

/** Represents the configuration for the dropdown menu's appearance. */
export type DropdownMenuConfig = {
  /** The z-index of the dropdown menu. */
  zIndex: CSSProperties["zIndex"];

  /** The opacity of the dropdown menu. */
  opacity: CSSProperties["opacity"];

  /** The maximum height of the dropdown menu. */
  maxHeight: CSSProperties["maxHeight"];
} & DropdownMenuPosition;

/** Represents the configuration for how the dropdown was opened. */
export type OpenConfig = {
  /** The event that triggered the dropdown to open. */
  openedBy: OpenEvent;

  /** The position of the event that triggered the dropdown. */
  eventPosition: { top: number; left: number };
};
