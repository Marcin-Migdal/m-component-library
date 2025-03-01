import classNames from "classnames";
import React, { useMemo } from "react";

import { isSameDay } from "../../helpers";
import { dateContainsInRange } from "../../helpers/dateContainsInRange";
import { DateValue, RangeDate } from "../../types";

import "./DayButton.scss";

type DayButtonProps<TRange extends boolean> = {
  date: Date;
  onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => void;
  dimmed?: boolean;
  range: TRange;
  value: DateValue<TRange> | undefined;
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
      const [dateRangeStart, dateRangeEnd] = value as RangeDate;

      if (isSameDay(dateRangeStart, date)) {
        return classNames("start-date", "in-range");
      } else if (isSameDay(dateRangeEnd, date)) {
        return classNames("end-date", "in-range");
      } else if (dateContainsInRange(value as RangeDate, date)) {
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
      onClick={(event) => onChange(event, new Date(date))}
      onMouseEnter={() => onHoverDaySet(date)}
      onMouseLeave={() => onHoverDaySet(undefined)}
      className={classNames("date-picker-popup-date-button", className, {
        dimmed,
        current: isSameDay(date, new Date()),
      })}
    >
      {date.getDate()}
    </button>
  );
};
