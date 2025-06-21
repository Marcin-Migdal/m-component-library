import { useEffect } from "react";

type Config = {
  additionalCondition?: boolean | (() => boolean);
  keys?: string[];
};

const defaultConfig: { keys: string[] } & Omit<Config, "keys"> = {
  keys: ["Escape"],
};

export const useKeyboardClose = (onClose: () => void, config?: Config) => {
  const internalConfig = {
    ...defaultConfig,
    ...config,
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { additionalCondition, keys } = internalConfig;

      const defaultCondition = keys.includes(event.code);

      if (
        defaultCondition &&
        (additionalCondition === undefined ||
          (typeof additionalCondition === "boolean" ? additionalCondition : additionalCondition()))
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [internalConfig.additionalCondition, internalConfig.keys]);
};
