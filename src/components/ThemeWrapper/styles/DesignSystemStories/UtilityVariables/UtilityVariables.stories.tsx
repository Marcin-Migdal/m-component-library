import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ExampleList } from "../components/ExampleList/ExampleList";
import {
  borderRadiusVariables,
  borderVariables,
  ShadowBoxVariables,
  spacingVariables,
  TransitionVariables,
} from "./consts";

import "./styles.scss";

const meta: Meta = {
  title: "Design System/UtilityVariables",
  tags: ["!autodocs"],
};

export default meta;

export const Spacing: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={spacingVariables}>
      {({ cssVariable }) => (
        <div style={{ display: "flex", gap: `var(${cssVariable})` }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--background-hover-color)",
            }}
          />
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--background-hover-color)",
            }}
          />
        </div>
      )}
    </ExampleList>
  ),
};

export const Border: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={borderVariables}>
      {({ cssVariable }) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            border: `var(${cssVariable}) var(--btn-outlined-color) solid`,
            backgroundColor: "var(--background-hover-color)",
          }}
        />
      )}
    </ExampleList>
  ),
};

export const BorderRadius: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={borderRadiusVariables}>
      {({ cssVariable }) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: `var(${cssVariable})`,
            backgroundColor: "var(--background-hover-color)",
          }}
        />
      )}
    </ExampleList>
  ),
};

export const BoxShadow: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={ShadowBoxVariables}>
      {({ cssVariable }) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            boxShadow: `var(${cssVariable}) rgba(0, 0, 0, 0.1)`,
            backgroundColor: "var(--background-hover-color)",
          }}
        />
      )}
    </ExampleList>
  ),
};

export const Transition: StoryObj = {
  render: () => (
    <ExampleList cssVariableDetails={TransitionVariables}>
      {({ cssVariable }) => (
        <div
          className="transition-example"
          style={{
            width: "40px",
            height: "40px",
            transition: `all var(${cssVariable}) ease-in-out`,
            backgroundColor: "var(--background-hover-color)",
          }}
        />
      )}
    </ExampleList>
  ),
};
