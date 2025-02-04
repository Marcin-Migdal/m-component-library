import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { BreadcrumbProps } from "./types";

import "./Breadcrumb.scss";

export const Breadcrumb = ({ crumbs, onClick, variant = "default", disableLastCrumb = false }: BreadcrumbProps) => {
  return (
    <div className={classNames("m-breadcrumb", variant)}>
      {crumbs.map((crumb, index) => {
        const { id, disabled, icon, name } = crumb;

        const isLast = index === crumbs.length - 1;
        const isDisabled = disabled || (isLast && disableLastCrumb);

        return (
          <>
            <div key={id} className={classNames("m-crumb", { disabled: isDisabled })}>
              {icon && <FontAwesomeIcon className="m-crumb-icon" icon={icon} />}
              <a className="m-crumb-name" onClick={() => onClick && !isDisabled && onClick(crumb)}>
                {name}
              </a>
            </div>
            {variant === "compact" && index < crumbs.length - 1 && (
              <FontAwesomeIcon className="m-crumb-indicator-icon" icon="chevron-right" />
            )}
          </>
        );
      })}
    </div>
  );
};
