import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { ReactElement, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { getPosition } from "../../../../utils";
import { Position } from "../../../../utils/getPosition/getPosition-types";
import { Dropdown } from "../../Dropdown";
import { DropdownChangeEvent, DropdownComponents, DropdownNumberOption } from "../../Dropdown/types";
import { getDayName, getDaysInMonth, getMonths, getWeekDays, getYears } from "../helpers";
import { normalizeDate } from "../helpers/normalizeDate";
import { DateValue } from "../types";
import { DayButton } from "./DayButton/DayButton";

import { useKeyboardClose, useOutsideClick } from "../../../../hooks";
import "./DatePickerPopup.scss";

type DatePickerPopupProps<TRange extends boolean> = {
  value: DateValue<TRange> | null;
  onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: DateValue<TRange>) => void;
  parentElement: HTMLInputElement;
  className: string;
  handleBlur: (selectedDate: DateValue<TRange> | null) => void;
  locale: string;
  range: TRange;
};

const getStartDate = <TRange extends boolean>(range: TRange, value: DateValue<TRange> | null): Date => {
  if (!value) {
    return new Date();
  }

  if (range && Array.isArray(value)) {
    return value[0] || new Date();
  }

  return value as Date;
};

const dropdownComponents: Partial<DropdownComponents<DropdownNumberOption>> = {
  IndicatorIcon: () => null,
  Control: ({ onFocus, id, idPrefix, value }) => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <span id={`${idPrefix}-${id}`} onClick={() => onFocus && onFocus({} as any)}>
      {value}
    </span>
  ),
};

