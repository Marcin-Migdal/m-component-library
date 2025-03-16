import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { Crumb } from "./components/Crumb/Crumb";
import { BreadcrumbProps } from "./types";

import "./Breadcrumb.scss";

/**
 * A breadcrumb component used for navigation, displaying a list of links (crumbs) to show the current location in a hierarchy.
 * Supports multiple variants and optional disabling of the last crumb.
 */
export const Breadcrumb = ({
  crumbs,
  onClick,
  variant = "default",
  disableLastCrumb = false,
  className,
  style,
}: BreadcrumbProps) => {
  const crumbsLength = crumbs.length;

  return (
    <div style={style} className={classNames("m-breadcrumb", className, variant)}>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <React.Fragment key={crumb.id}>
            <Crumb
              zIndex={crumbsLength - index}
              crumb={{
                ...crumb,
                disabled: isLast && disableLastCrumb === true ? true : crumb.disabled,
              }}
              onClick={onClick}
            />
            {variant === "compact" && !isLast && (
              <FontAwesomeIcon className="m-crumb-indicator-icon" icon="chevron-right" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
