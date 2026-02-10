import { InputErrorType } from "../../Inputs/_inputsComponents";

export const translateErrors = (error: InputErrorType, t: (key: string) => string): InputErrorType => {
  if (typeof error === "string") {
    return t(error);
  }

  if (Array.isArray(error)) {
    return error.map((item) => (item ? translateErrors(item, t) : item)) as InputErrorType;
  }

  return Object.fromEntries(
    Object.entries(error).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, t(value)];
      }

      return [key, translateErrors(value, t)];
    }),
  );
};
