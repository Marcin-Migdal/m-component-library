import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import { Row } from "../Row";
import Col from "./Col";

const meta: Meta<typeof Col> = {
  title: "Components/Layout/Col",
  component: Col,
  tags: ["!autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for the column.",
      control: "text",
    },
    style: {
      description: "Inline styles for the column.",
      control: "object",
    },
  },
};

export default meta;

export const DefaultCol: StoryObj<typeof Col> = {
  argTypes: {
    sm: {
      description: "Size of the column for small screens (e.g., `sm={6}` for 50% width).",
      control: { type: "number", min: 1, max: 12 },
    },
    md: {
      description: "Size of the column for medium screens.",
      control: { type: "number", min: 1, max: 12 },
    },
    lg: {
      description: "Size of the column for large screens.",
      control: { type: "number", min: 1, max: 12 },
    },
    xl: {
      description: "Size of the column for extra-large screens.",
      control: { type: "number", min: 1, max: 12 },
    },
  },
  render: (args) => {
    return (
      <Row>
        {new Array(4).fill("").map((_item, index) => (
          <Col {...args} key={index}>
            Columns {index + 1}
          </Col>
        ))}
      </Row>
    );
  },
};

export const FlexCol: StoryObj<typeof Col> = {
  render: () => {
    return (
      <Row
        gap={{
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "6rem",
        }}
      >
        <Col smFlex={4}>Col 1 | Flex 4</Col>
        <Col smFlex={3}>Col 2 | Flex 3</Col>
        <Col smFlex={2}>Col 3 | Flex 2</Col>
        <Col smFlex={1}>Col 4 | Flex 1</Col>
      </Row>
    );
  },
};