export const DatePickerPopup = <TRange extends boolean>({
  value,
  onChange,
  parentElement,
  className,
  handleBlur,
  locale,
  range,
}: DatePickerPopupProps<TRange>) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useKeyboardClose(() => handleBlur(value));
  useOutsideClick(popupRef, () => handleBlur(value), {
    additionalOutsideClickTriggerCondition: ({ event, originalOutsideClickTriggerCondition }) => {
      const target: HTMLElement = event.target as HTMLElement;

      const dropdownMenuElement = document.querySelector(".m-dropdown-options") as HTMLUListElement | null;

      return (
        originalOutsideClickTriggerCondition &&
        !parentElement.contains(target) &&
        !dropdownMenuElement?.contains(target)
      );
    },
  });

  const { weekDays, monthsOptions } = useMemo(() => {
    const months = getMonths(locale);

    return {
      weekDays: getWeekDays(locale),
      monthsOptions: months.map((month, index): DropdownNumberOption => ({ label: month, value: index })),
    };
  }, [locale]);

  const yearsOptions = useMemo(() => {
    return getYears(1900, 2099).map((year): DropdownNumberOption => ({ label: year, value: parseInt(year) }));
  }, []);

  const [position, setPosition] = useState<Position | undefined>(undefined);

  const [currentYearOption, setCurrentYearOption] = useState<DropdownNumberOption>(() => {
    const year = getStartDate(range, value).getFullYear();
    return { label: year.toString(), value: year };
  });

  const [currentMonthOption, setCurrentMonthOption] = useState<DropdownNumberOption>(
    monthsOptions[getStartDate(range, value).getMonth()]
  );

  const [internalRangeHoverDate, setInternalRangeHoverDate] = useState<Date | undefined>(undefined);

  const currentYear = currentYearOption.value;
  const currentMonth = currentMonthOption.value;

  useLayoutEffect(() => {
    const calculatePopupPosition = () => {
      setPosition(getPosition(parentElement, popupRef.current));
    };

    const resizeObserver = new ResizeObserver(calculatePopupPosition);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const setMonthByIndex = (index: number) => {
    setCurrentMonthOption(monthsOptions[index]);
  };

  const handleMonthChange = (event: DropdownChangeEvent<DropdownNumberOption>) => {
    const { value: monthOptionValue } = event.target;

    monthOptionValue?.value !== undefined && setMonthByIndex(monthOptionValue.value);
  };

  const setCurrentYear = (year: number) => {
    setCurrentYearOption({ label: year.toString(), value: year });
  };

  const handleYearChange = (event: DropdownChangeEvent<DropdownNumberOption>) => {
    const { value: yearOptionValue } = event.target;

    yearOptionValue?.value !== undefined && setCurrentYear(yearOptionValue.value);
  };

  const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => {
    if (range) {
      const [dateRangeStart, dateRangeEnd] = (value as DateValue<true>) || [];

      if (
        Array.isArray(value) &&
        dateRangeStart !== null &&
        dateRangeEnd === null &&
        normalizeDate(dateRangeStart) <= normalizeDate(date)
      ) {
        onChange(event, [dateRangeStart, date] as DateValue<TRange>);
      } else {
        onChange(event, [date, null] as DateValue<TRange>);
      }
    } else {
      onChange(event, date as DateValue<TRange>);
    }
  };

  const handleHoverDaySet = useCallback(
    (date: Date | undefined) => {
      if (!Array.isArray(value) || value[0] === null || value[1] !== null || (date && date <= value[0]!)) {
        if (internalRangeHoverDate !== undefined) {
          setInternalRangeHoverDate(undefined);
        }

        return;
      }

      setInternalRangeHoverDate(date);
    },
    [range, value]
  );

  const renderDates = useCallback(() => {
    const startOfMonth = new Date(currentYear, currentMonth, 1);
    const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const dates: ReactElement[] = [];

    const startOfMonthWeekDayIndex: number = weekDays.indexOf(getDayName(startOfMonth, locale));

    if (startOfMonthWeekDayIndex !== 0) {
      const prevMonthIndex = currentMonth - 1;
      const prevMonthDayCount = getDaysInMonth(currentYear - 1, 11);

      const preFillStartDay = new Date(currentYear, prevMonthIndex, prevMonthDayCount - startOfMonthWeekDayIndex + 1);
      const preFillEndDay = new Date(currentYear, prevMonthIndex + 1, 0);

      for (let d = preFillStartDay; d <= preFillEndDay; d.setDate(d.getDate() + 1)) {
        const buttonDate = new Date(d);

        dates.push(
          <DayButton
            range={range}
            value={value}
            internalRangeHoverDate={internalRangeHoverDate}
            dimmed
            onChange={handleChange}
            onHoverDaySet={handleHoverDaySet}
            key={buttonDate.toISOString()}
            date={buttonDate}
          />
        );
      }
    }

    for (let d = startOfMonth; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      const buttonDate = new Date(d);

      dates.push(
        <DayButton
          range={range}
          value={value}
          internalRangeHoverDate={internalRangeHoverDate}
          onChange={handleChange}
          onHoverDaySet={handleHoverDaySet}
          key={buttonDate.toISOString()}
          date={buttonDate}
        />
      );
    }

    if (dates.length % 7 !== 0) {
      const nextMonthIndex = currentMonth + 1;

      const postFillStartDay = new Date(currentYear, nextMonthIndex, 1);
      const postFillEndDay = new Date(currentYear, nextMonthIndex, 7 - (dates.length % 7));

      for (let d = postFillStartDay; d <= postFillEndDay; d.setDate(d.getDate() + 1)) {
        const buttonDate = new Date(d);

        dates.push(
          <DayButton
            value={value}
            range={range}
            internalRangeHoverDate={internalRangeHoverDate}
            dimmed
            onChange={handleChange}
            onHoverDaySet={handleHoverDaySet}
            key={buttonDate.toISOString()}
            date={buttonDate}
          />
        );
      }
    }

    return dates;
  }, [currentMonth, currentYear, value, locale, internalRangeHoverDate, handleHoverDaySet]);

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setMonthByIndex(11);
      setCurrentYear(currentYear - 1);

      return;
    }

    setMonthByIndex(currentMonth - 1);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setMonthByIndex(0);
      setCurrentYear(currentYear + 1);

      return;
    }

    setMonthByIndex(currentMonth + 1);
  };

  return (
    <div ref={popupRef} className={classNames("date-picker-popup", className)} style={{ ...position }}>
      <div className="date-picker-popup-month-selector">
        <FontAwesomeIcon className="date-picker-popup-month-icon" icon="chevron-left" onClick={goToPrevMonth} />
        <div className="date-picker-popup-month-text truncate-text">
          <Dropdown
            value={currentMonthOption}
            onChange={handleMonthChange}
            options={monthsOptions}
            classNamesObj={{
              containerClassName: "date-picker-popup-dropdown-container",
              dropdownOptionsClassName: "date-picker-popup-dropdown-options",
            }}
            optionHeightFit={8}
            marginBottomType="none"
            components={dropdownComponents}
            menuPositionConfig={{ centerConsumer: true }}
          />
          <Dropdown
            value={currentYearOption}
            onChange={handleYearChange}
            options={yearsOptions}
            classNamesObj={{
              containerClassName: "date-picker-popup-dropdown-container",
              dropdownOptionsClassName: "date-picker-popup-dropdown-options",
            }}
            optionHeightFit={8}
            marginBottomType="none"
            components={dropdownComponents}
            menuPositionConfig={{ centerConsumer: true }}
          />
        </div>
        <FontAwesomeIcon className="date-picker-popup-month-icon" icon="chevron-right" onClick={goToNextMonth} />
      </div>
      <div className="date-picker-popup-week-days-header">
        {weekDays.map((day) => (
          <span key={day} className="date-picker-popup-week-days-header-column truncate-text">
            {day}
          </span>
        ))}
      </div>
      <div className="date-picker-popup-dates-container">{renderDates()}</div>
    </div>
  );
};
