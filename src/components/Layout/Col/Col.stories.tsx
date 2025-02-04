import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import Col from "./Col";

const meta: Meta<typeof Col> = {
  title: "Components/Layout/Col",
  component: Col,
};

export default meta;

export const DefaultCol: StoryObj<typeof Col> = {
  render: () => {
    return (
      <>
        {new Array(4).fill("").map((_item, index) => (
          <Col xl={3} lg={4} md={6} sm={12}>
            Columns {index + 1}
          </Col>
        ))}
      </>
    );
  },
};

export const FlexCol: StoryObj<typeof Col> = {
  render: () => {
    return (
      <>
        <Col smFlex={4}>Columns 4</Col>
        <Col smFlex={3}>Columns 3</Col>
        <Col smFlex={2}>Columns 2</Col>
        <Col smFlex={1}>Columns 1</Col>
      </>
    );
  },
};
