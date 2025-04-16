import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";
import { ColorValue } from "../ColorPicker";

type IconFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type IconFieldChangeEvent = React.MouseEvent<HTMLDivElement, MouseEvent> & MInputChangeEvent;
export type IconFieldBlurEvent = MInputChangeEvent<string | null>;
export type IconFieldClearEvent = React.MouseEvent<SVGSVGElement, MouseEvent> & MInputChangeEvent<null>;

export type IconFieldProps = InputProps & {
  /** The current selected icon. */
  value?: string | null;

  /** Custom class names for different parts of the component. */
  classNamesObj?: IconFieldClassNames;

  /** Placeholder text displayed when no icon is selected. */
  placeholder?: string;

  /** Color of the displayed icon. */
  iconColor?: ColorValue;

  /** Callback triggered when an `IconField` icon is selected. */
  onChange?: (event: IconFieldChangeEvent, value: string) => void;

  /** Callback triggered when an `IconField` lose focus. */
  onBlur?: (event: IconFieldBlurEvent, value: string | null) => void;

  /** Callback triggered when an `IconField` value is cleared. */
  onClear?: (event: IconFieldClearEvent, value: null) => void;

  /** If set to true then `Textfield` in icon popup will be autoFocused. */
  autoFocusPopupInput?: boolean;
};
