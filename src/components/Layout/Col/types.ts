import { CSSProperties } from "react";
import { MutuallyExclusivePartial } from "../../../types/MutuallyExclusivePartial";

export type ColProps = {
  /** Additional CSS class for the column.
   * @default "" */
  className?: string;

  /** Inline styles for the column.
   * @default {} */
  style?: CSSProperties;
} & MutuallyExclusivePartial<
  {
    /** Size of the column for small screens (e.g., `sm={6}` for 50% width).
     * @default undefined */
    sm: number;
  },
  {
    /** Flex-based size of the column for small screens (e.g., `smFlex={1}` for flex-grow).
     * @default undefined */
    smFlex: number;
  }
> &
  MutuallyExclusivePartial<
    {
      /** Size of the column for medium screens.
       * @default undefined */
      md: number;
    },
    {
      /** Flex-based size of the column for medium screens.
       * @default undefined */
      mdFlex: number;
    }
  > &
  MutuallyExclusivePartial<
    {
      /** Size of the column for large screens.
       * @default undefined */
      lg: number;
    },
    {
      /** Flex-based size of the column for large screens.
       * @default undefined */
      lgFlex: number;
    }
  > &
  MutuallyExclusivePartial<
    {
      /** Size of the column for extra-large screens.
       * @default undefined */
      xl: number;
    },
    {
      /** Flex-based size of the column for extra-large screens.
       * @default undefined */
      xlFlex: number;
    }
  >;
