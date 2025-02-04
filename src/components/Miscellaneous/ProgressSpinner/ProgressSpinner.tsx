import React from "react";

import { ProgressSpinnerProps } from "./types";

import "./ProgressSpinner.scss";

const ProgressSpinner = ({ loading = true, strokeWidth = "4" }: ProgressSpinnerProps) => {
  if (!loading) {
    return null;
  }

  return (
    <svg className="spinner" viewBox="0 0 50 50">
      <circle className="spinner-path" cx="25" cy="25" r="15" fill="transparent" strokeWidth={strokeWidth} />
    </svg>
  );
};

export default ProgressSpinner;
