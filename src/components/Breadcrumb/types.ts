import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";

export type CrumbType<TData = unknown> = {
  id: string | number;
  label: string;
  path: string;
  data?: TData;
  icon?: IconProp;
  disabled?: boolean;
};

export type BreadcrumbProps = {
  /** List of breadcrumbs to display. */
  crumbs: CrumbType[];

  /** Callback function triggered when a crumb is clicked. */
  onClick?: (crumb: CrumbType) => void;

  /** Variant of the breadcrumb.
   * - `default` default variant.
   * - `compact` smaller compact variant.
   * @default "default"
   */
  variant?: "default" | "compact";

  /** Whether the last crumb should be non-clickable (disabled).
   * @default false */
  disableLastCrumb?: boolean;

  /** Additional CSS class for the breadcrumb.
   * @default undefined */
  className?: string;

  /** Additional inline styles for the breadcrumb.
   * @default {} */
  style?: CSSProperties;
};
