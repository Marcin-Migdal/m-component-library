export const getMonths = (locale: string): string[] => {
  const months: string[] = [];
  const date = new Date(2000, 0);
  const options: Intl.DateTimeFormatOptions = { month: "long" };

  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    const monthName = date.toLocaleDateString(locale, options);
    months.push(monthName);
  }

  return months;
};
