import { ReactNode } from "react";
import { InputErrorType } from "../types";

export const getErrorContent = (error: InputErrorType): ReactNode => {
  if (typeof error === "string") {
    return error;
  }

  if (Array.isArray(error)) {
    for (const item of error) {
      if (item) {
        const result = getErrorContent(item);

        if (result) {
          return result;
        }
      }
    }

    return undefined;
  }

  const obj = error as { [key: string]: InputErrorType };

  for (const key in obj) {
    const result = getErrorContent(obj[key]);

    if (result) {
      return result;
    }
  }

  return undefined;
};
