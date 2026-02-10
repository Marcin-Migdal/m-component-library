import { InputErrorType } from "../../Inputs/_inputsComponents";

export const translateErrors = (error: InputErrorType, t: (key: string) => string): InputErrorType => {
  if (typeof error === "string") {
    return t(error);
  }

  const translateAllErrors = (obj: { [key: string]: InputErrorType }): InputErrorType => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === "string") {
          return [key, t(value)];
        }

        return [key, translateAllErrors(value)];
      }),
    );
  };

  return translateAllErrors(error);
};
