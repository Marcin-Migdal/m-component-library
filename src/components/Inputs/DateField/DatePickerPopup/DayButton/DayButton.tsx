import classNames from "classnames";
import React from "react";

import { isSameDay } from "../../helpers";

import "./DayButton.css";

type DayButtonProps = {
  selected?: boolean;
  date: Date;
  onChange: (date: Date) => void;
  dimmed?: boolean;
};

export const DayButton = ({ date, onChange, selected = false, dimmed = false }: DayButtonProps) => {
  return (
    <button
      key={date.toISOString()}
      onClick={() => onChange(new Date(date))}
      className={classNames("date-picker-popup-date-button", {
        selected,
        dimmed,
        current: isSameDay(date, new Date()),
      })}
    >
      {date.getDate()}
    </button>
  );
};
