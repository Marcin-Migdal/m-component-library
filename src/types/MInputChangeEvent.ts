export type MInputChangeEvent<TValue = string> = {
  target: {
    name: string;
    value: TValue;
    checked: boolean;
    type: string;
  };
};
