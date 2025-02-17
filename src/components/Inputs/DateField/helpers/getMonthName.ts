export const getMonthName = (monthIndex: number, locale: string): string => {
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Month index must be between 0 and 11.");
  }

  const date = new Date(0, monthIndex);

  return date.toLocaleString(locale, { month: "long" });
};
