import { useEffect } from "react";

type UseOutsideClickConfig<T extends HTMLElement = HTMLElement> = {
  outsideClickTriggerCondition?: (args: { event: MouseEvent; currentElement: T }) => boolean;
  additionalOutsideClickTriggerCondition?: (args: {
    event: MouseEvent;
    currentElement: T;
    originalOutsideClickTriggerCondition: boolean;
  }) => boolean;
};

/**
 * useOutsideHook
 *
 * @param ref - React ref to the element to detect outside clicks for
 * @param onOutsideClick - Callback to call when the outside click condition is met
 * @param isOutsideCondition - Optional function to determine if the event is considered an outside click. Defaults to click outside the ref element.
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | React.RefObject<null>,
  onOutsideClick: (event: MouseEvent) => void,
  config: UseOutsideClickConfig<T> = {}
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const currentElement = ref.current;

      if (!currentElement) {
        return;
      }

      const { outsideClickTriggerCondition, additionalOutsideClickTriggerCondition } = config;

      let shouldTrigger = !currentElement.contains(event.target as Node);

      if (outsideClickTriggerCondition) {
        shouldTrigger = outsideClickTriggerCondition({ event, currentElement });
      } else if (additionalOutsideClickTriggerCondition) {
        shouldTrigger = additionalOutsideClickTriggerCondition({
          event,
          currentElement,
          originalOutsideClickTriggerCondition: shouldTrigger,
        });
      }

      if (shouldTrigger) {
        onOutsideClick(event);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, config.outsideClickTriggerCondition, config.additionalOutsideClickTriggerCondition]);
}
