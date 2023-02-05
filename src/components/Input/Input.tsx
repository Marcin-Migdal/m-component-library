import React from "react";

import { IInputProps } from "./Input-interfaces";

const Input = ({ placeHolder = "Input..." }: IInputProps) => <input type="text" placeholder={placeHolder} />;

export default Input;
