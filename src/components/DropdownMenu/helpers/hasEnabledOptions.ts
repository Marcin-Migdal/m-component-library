import { DropdownMenuOption } from "../types";

/**
 * Checks if any options in the array are enabled
 * @param options Array of DropdownMenuOption to check
 * @returns Boolean indicating if any options are enabled
 */
export const hasEnabledOptions = (options: DropdownMenuOption[]): boolean => {
  if (options.length === 0) {
    return false;
  }

  const checkOptionsEnabled = (opts: DropdownMenuOption[]): boolean => {
    return opts.some((option) => {
      const isCurrentOptionEnabled = option.disabled !== true;

      const areNestedOptionsEnabled = option.options ? checkOptionsEnabled(option.options) : isCurrentOptionEnabled;

      return isCurrentOptionEnabled || areNestedOptionsEnabled;
    });
  };

  return checkOptionsEnabled(options);
};
