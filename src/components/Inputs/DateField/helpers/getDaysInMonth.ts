export const getDaysInMonth = (year: number, month: number): number => {
  const firstDayOfNextMonth = new Date(year, month + 1, 1);

  firstDayOfNextMonth.setDate(0);

  return firstDayOfNextMonth.getDate();
};
