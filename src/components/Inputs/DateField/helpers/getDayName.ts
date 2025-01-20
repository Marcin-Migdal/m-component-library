export const getDayName = (date: Date, locale: string) => {
  return date.toLocaleDateString(locale, { weekday: "short" });
};
