export type TopPosition = {
    bottom: number;
    left: number;
};

export type BottomPosition = {
    top: number;
    left: number;
};

export type RightPosition = {
    top: number;
    left: number;
};

export type LeftPosition = {
    top: number;
    right: number;
};

export type Placement = "top" | "bottom" | "right" | "left" | "auto-top" | "auto-bottom" | "auto-right" | "auto-left";

export type GetPositionResponse = TopPosition | BottomPosition | RightPosition | LeftPosition | undefined;
