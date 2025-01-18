import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { getPosition } from "../../../../helpers";
import { Position } from "../../../../helpers/getPosition/getPosition-types";
import { DropdownMenu, DropdownMenuOption } from "../../../DropdownMenu";
import { getDayName, getDaysInMonth, getMonthName, getMonths, getWeekDays, getYears, isSameDay } from "../helpers";
import { DayButton } from "./DayButton/DayButton";

import "./DatePickerPopup.css";

type DatePickerPopupProps = {
  value: Date | undefined;
  onChange: (value: Date) => void;
  parentElement: HTMLInputElement;
  className: string;
  handleClose: () => void;
  locale: string;
};

// TODO!
//!     css colors cleanup
//!     selecting date range

export const DatePickerPopup = ({
  value,
  onChange,
  parentElement,
  className,
  handleClose,
  locale,
}: DatePickerPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position | undefined>(undefined);

  const [currentYear, setCurrentYear] = useState(value ? value.getFullYear() : new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(value ? value.getMonth() : new Date().getMonth());

  const { weekDays, monthsOptions } = useMemo(() => {
    const months = getMonths(locale);

    return {
      weekDays: getWeekDays(locale),
      monthsOptions: months.map(
        (month, index): DropdownMenuOption => ({
          label: month,
          onClick: () => setCurrentMonth(index),
        })
      ),
    };
  }, [locale]);

  const yearsOptions: DropdownMenuOption[] = useMemo(() => {
    return getYears(1900, 2099).map(
      (year): DropdownMenuOption => ({
        label: year,
        onClick: () => setCurrentYear(parseInt(year)),
      })
    );
  }, []);

  useLayoutEffect(() => {
    const calculatePopupPosition = () => {
      setPosition(getPosition(parentElement, popupRef.current));
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (!popupRef.current) {
        return;
      }

      const dropdownPopupElement = document.querySelector(".date-picker-dropdown-popup") as HTMLUListElement | null;

      if (
        !popupRef.current.contains(target) &&
        !parentElement.contains(target) &&
        !dropdownPopupElement?.contains(target)
      ) {
        handleClose();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        handleClose();
      }
    };

    const resizeObserver = new ResizeObserver(calculatePopupPosition);
    resizeObserver.observe(document.body);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      resizeObserver.disconnect();

      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const renderDates = useCallback(() => {
    const startOfMonth = new Date(currentYear, currentMonth, 1);
    const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const dates = [];

    const startOfMonthWeekDayIndex: number = weekDays.indexOf(getDayName(startOfMonth, locale));

    if (startOfMonthWeekDayIndex !== 0) {
      const prevMonthIndex = currentMonth - 1;
      const prevMonthDayCount = getDaysInMonth(currentYear - 1, 11);

      const preFillStartDay = new Date(currentYear, prevMonthIndex, prevMonthDayCount - startOfMonthWeekDayIndex + 1);
      const preFillEndDay = new Date(currentYear, prevMonthIndex + 1, 0);

      for (let d = preFillStartDay; d <= preFillEndDay; d.setDate(d.getDate() + 1)) {
        const buttonDate = new Date(d);

        dates.push(<DayButton dimmed onChange={onChange} key={buttonDate.toISOString()} date={buttonDate} />);
      }
    }

    for (let d = startOfMonth; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      const buttonDate = new Date(d);

      dates.push(
        <DayButton
          selected={isSameDay(value, buttonDate)}
          onChange={onChange}
          key={buttonDate.toISOString()}
          date={buttonDate}
        />
      );
    }

    if (dates.length % 7 !== 0) {
      const nextMonthIndex = 12;

      const postFillStartDay = new Date(currentYear, nextMonthIndex, 1);
      const postFillEndDay = new Date(currentYear, nextMonthIndex, 7 - (dates.length % 7));

      for (let d = postFillStartDay; d <= postFillEndDay; d.setDate(d.getDate() + 1)) {
        const buttonDate = new Date(d);

        dates.push(<DayButton dimmed onChange={onChange} key={buttonDate.toISOString()} date={buttonDate} />);
      }
    }

    return dates;
  }, [currentMonth, currentYear, value, locale]);

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);

      return;
    }

    setCurrentMonth(currentMonth - 1);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);

      return;
    }

    setCurrentMonth(currentMonth + 1);
  };

  return (
    <div ref={popupRef} className={classNames("date-picker-popup", className)} style={{ ...position }}>
      <div className="date-picker-popup-month-selector">
        <FontAwesomeIcon className="date-picker-popup-month-icon" icon="chevron-left" onClick={goToPrevMonth} />
        <p className="date-picker-popup-month-text truncate-text">
          <DropdownMenu
            options={monthsOptions}
            zIndex={5}
            centerConsumer
            openEvent="click"
            popupClassName="date-picker-dropdown-popup"
            optionHeightFit={8}
          >
            <span>{getMonthName(currentMonth, locale)}</span>
          </DropdownMenu>
          <DropdownMenu
            options={yearsOptions}
            zIndex={5}
            centerConsumer
            openEvent="click"
            popupClassName="date-picker-dropdown-popup"
            optionHeightFit={8}
          >
            <span>{currentYear}</span>
          </DropdownMenu>
        </p>
        <FontAwesomeIcon className="date-picker-popup-month-icon" icon="chevron-right" onClick={goToNextMonth} />
      </div>
      <div className="date-picker-popup-week-days-header">
        {weekDays.map((day) => (
          <span className="date-picker-popup-week-days-header-column truncate-text">{day}</span>
        ))}
      </div>
      <div className="date-picker-popup-dates-container">{renderDates()}</div>
    </div>
  );
};
