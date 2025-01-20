import classNames from "classnames";
import React, { useMemo } from "react";

import { isSameDay } from "../../helpers";
import { dateContainsInRange } from "../../helpers/dateContainsInRange";
import { InternalDateValue, InternalRangeDate } from "../../types";

import "./DayButton.css";

type DayButtonProps<TRange extends boolean> = {
  date: Date;
  onChange: (date: Date) => void;
  dimmed?: boolean;
  range: TRange;
  value: InternalDateValue<TRange> | undefined;
  onHoverDaySet: (date: Date | undefined) => void;
  internalRangeHoverDate: Date | undefined;
};

export const DayButton = <TRange extends boolean>({
  date,
  onChange,
  onHoverDaySet,
  dimmed = false,
  range,
  value,
  internalRangeHoverDate,
}: DayButtonProps<TRange>) => {
  const className = useMemo(() => {
    if (range && Array.isArray(value)) {
      const [dateRangeStart, dateRangeEnd] = value as InternalRangeDate;

      if (isSameDay(dateRangeStart, date)) {
        return classNames("start-date", "in-range");
      } else if (isSameDay(dateRangeEnd, date)) {
        return classNames("end-date", "in-range");
      } else if (dateContainsInRange(value as InternalRangeDate, date)) {
        return "in-range";
      } else if (
        dateRangeStart &&
        internalRangeHoverDate &&
        dateContainsInRange([dateRangeStart, internalRangeHoverDate], date)
      ) {
        return "in-hover-range";
      }
    } else if (value && isSameDay(value as Date, date)) {
      return "selected";
    }

    return undefined;
  }, [range, value, internalRangeHoverDate]);

  return (
    <button
      key={date.toISOString()}
      onClick={() => onChange(new Date(date))}
      onMouseEnter={() => onHoverDaySet(date)}
      onMouseLeave={() => onHoverDaySet(undefined)}
      className={classNames("date-picker-popup-date-button", className, {
        dimmed,
        range,
        current: isSameDay(date, new Date()),
      })}
    >
      {date.getDate()}
    </button>
  );
};
