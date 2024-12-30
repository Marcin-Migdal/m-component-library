import { InputProps } from "../_inputsComponents/input-types";
import { ColorValue } from "../ColorPicker";

type IconFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type IconFieldProps = InputProps & {
  value?: string;

  classNamesObj?: IconFieldClassNames;
  placeholder?: string;

  iconColor?: ColorValue;

  onOpen?: () => void;
  onChange?: (event: { target: { name: string; value: string } }) => void;
  onClose?: (value: string) => void;
};
