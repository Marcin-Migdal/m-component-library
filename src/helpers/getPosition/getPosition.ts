import { GetPositionResponse, Placement } from "./getPosition-types";
import { getBottomPlacement, getLeftPlacement, getRightPlacement, getTopPlacement } from "./placements";
import { validateBottomPlacement, validateLeftPlacement, validateRightPlacement, validateTopPlacement } from "./validators";

export const getPosition = (
    targetElement: HTMLDivElement | null | undefined,
    consumerElement: HTMLDivElement | null | undefined,
    placement: Placement = "auto-bottom",
    margin: number = 8,
    browserDeadZone: number = margin
): GetPositionResponse => {
    if (!targetElement) return undefined;

    const targetRect = targetElement.getBoundingClientRect();

    switch (placement) {
        case "top":
            return getTopPlacement(targetRect, margin);
        case "bottom":
            return getBottomPlacement(targetRect, margin);
        case "right":
            return getRightPlacement(targetRect, margin);
        case "left":
            return getLeftPlacement(targetRect, margin);
    }

    if (!consumerElement) return undefined;

    const consumerRect = consumerElement.getBoundingClientRect();

    switch (placement) {
        case "auto-top": {
            let position = getTopPlacement(targetRect, margin);

            if (validateTopPlacement(position, consumerRect, browserDeadZone)) {
                const autoPosition = getBottomPlacement(targetRect, margin);

                if (validateBottomPlacement(autoPosition, consumerRect, browserDeadZone)) {
                    return { top: browserDeadZone, left: autoPosition.left };
                }

                return autoPosition;
            }

            return position;
        }

        case "auto-bottom": {
            let position = getBottomPlacement(targetRect, margin);

            if (validateBottomPlacement(position, consumerRect, browserDeadZone)) {
                const autoPosition = getTopPlacement(targetRect, margin);

                if (validateTopPlacement(autoPosition, consumerRect, browserDeadZone)) {
                    return { top: browserDeadZone, left: autoPosition.left };
                }

                return autoPosition;
            }

            return position;
        }

        case "auto-right": {
            let position = getRightPlacement(targetRect, margin);

            if (validateRightPlacement(position, consumerRect, browserDeadZone)) {
                const autoPosition = getLeftPlacement(targetRect, margin);

                if (validateLeftPlacement(autoPosition, consumerRect, browserDeadZone)) {
                    return { top: autoPosition.top, left: document.body.clientWidth - browserDeadZone - consumerRect.width };
                }

                return autoPosition;
            }

            return position;
        }

        case "auto-left": {
            let position = getLeftPlacement(targetRect, margin);

            if (validateLeftPlacement(position, consumerRect, browserDeadZone)) {
                const autoPosition = getRightPlacement(targetRect, margin);

                if (validateRightPlacement(autoPosition, consumerRect, browserDeadZone)) {
                    return { top: autoPosition.top, left: browserDeadZone };
                }

                return autoPosition;
            }

            return position;
        }
    }
};
