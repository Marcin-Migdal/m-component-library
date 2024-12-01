import { CSSProperties } from "react";
import { MutuallyExclusivePartial } from "../../../types/MutuallyExclusivePartial";

export type ColProps = {
  className?: string;
  style?: CSSProperties;
} & MutuallyExclusivePartial<{ sm: number }, { smFlex: number }> &
  MutuallyExclusivePartial<{ md: number }, { mdFlex: number }> &
  MutuallyExclusivePartial<{ lg: number }, { lgFlex: number }> &
  MutuallyExclusivePartial<{ xl: number }, { xlFlex: number }>;
