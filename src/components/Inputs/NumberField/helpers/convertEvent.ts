import { NumberFieldChangeEvent } from "../types";

export const convertEvent = (
  event: React.ChangeEvent<HTMLInputElement>,
  value: number | null,
  persistEvent: boolean
): NumberFieldChangeEvent => {
  if (persistEvent) {
    const newEvent: NumberFieldChangeEvent = Object.create(
      Object.getPrototypeOf(event),
      Object.getOwnPropertyDescriptors(event)
    );

    const originalTarget = event.target;
    const targetProxy = new Proxy(originalTarget, {
      get(target, prop) {
        if (prop === "value") {
          return value;
        }

        return Reflect.get(target, prop);
      },
    });

    Object.defineProperty(newEvent, "target", {
      value: targetProxy,
      writable: false,
      configurable: true,
    });

    return newEvent;
  }

  return {
    target: {
      value: value,
      name: event.target.name,
      id: event.target.id,

      checked: false,
      type: "numberfield",
    },
    type: event.type,
  } as NumberFieldChangeEvent;
};
