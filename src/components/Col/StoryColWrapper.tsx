import React from "react";

import Col from "./Col";

export interface IStoryColWrapperProps {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    amountOfColumns?: number;
}

// This component is created only for storybook display purpose, I wanted to add some of the props.
const StoryColWrapper = ({ sm = 12, md = 12, lg = 12, xl = 12, amountOfColumns = 1 }: IStoryColWrapperProps) => {
    return (
        <>
            {new Array(amountOfColumns).fill("").map((item, index) => (
                <Col sm={sm} md={md} lg={lg} xl={xl}>
                    Columns {index + 1}
                </Col>
            ))}
        </>
    );
};

export default StoryColWrapper;
