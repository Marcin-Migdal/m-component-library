import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { BreadcrumbProps } from "./types";

import "./Breadcrumb.scss";

/**
 * A breadcrumb component used for navigation, displaying a list of links (crumbs) to show the current location in a hierarchy.
 * Supports multiple variants and optional disabling of the last crumb.
 */
export const Breadcrumb = ({ crumbs, onClick, variant = "default", disableLastCrumb = false }: BreadcrumbProps) => {
  const crumbsLength = crumbs.length;

  return (
    <div className={classNames("m-breadcrumb", variant)}>
      {crumbs.map((crumb, index) => {
        const { id, disabled, icon, label } = crumb;

        const isLast = index === crumbs.length - 1;
        const isDisabled = disabled || (isLast && disableLastCrumb);

        return (
          <React.Fragment key={id}>
            <div
              style={{ zIndex: crumbsLength - index }}
              className={classNames("m-crumb", { disabled: isDisabled })}
              onClick={() => onClick && !isDisabled && onClick(crumb)}
            >
              {icon && <FontAwesomeIcon className="m-crumb-icon" icon={icon} />}
              <a className="m-crumb-label">{label}</a>
            </div>
            {variant === "compact" && index < crumbs.length - 1 && (
              <FontAwesomeIcon className="m-crumb-indicator-icon" icon="chevron-right" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
