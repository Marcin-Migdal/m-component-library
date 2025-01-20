export const getWeekDays = (locale: string): string[] => {
  const weekDays: string[] = [];
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "short" };

  for (let i = 0; i < 7; i++) {
    date.setDate(date.getDate() - date.getDay() + i);
    const dayName = date.toLocaleDateString(locale, options);
    weekDays.push(dayName);
  }

  return weekDays;
};
