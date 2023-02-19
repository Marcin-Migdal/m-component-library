import React, { useState } from "react";

import { IInputProps } from "./Input-interfaces";

const Input = ({ placeHolder = "Input..." }: IInputProps) => {
    const [test, setTest] = useState(undefined);
    const [value, setValue] = useState("");

    return <input type="text" placeholder={placeHolder} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default Input;
