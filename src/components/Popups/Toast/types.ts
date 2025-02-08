import { ReactNode } from "react";

//! TOASTS CONTAINER COMPONENTS
export type ToastsContainerProps<T = ToastVariant> = ToastsContainerBaseProps &
  (T extends ToastVariant
    ? { toastConfig?: ToastConfig<ToastVariant> }
    : { toastConfig: T extends string ? ToastConfig<T> : ToastConfig<string> });

export type ToastHandler<T = ToastVariant> = {
  addToast: (payload: AddToastPayload<T>) => void;
  clear: () => void;
};

export type ToastsPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type ToastVariant = "success" | "failure" | "warning" | "information";

export type AddToastPayload<T> = {
  message: string;
  type?: T;
  title?: string;
  toastDuration?: number;
  transformToastContent?: (content: string) => string;
};

export type ToastsContainerBaseProps = {
  /** The duration (in milliseconds) for which each toast will be displayed. @default 2000 */
  toastsDuration?: number;

  /** Whether the toasts should automatically close after the specified duration. @default true */
  autoClose?: boolean;

  /** The position where toasts will appear on the screen.
   * @default "top-right" */
  toastsPosition?: ToastsPosition;

  /** Callback to transform the content of the toast before displaying it. @default undefined */
  transformToastsContent?: (content: string, type: "title" | "message") => string;
};

export type ToastConfig<TKey extends string> = Record<
  TKey,
  {
    default: boolean;
    icon: ReactNode;
    variant: ToastVariant;
    title: string;
  }
>;

//! TOASTS COMPONENTS
export type ToastProps = {
  onClose: (toastId: number) => void;
  onMouseEnter: (toastId: number) => void;
  onMouseLeave: (toast: ToastType) => void;
  toast: ToastType;
};

export type ToastType = {
  message: string;
  variant: string;
  title: string;
  id: number;
  toastDuration: number;
  icon: ReactNode;
};

//! CLOSE ICON
export type CloseIconProps = {
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};
