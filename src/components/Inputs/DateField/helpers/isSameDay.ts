export const isSameDay = (dateA?: Date, dateB?: Date): boolean => {
  if (!dateA || !dateB) {
    return false;
  }
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
};
