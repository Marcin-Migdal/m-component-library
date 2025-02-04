import { faFileAlt, faFolder, faHome } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbProps } from "./types";

const meta: Meta<BreadcrumbProps> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: {
        type: "radio",
        options: ["default", "compact"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbProps>;

const crumbs = [
  { id: 1, name: "Home", path: "/", icon: faHome },
  { id: 2, name: "Folder", path: "/folder", icon: faFolder },
  { id: 3, name: "File", path: "/folder/file", icon: faFileAlt },
];

export const Default: Story = {
  args: {
    crumbs,
    variant: "default",
    disableLastCrumb: false,
  },
};

export const Compact: Story = {
  args: {
    crumbs,
    variant: "compact",
    disableLastCrumb: false,
  },
};

export const DisabledLastCrumb: Story = {
  args: {
    crumbs,
    variant: "default",
    disableLastCrumb: true,
  },
};

export const WithDisabledCrumbs: Story = {
  args: {
    crumbs: [
      { id: 1, name: "Home", path: "/", icon: faHome },
      { id: 2, name: "Folder", path: "/folder", icon: faFolder, disabled: true },
      { id: 3, name: "File", path: "/folder/file", icon: faFileAlt },
    ],
    variant: "default",
    disableLastCrumb: false,
  },
};
