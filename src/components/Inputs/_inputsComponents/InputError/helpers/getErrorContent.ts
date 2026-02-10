import { ReactNode } from "react";
import { InputErrorType } from "../types";

export const getErrorContent = (error: InputErrorType): ReactNode => {
  if (typeof error === "string") {
    return error;
  }

  const processErrorObject = (obj: { [key: string]: InputErrorType }) => {
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "string") {
        return value;
      } else {
        return processErrorObject(value);
      }
    }
  };

  return processErrorObject(error);
};
