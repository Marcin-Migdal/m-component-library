import { Config, Position } from "./getPosition-types";
import { getBottomPlacement, getLeftPlacement, getRightPlacement, getTopPlacement } from "./placements";
import { invalidTopPlacement, validateBottomPlacement, validateLeftPlacement, validateRightPlacement } from "./validators";

const defaultConfig: Config = {
    autoPosition: true,
    consumerHasParentWidth: false,
    centerConsumer: false,
    placement: "bottom",
    margin: 8,
    browserDeadZone: 8,
};

export const getPosition = (
    targetElement: HTMLElement | null | undefined,
    consumerElement: HTMLElement | null | undefined,
    externalConfig?: Partial<Config>
): Position | undefined => {
    let position: Position | undefined = undefined;

    if (!targetElement || !consumerElement) {
        return position;
    }

    const { autoPosition, placement, margin, browserDeadZone, consumerHasParentWidth, centerConsumer }: Config = {
        ...defaultConfig,
        ...externalConfig,
        browserDeadZone: externalConfig?.browserDeadZone
            ? externalConfig.browserDeadZone
            : externalConfig?.margin || defaultConfig.browserDeadZone,
    };

    const targetRect = targetElement.getBoundingClientRect();
    const consumerRect = consumerElement.getBoundingClientRect();

    switch (placement) {
        case "top": {
            position = getTopPlacement(targetRect, consumerRect, margin, centerConsumer, false);

            if (autoPosition && invalidTopPlacement(position, browserDeadZone)) {
                position = getBottomPlacement(targetRect, consumerRect, margin, centerConsumer, true);

                if (validateBottomPlacement(position, consumerRect, browserDeadZone)) {
                    position = {
                        top: browserDeadZone + window.scrollY,
                        left: position.left,
                        positionType: "fit-top",
                    };
                }
            }

            break;
        }

        case "bottom": {
            position = getBottomPlacement(targetRect, consumerRect, margin, centerConsumer, false);

            if (autoPosition && validateBottomPlacement(position, consumerRect, browserDeadZone)) {
                position = getTopPlacement(targetRect, consumerRect, margin, centerConsumer, true);

                if (invalidTopPlacement(position, browserDeadZone)) {
                    position = {
                        top: window.scrollY + window.innerHeight - consumerRect.height - browserDeadZone,
                        left: position.left,
                        positionType: "fit-bottom",
                    };
                }
            }

            break;
        }

        case "right": {
            position = getRightPlacement(targetRect, consumerRect, margin, centerConsumer, false);

            if (autoPosition && validateRightPlacement(position, consumerRect, browserDeadZone)) {
                position = getLeftPlacement(targetRect, consumerRect, margin, centerConsumer, true);

                if (validateLeftPlacement(position, browserDeadZone)) {
                    position = {
                        top: position.top,
                        left: browserDeadZone + window.scrollX,
                        positionType: "fit-right",
                    };
                }
            }

            break;
        }

        case "left": {
            position = getLeftPlacement(targetRect, consumerRect, margin, centerConsumer, false);

            if (autoPosition && validateLeftPlacement(position, browserDeadZone)) {
                position = getRightPlacement(targetRect, consumerRect, margin, centerConsumer, true);

                if (validateRightPlacement(position, consumerRect, browserDeadZone)) {
                    position = {
                        top: position.top,
                        left: browserDeadZone + window.scrollX,
                        positionType: "fit-left",
                    };
                }
            }

            break;
        }
    }

    return !position ? undefined : !consumerHasParentWidth ? { ...position } : { ...position, width: targetRect.width };
};
