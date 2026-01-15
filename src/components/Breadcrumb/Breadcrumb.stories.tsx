import { faFileAlt, faFolder, faHome } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentCssVariableTable } from "../../internalUtils/components/ComponentCssVariableTable";
import { generateHiddenArgTypes } from "../../internalUtils/generateHiddenArgTypes";
import { Breadcrumb } from "./Breadcrumb";
import { cssVariablesData } from "./Breadcrumb.stories.consts";
import { BreadcrumbProps, CrumbType } from "./types";

export const crumbs: CrumbType[] = [
  { id: 1, label: "Home", path: "/", icon: faHome },
  { id: 2, label: "Folder", path: "/folder", icon: faFolder },
  { id: 3, label: "Sub Folder", path: "/folder/subFolder", icon: faFolder },
  { id: 4, label: "File", path: "/folder/subFolder/file", icon: faFileAlt },
  { id: 5, label: "SubFile", path: "/folder/subFolder/file/subPath", icon: faFileAlt },
];

const meta: Meta<BreadcrumbProps> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  args: { crumbs },
  argTypes: {
    ...generateHiddenArgTypes(["onClick", "className"]),
    variant: {
      control: {
        type: "radio",
        options: ["default", "compact"],
      },
      table: {
        type: { summary: "default | compact" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {};
export const Compact: Story = { args: { variant: "compact" } };
export const DisabledLastCrumb: Story = { args: { disableLastCrumb: true } };

export const WithDisabledCrumbs: Story = {
  args: {
    crumbs: [
      { id: 1, label: "Home", path: "/", icon: faHome },
      { id: 2, label: "Folder", path: "/folder", icon: faFolder, disabled: true },
      { id: 3, label: "File", path: "/folder/file", icon: faFileAlt },
    ],
  },
};

export const Responsive: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* <div style={{ width: "100%", border: "1px dashed #ccc", padding: "10px" }}>
        <p>Full Width (&gt; 90%)</p>
        <Breadcrumb {...args} />
      </div>
      <div style={{ width: "400px", border: "1px dashed #ccc", padding: "10px" }}>
        <p>Constrained Width (~80% - Expect No Icons)</p>
        <Breadcrumb {...args} />
      </div> */}
      <div style={{ width: "250px", border: "1px dashed #ccc", padding: "10px" }}>
        <p>Very Constrained Width (&lt; 70% - Expect First & Last)</p>
        <Breadcrumb {...args} />
      </div>
    </div>
  ),
};

export const CSSVariables: StoryObj = {
  render: () => <ComponentCssVariableTable data={cssVariablesData} />,
};
