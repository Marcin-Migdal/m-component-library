import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

export const SingleSelection: StoryObj<typeof Accordion> = {
  args: {
    expandOnIconClick: true,
    selectionMode: "single",
    icon: "left",
    expansionMode: "single",
    expandAnimation: "smooth",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
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
      </>
    ),
  },
};

export const MultipleSelection: StoryObj<typeof Accordion> = {
  args: {
    expandOnIconClick: true,
    selectionMode: "multiple",
    icon: "left",
    expansionMode: "multiple",
    expandAnimation: "smooth",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
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
      </>
    ),
  },
};

export const SingleExpand: StoryObj<typeof Accordion> = {
  args: {
    icon: "left",
    expansionMode: "single",
    expandAnimation: "smooth",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
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
      </>
    ),
  },
};

export const MultipleExpansions: StoryObj<typeof Accordion> = {
  args: {
    icon: "left",
    expansionMode: "multiple",
    expandAnimation: "smooth",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
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
      </>
    ),
  },
};

export const CompactVariant: StoryObj<typeof Accordion> = {
  args: {
    selectionMode: "single",
    icon: "none",
    expansionMode: "single",
    expandAnimation: "smooth",
    variant: "compact",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 1 | 1</Accordion.Item>
            <Accordion.Item>Item 1 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
        <Accordion.Section sectionId="2">
          <Accordion.Toggle>Toggle 2</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 2 | 1</Accordion.Item>
            <Accordion.Item>Item 2 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
      </>
    ),
  },
};

export const InstantAnimation: StoryObj<typeof Accordion> = {
  args: {
    selectionMode: "single",
    icon: "left",
    expansionMode: "single",
    expandAnimation: "instant",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 1 | 1</Accordion.Item>
            <Accordion.Item>Item 1 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
        <Accordion.Section sectionId="2">
          <Accordion.Toggle>Toggle 2</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 2 | 1</Accordion.Item>
            <Accordion.Item>Item 2 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
      </>
    ),
  },
};

export const RightIcon: StoryObj<typeof Accordion> = {
  args: {
    selectionMode: "single",
    icon: "right",
    expansionMode: "single",
    expandAnimation: "smooth",
    variant: "default",
    children: (
      <>
        <Accordion.Section sectionId="1">
          <Accordion.Toggle>Toggle 1</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 1 | 1</Accordion.Item>
            <Accordion.Item>Item 1 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
        <Accordion.Section sectionId="2">
          <Accordion.Toggle>Toggle 2</Accordion.Toggle>
          <Accordion.Content>
            <Accordion.Item>Item 2 | 1</Accordion.Item>
            <Accordion.Item>Item 2 | 2</Accordion.Item>
          </Accordion.Content>
        </Accordion.Section>
      </>
    ),
  },
};
