import React from "react";
import "./styles.css";

export interface IProgressSpinnerProps {
    loading?: boolean;
    strokeWidth?: StrokeWidthType;
}

type StrokeWidthType =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20";

const ProgressSpinner = ({ loading = true, strokeWidth = "4" }: IProgressSpinnerProps) => {
    if (!loading) return <></>;

    return (
        <svg className="spinner" viewBox="0 0 50 50">
            <circle className="spinner-path" cx="25" cy="25" r="15" fill="transparent" strokeWidth={strokeWidth} />
        </svg>
    );
};

export default ProgressSpinner;
