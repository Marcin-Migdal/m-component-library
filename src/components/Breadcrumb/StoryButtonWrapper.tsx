import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

import { capitalize } from "../../helpers";
import { Breadcrumb } from "./Breadcrumb";
import { Crumb } from "./types";

const path = "http://localhost:3000/settings/theme/test";

const icons: Record<string, IconProp> = {
  settings: "gear",
  theme: "paint-brush",
};

const getCrumbs = (): Crumb[] => {
  const slicedPath = path.slice(path.indexOf("settings")).split("/");
  const crumbs: Crumb[] = [];

  for (let i = 0; i < slicedPath.length; i++) {
    const prevCrumb = crumbs[i - 1];

    crumbs.push({
      id: i,
      name: capitalize(slicedPath[i]),
      path: prevCrumb ? `${prevCrumb.path}/${slicedPath[i]}` : slicedPath[i],
      icon: icons[slicedPath[i]],
      disabled: i === 1,
    });
  }

  return crumbs;
};

type StoryBreadcrumbWrapperProps = {
  disableLastCrumb: boolean;
  variant: "default" | "compact";
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryBreadcrumbWrapper = ({ disableLastCrumb, variant }: StoryBreadcrumbWrapperProps) => {
  const crumbs: Crumb[] = getCrumbs();

  const handleCrumbClick = (crumb: Crumb) => {
    // eslint-disable-next-line no-console
    console.log(crumb);
  };

  return (
    <Breadcrumb crumbs={crumbs} onClick={handleCrumbClick} disableLastCrumb={disableLastCrumb} variant={variant} />
  );
};

export default StoryBreadcrumbWrapper;
