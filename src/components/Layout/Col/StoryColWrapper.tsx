import React, { ComponentProps } from "react";

import Col from "./Col";

export type StoryColWrapperProps = {
  amountOfColumns: number;
} & ComponentProps<typeof Col>;

// This component is created only for storybook display purpose, I wanted to add some of the props.
const StoryColWrapper = ({ amountOfColumns = 1 }: StoryColWrapperProps) => {
  return (
    <>
      {new Array(amountOfColumns).fill("").map((_item, index) => (
        <Col md={3} lgFlex={1}>
          Columns {index + 1}
        </Col>
      ))}
    </>
  );
};

export default StoryColWrapper;
