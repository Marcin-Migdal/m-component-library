export const parseNumberToString = (val: number | null): string => {
  if (val === null) {
    return "";
  }

  return val.toString();
};
