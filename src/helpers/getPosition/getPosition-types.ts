export type Placement = "top" | "bottom" | "right" | "left";

export type Position = {
    top: number;
    left: number;
    width?: number;
    positionType: Placement | "auto-top" | "auto-bottom" | "auto-right" | "auto-left" | "fit-top" | "fit-right" | "fit-bottom" | "fit-left";
};

export type Config = {
    autoPosition: boolean;
    consumerHasParentWidth: boolean;
    centerConsumer: boolean;
    placement: Placement;
    margin: number;
    browserDeadZone: number;
};
