import { ResolutionValidation } from "../types";
import { bytesToMegaBytesString } from "./bytesToMegaBytes";

export const getValidationDescription = (
  maxSize: number | undefined,
  minSize: number | undefined,
  maxResolution: ResolutionValidation | undefined,
  minResolution: ResolutionValidation | undefined
): string[] => {
  const validationDescription: string[] = [];

  if (maxSize) {
    validationDescription.push(`Max. ${bytesToMegaBytesString(maxSize)}`);
  }

  if (minSize) {
    validationDescription.push(`Min. ${bytesToMegaBytesString(minSize)}`);
  }

  if (maxResolution) {
    validationDescription.push(`Max res. ${maxResolution.width}x${maxResolution.height}`);
  }

  if (minResolution) {
    validationDescription.push(`Min res. ${minResolution.width}x${minResolution.height}`);
  }

  return validationDescription;
};
