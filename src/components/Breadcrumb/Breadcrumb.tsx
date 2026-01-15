import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Crumb } from "./components/Crumb/Crumb";
import { BreadcrumbProps, CrumbType, InternalVariant } from "./types";

import "./Breadcrumb.scss";

const separatorCrumb: CrumbType = {
  id: "separator-id",
  label: "...",
  path: "",
  disabled: true,
};

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
  const [internalVariant, setInternalVariant] = useState<InternalVariant>("full");

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const hiddenContainer = hiddenContainerRef.current;

    if (!container || !hiddenContainer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const containerWidth = entries[0].contentRect.width;
      const fullBreadcrumbWidth = hiddenContainer.scrollWidth;

      if (fullBreadcrumbWidth === 0) {
        return;
      }

      const ratio = containerWidth / fullBreadcrumbWidth;

      if (ratio < 0.7) {
        setInternalVariant("collapsed");
      } else if (ratio < 0.95) {
        setInternalVariant("no-icons");
      } else {
        setInternalVariant("full");
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [crumbs]);

  const visibleCrumbs = useMemo(() => {
    if (internalVariant === "collapsed" && crumbs.length > 2) {
      const firstCrumb = crumbs[0];
      const lastCrumb = crumbs[crumbs.length - 1];

      return [firstCrumb, separatorCrumb, lastCrumb];
    }

    return crumbs.map((crumb) => ({
      ...crumb,
      icon: internalVariant === "no-icons" ? undefined : crumb.icon,
    }));
  }, [crumbs, internalVariant]);

  const renderCrumb = useCallback(
    (crumb: CrumbType, index: number, crumbsLength: number, isHidden: boolean) => {
      const isLast = index === crumbsLength - 1;

      return (
        <React.Fragment key={crumb.id}>
          <Crumb
            hiddenCrumb={isHidden}
            zIndex={crumbsLength - index}
            crumb={{
              ...crumb,
              disabled: isLast && disableLastCrumb === true ? true : crumb.disabled,
            }}
            onClick={isHidden ? undefined : onClick}
          />
          {variant === "compact" && !isLast && (
            <FontAwesomeIcon className="m-crumb-indicator-icon" icon="chevron-right" />
          )}
        </React.Fragment>
      );
    },
    [disableLastCrumb, onClick, variant]
  );

  return (
    <div ref={containerRef} style={style} className={classNames("m-breadcrumb", className, variant)}>
      {/* Hidden container for measurement */}
      <div
        ref={hiddenContainerRef}
        className={classNames("m-breadcrumb", variant)}
        style={{
          position: "absolute",
          visibility: "hidden",
          height: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "auto",
        }}
        aria-hidden="true"
      >
        {crumbs.map((crumb, index) => renderCrumb(crumb, index, crumbs.length, true))}
      </div>

      {visibleCrumbs.map((crumb, index) => renderCrumb(crumb, index, visibleCrumbs.length, false))}
    </div>
  );
};
