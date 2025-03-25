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
export type IconFieldClearEvent = React.MouseEvent<SVGSVGElement, MouseEvent> & MInputChangeEvent<undefined>;

export type IconFieldProps = InputProps & {
  /** The current selected icon. */
  value?: string;

  /** Custom class names for different parts of the component. */
  classNamesObj?: IconFieldClassNames;

  /** Placeholder text displayed when no icon is selected. */
  placeholder?: string;

  /** Color of the displayed icon. */
  iconColor?: ColorValue;

  /** Callback triggered when the icon selection popup opens. */
  onOpen?: () => void;

  /** Callback triggered when an icon is selected. */
  onChange?: (event: IconFieldChangeEvent, value: string | undefined) => void;

  /** Callback triggered when an icon is cleared. */
  onClear?: (event: IconFieldClearEvent, value: undefined) => void;

  /** Callback triggered when the icon selection popup closes. */
  onClose?: (value: string | undefined) => void;

  /** If set to true then `Textfield` in icon popup will be autoFocused. */
  autoFocusPopupInput?: boolean;
};
