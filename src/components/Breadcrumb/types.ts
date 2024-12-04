import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Crumb<TData = unknown> = {
  id: string | number;
  name: string;
  path: string;
  data?: TData;
  icon?: IconProp;
  disabled?: boolean;
};

export type BreadcrumbProps = {
  crumbs: Crumb[];
  onClick: (crumb: Crumb) => void;
  variant?: "default" | "compact";
  disableLastCrumb?: boolean;
};
