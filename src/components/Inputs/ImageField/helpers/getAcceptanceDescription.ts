import { ImageType } from "../types";

export const getAcceptanceDescription = (accept: ImageType[]): string[] => {
  const mappedAcceptFormats = accept.map((format) => `${format.slice(1).toUpperCase()}, `);

  return [
    ...mappedAcceptFormats.slice(0, mappedAcceptFormats.length - 1),
    mappedAcceptFormats[mappedAcceptFormats.length - 1].replace(",", ""),
  ];
};
