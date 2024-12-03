import React from "react";

import Accordion from "./Accordion";

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryAccordionWrapper = () => {
  return (
    <Accordion icon="left" expansionMode="single">
      <Accordion.Section sectionId="1">
        <Accordion.Toggle>Toggle 2</Accordion.Toggle>
        <Accordion.Content>
          <Accordion.Item>Item 1 | 1</Accordion.Item>
          <Accordion.Item>Item 1 | 2</Accordion.Item>
          <Accordion.Item>Item 1 | 3</Accordion.Item>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section sectionId="2">
        <Accordion.Toggle>Toggle 2</Accordion.Toggle>
        <Accordion.Content>
          <Accordion.Item>Item 2 | 1</Accordion.Item>
          <Accordion.Item>Item 2 | 2</Accordion.Item>
          <Accordion.Item>Item 2 | 3</Accordion.Item>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section sectionId="3">
        <Accordion.Toggle>Toggle 3</Accordion.Toggle>
        <Accordion.Content>
          <Accordion.Item>Item 3 | 1</Accordion.Item>
          <Accordion.Item>Item 3 | 2</Accordion.Item>
          <Accordion.Item>Item 3 | 3</Accordion.Item>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion>
  );
};

export default StoryAccordionWrapper;
