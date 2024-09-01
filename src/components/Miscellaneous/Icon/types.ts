import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEventHandler } from "react";

export type IconProps = {
    icon?: IconProp;
    onClick?: MouseEventHandler<SVGElement>;
    className?: string;
    style?: CSSProperties;
};
