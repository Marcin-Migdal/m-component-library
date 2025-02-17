import { faFileAlt, faFolder, faHome } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { generateHiddenArgTypes } from "../../internalUtils/generateHiddenArgTypes";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbProps, Crumb } from "./types";

export const crumbs: Crumb[] = [
  { id: 1, label: "Home", path: "/", icon: faHome },
  { id: 2, label: "Folder", path: "/folder", icon: faFolder },
  { id: 3, label: "File", path: "/folder/file", icon: faFileAlt },
];

const meta: Meta<BreadcrumbProps> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  args: { crumbs },
  argTypes: {
    ...generateHiddenArgTypes(["onClick"]),
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
