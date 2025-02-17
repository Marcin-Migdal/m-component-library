export const getYears = (startYear: number, endYear: number): string[] => {
  const years: string[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year.toString());
  }

  return years;
};
