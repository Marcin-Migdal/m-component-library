import React from "react";

interface ButtonProps {
    label: string;
}

const Button = ({ label }: ButtonProps) => {
    return <button>{label}</button>;
};

export default Button;
