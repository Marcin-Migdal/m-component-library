import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  variant?: CardVariantTypes;
  className?: string;
  style?: CSSProperties;
};

export type CardVariantTypes = "default" | "border" | "gradient-border" | "gradient-border-glow";
