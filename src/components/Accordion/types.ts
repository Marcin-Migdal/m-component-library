import { CSSProperties } from "react";
import { Optionalize } from "../../types";

/** Represents a unique identifier for an accordion section. */
export type SectionId = string | number;

/** Represents the selected/expanded state of an accordion section. */
export type SectionState = SectionId | Record<SectionId, boolean> | null;

/** Callback function triggered when the accordion selected/expanded state changes. */
export type SectionStateChangeHandler = (selected: SectionState) => void;

/** Defines the available modes for accordion selection and expansion. */
export enum AccordionMode {
  /** Only one section can be selected/expanded at a time. */
  SINGLE = "single",

  /** Multiple sections can be selected/expanded simultaneously. */
  MULTIPLE = "multiple",
}

/** Defines the position of the toggle icon within an accordion toggle. */
export type ToggleIconPosition = "none" | "left" | "right";

type AccordionSelectProps = {
  /** The currently selected accordion section. */
  selected?: SectionState;

  /** Callback function triggered when a selection is made. */
  onSelect: SectionStateChangeHandler;
};

type AccordionExpandProps = {
  /** The currently expanded accordion section. */
  expanded?: SectionState;

  /** Callback function triggered when a section is expanded/collapsed. */
  onExpand: SectionStateChangeHandler;
};

export type AccordionProps = {
  /** Defines whether selection is allowed and in what mode. */
  selectionMode?: `${AccordionMode}`;

  /** Defines whether expansion is allowed and in what mode. */
  expansionMode?: `${AccordionMode}`;

  /** Additional CSS class for styling the accordion.
   * @default undefined */
  className?: string;

  /** The variant of the accordion.
   * @default "default" */
  variant?: "default" | "compact";

  /** Defines the animation type when expanding/collapsing sections.
   * @default "smooth" */
  expandAnimation?: "smooth" | "instant";

  /** Inline styles for the accordion.
   * @default undefined */
  style?: CSSProperties;

  /** Additional CSS class for each accordion item. This className will be used in all component and it will create className for each accordion component using `instanceClassName` as prefix
   * @default undefined */
  instanceClassName?: string;

  /** Position of the toggle icon within the accordion section. If `expansionMode` and`expanded` props are `undefined` then icon will NOT be displayed, even if icon prop is properly passed.
   * @default "left" */
  icon?: ToggleIconPosition;

  /** Changes expand/collapse behavior, if `expandOnIconClick` === `true` then expand/collapse event is called only on toggle icon click.
   * @default false */
  expandOnIconClick?: boolean;
} & Optionalize<AccordionSelectProps> &
  Optionalize<AccordionExpandProps>;
