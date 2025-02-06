import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Crumb<TData = unknown> = {
  id: string | number;
  label: string;
  path: string;
  data?: TData;
  icon?: IconProp;
  disabled?: boolean;
};

export type BreadcrumbProps = {
  /** List of breadcrumbs to display. */
  crumbs: Crumb[];

  /** Callback function triggered when a crumb is clicked. */
  onClick: (crumb: Crumb) => void;

  /** Variant of the breadcrumb.
   * - `default` default variant.
   * - `compact`: smaller compact variant.
   * @default "default"
   */
  variant?: "default" | "compact";

  /** Whether the last crumb should be non-clickable (disabled).
   * @default false */
  disableLastCrumb?: boolean;
};
