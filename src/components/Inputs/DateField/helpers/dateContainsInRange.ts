import { InternalRangeDate } from "../types";
import { isSameDay } from "./isSameDay";
import { normalizeDate } from "./normalizeDate";

export const dateContainsInRange = (dateRange: InternalRangeDate, singleDate: Date | undefined): boolean => {
  const [dateRangeStart, dateRangeEnd] = dateRange;

  if (!dateRangeStart || !singleDate) {
    return false;
  }

  const normalizedSingle = normalizeDate(singleDate);

  if (!dateRangeEnd) {
    return isSameDay(dateRangeStart, singleDate);
  }

  return normalizedSingle >= normalizeDate(dateRangeStart) && normalizedSingle <= normalizeDate(dateRangeEnd);
};
