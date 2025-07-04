import { ColorTokenType } from "./types";

export const commonColorTokens: ColorTokenType = {
  success: [
    { cssVariable: "--success-light-color" },
    { cssVariable: "--success-color" },
    { cssVariable: "--success-dark-color" },
  ],
  failure: [
    { cssVariable: "--failure-light-color" },
    { cssVariable: "--failure-color" },
    { cssVariable: "--failure-dark-color" },
  ],
  warning: [
    { cssVariable: "--warning-light-color" },
    { cssVariable: "--warning-color" },
    { cssVariable: "--warning-dark-color" },
  ],
  information: [
    { cssVariable: "--information-light-color" },
    { cssVariable: "--information-color" },
    { cssVariable: "--information-dark-color" },
  ],
  gray: Array.from({ length: 35 }, (_, i) => {
    const value = i * 25;
    const padded = value === 0 ? "000" : value.toString().padStart(3, "0");

    return { cssVariable: `--grey-color-${padded}` };
  }),
};

export const modeColorTokens: ColorTokenType = {
  backgroundColor: [
    { cssVariable: "--background-color" },
    { cssVariable: "--popups-background-color" },
    { cssVariable: "--background-hover-color" },
    { cssVariable: "--background-active-color" },
  ],
  inputsColors: [
    { cssVariable: "--input-background-color" },
    { cssVariable: "--input-hover-background-color" },
    { cssVariable: "--input-disabled-background-color" },
    { cssVariable: "--input-text-color" },
    { cssVariable: "--input-hover-color" },
    { cssVariable: "--input-disabled-text-color" },
    { cssVariable: "--input-label-color" },
    { cssVariable: "--input-placeholder-color" },
    { cssVariable: "--input-hover-placeholder-color" },
    { cssVariable: "--color-picker-pointer" },
    { cssVariable: "--color-picker-dragged-pointer" },
    { cssVariable: "--input-image-icon-color" },
    { cssVariable: "--icon-tile-background-color" },
    { cssVariable: "--icon-tile-hover-background-color" },
    { cssVariable: "--icon-tile-active-background-color" },
    { cssVariable: "--popups-hover-background-color" },
    { cssVariable: "--popups-active-background-color" },
    { cssVariable: "--popup-date-button-dimmed-text-color" },
    { cssVariable: "--popup-date-button-alt-highlighted-color" },
  ],
  buttons: [
    { cssVariable: "--btn-outlined-background-color" },
    { cssVariable: "--btn-full-color" },
    { cssVariable: "--btn-text-background-color" },
    { cssVariable: "--btn-neon-hover-color" },
    { cssVariable: "--btn-neon-background-color" },
  ],
  overlay: [{ cssVariable: "--overlay-background-color" }],
  tooltip: [{ cssVariable: "--tooltip-color" }, { cssVariable: "--tooltip-background-color" }],
  alert: [{ cssVariable: "--alert-disabled-button-background-color" }],
  accordion: [
    { cssVariable: "--accordion-background" },
    { cssVariable: "--accordion-hover-background" },
    { cssVariable: "--highlighted-accordion-background" },
    { cssVariable: "--accordion-item-background" },
  ],
  breadcrumb: [{ cssVariable: "--crumb-background-color" }, { cssVariable: "--crumb-hover-background-color" }],
  dropdownMenu: [
    { cssVariable: "--dropdown-menu-border-color" },
    { cssVariable: "--dropdown-menu-background-color" },
    { cssVariable: "--dropdown-menu-disabled-background-color" },
    { cssVariable: "--dropdown-menu-hover-background-color" },
    { cssVariable: "--dropdown-menu-active-background-color" },
    { cssVariable: "--dropdown-menu-highlighted-color" },
  ],
  common: [
    { cssVariable: "--icon-color" },
    { cssVariable: "--icon-hover-color" },
    { cssVariable: "--primary-text-color_000" },
    { cssVariable: "--primary-text-color_100" },
    { cssVariable: "--primary-text-color_200" },
    { cssVariable: "--primary-text-color_300" },
    { cssVariable: "--primary-text-color_400" },
  ],
};

export const themeColorTokens: ColorTokenType = {
  primaryColors: [
    // Primary color scale from 000 to 940 (in increments of 20)
    ...Array.from({ length: 48 }, (_, i) => {
      const value = i * 20;
      const padded = value === 0 ? "000" : value.toString().padStart(3, "0");
      return { cssVariable: `--primary-color_${padded}` };
    }),
  ],
  inputsColors: [
    { cssVariable: "--dropdown-option-selected-background-color" },
    { cssVariable: "--dropdown-option-selected-hover-background-color" },
    { cssVariable: "--slider-thumb-color" },
    { cssVariable: "--checkbox-color" },
    { cssVariable: "--toggle-switch-color" },
    { cssVariable: "--popup-date-button-highlighted-color" },
  ],
  buttons: [
    { cssVariable: "--btn-outlined-color" },
    { cssVariable: "--btn-full-background-color" },
    { cssVariable: "--btn-full-hover-background-color" },
    { cssVariable: "--btn-text-color" },
    { cssVariable: "--btn-text-hover-color" },
    { cssVariable: "--btn-text-hover-background-color" },
    { cssVariable: "--btn-neon-color" },
    { cssVariable: "--btn-neon-hover-background-color" },
  ],
  loader: [{ cssVariable: "--loader-color" }],
  card: [{ cssVariable: "--card-gradient-colors" }],
  alert: [{ cssVariable: "--alert-border-color" }],
  breadcrumb: [
    { cssVariable: "--crumb-active-background-color" },
    { cssVariable: "--crumb-hover-active-background-color" },
  ],
  common: [
    { cssVariable: "--primary-highlighted-text-color" },
    { cssVariable: "--box-shadow-color" },
    { cssVariable: "--scroll-track-background-color" },
  ],
};
