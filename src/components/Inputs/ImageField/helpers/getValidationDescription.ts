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
    validationDescription.push(`max. ${bytesToMegaBytesString(maxSize)}`);
  }

  if (minSize) {
    validationDescription.push(`min. ${bytesToMegaBytesString(minSize)}`);
  }

  if (maxResolution) {
    validationDescription.push(`max res. ${maxResolution.width}x${maxResolution.height}`);
  }

  if (minResolution) {
    validationDescription.push(`min min. ${minResolution.width}x${minResolution.height}`);
  }

  return validationDescription;
};
