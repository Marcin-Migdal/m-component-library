export enum PrimaryPlacement {
  TOP = "top",
  BOTTOM = "bottom",
  RIGHT = "right",
  LEFT = "left",
}

export enum SecondaryPlacement {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum CalculatedPosition {
  TOP = "top",
  BOTTOM = "bottom",
  RIGHT = "right",
  LEFT = "left",
  AUTO_TOP = "auto-top",
  AUTO_BOTTOM = "auto-bottom",
  AUTO_RIGHT = "auto-right",
  AUTO_LEFT = "auto-left",
  FIT_TOP = "fit-top",
  FIT_BOTTOM = "fit-bottom",
  FIT_RIGHT = "fit-right",
  FIT_LEFT = "fit-left",
}

export type Position = {
  top: number;
  left: number;
  width?: number;
  calculatedPosition: CalculatedPosition;
};

export type GetPositionConfig = {
  consumerHasParentWidth: boolean;
  autoPosition: boolean;
  primaryPlacement: `${PrimaryPlacement}`;
  secondaryPlacement: `${SecondaryPlacement}`;
  margin: number;
  browserDeadZone: number;
};
