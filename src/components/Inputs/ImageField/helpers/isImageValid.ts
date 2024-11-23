import { ResolutionValidation } from "../types";
import { bytesToMegaBytesString } from "./bytesToMegaBytes";

const validateImageResolution = (
  file: File,
  maxRes?: { width: number; height: number },
  minRes?: { width: number; height: number }
): Promise<{ success: boolean; error?: string }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const { width, height } = img;

      if (maxRes && (width > maxRes.width || height > maxRes.height)) {
        reject(`Image resolution exceeds maximum ${maxRes.width}x${maxRes.height}.`);

        return;
      }

      if (minRes && (width < minRes.width || height < minRes.height)) {
        reject(`Image resolution is smaller than minimum ${minRes.width}x${minRes.height}.`);

        return;
      }

      resolve({ success: true });
    };

    img.onerror = () => reject("Invalid image file.");

    img.src = URL.createObjectURL(file);
  });
};

export const isImageValid = async (
  imageFile: File,
  onError: ((errorMessage: string) => void) | undefined,
  maxSize: number | undefined,
  minSize: number | undefined,
  maxResolution: ResolutionValidation | undefined,
  minResolution: ResolutionValidation | undefined
): Promise<boolean> => {
  if (maxSize && imageFile.size > maxSize) {
    onError && onError(`File size exceeds the maximum limit of ${bytesToMegaBytesString(maxSize)}.`);
    return false;
  }

  if (minSize && imageFile.size < minSize) {
    onError && onError(`File size is smaller than the minimum limit of ${bytesToMegaBytesString(minSize)}.`);
    return false;
  }

  if (maxResolution || minResolution) {
    try {
      await validateImageResolution(imageFile, maxResolution, minResolution);

      return true;
    } catch (validationError) {
      onError && onError(validationError as string);
      return false;
    }
  }

  return true;
};
