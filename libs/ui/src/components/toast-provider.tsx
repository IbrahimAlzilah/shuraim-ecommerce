"use client"

import * as React from "react"
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner"
import { toastIcons } from "./toast-icons"

export interface ToastProviderProps {
  /**
   * Position of the toast notifications
   * @default 'top-center'
   */
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center"
  /**
   * Theme for the toast notifications
   * @default 'light'
   */
  theme?: "light" | "dark" | "system"
  /**
   * Rich colors for the toast notifications
   * @default false
   */
  richColors?: boolean
  /**
   * Expand toast notifications
   * @default false
   */
  expand?: boolean
  /**
   * Duration in milliseconds before toast is dismissed
   * @default 4000
   */
  duration?: number
  children?: React.ReactNode
}

export type ToastOptions = {
  title?: string
  description?: string
  variant?: "default" | "destructive" | "success" | "error" | "warning" | "info"
  action?: {
    label: string
    onClick: () => void
  }
}

export const toastSuccess = (
  message: string,
  options?: { description?: string; action?: { label: string; onClick: () => void } }
) => {
  return sonnerToast.success(message, {
    description: options?.description,
    action: options?.action,
  })
}

export const toastError = (
  message: string,
  options?: { description?: string; action?: { label: string; onClick: () => void } }
) => {
  return sonnerToast.error(message, {
    description: options?.description,
    action: options?.action,
  })
}

export const toastInfo = (
  message: string,
  options?: { description?: string; action?: { label: string; onClick: () => void } }
) => {
  return sonnerToast.info(message, {
    description: options?.description,
    action: options?.action,
  })
}

export const toastWarning = (
  message: string,
  options?: { description?: string; action?: { label: string; onClick: () => void } }
) => {
  return sonnerToast.warning(message, {
    description: options?.description,
    action: options?.action,
  })
}

export function toastPromise<T>(
  promise: Promise<T>,
  data: {
    loading: string
    success: string | ((data: T) => string)
    error: string | ((error: unknown) => string)
  }
) {
  return sonnerToast.promise(promise, data)
}

type ToastFunction = typeof sonnerToast & {
  (options: ToastOptions): string | number
}

export const toast: ToastFunction = Object.assign(
  (messageOrOptions: string | ToastOptions, maybeOptions?: Parameters<typeof sonnerToast>[1]) => {
    if (
      typeof messageOrOptions === "object" &&
      messageOrOptions !== null &&
      ("title" in messageOrOptions || "description" in messageOrOptions)
    ) {
      const { title, description, variant, action } = messageOrOptions
      const text = title || description || ""
      const opts: Parameters<typeof sonnerToast>[1] = {
        description: title && description ? description : undefined,
        action: action
          ? {
              label: action.label,
              onClick: action.onClick,
            }
          : undefined,
        ...maybeOptions,
      }
      if (variant === "destructive" || variant === "error") {
        return sonnerToast.error(text, opts)
      }
      if (variant === "warning") {
        return sonnerToast.warning(text, opts)
      }
      if (variant === "info") {
        return sonnerToast.info(text, opts)
      }
      return sonnerToast.success(text, opts)
    }
    return sonnerToast(messageOrOptions as string, maybeOptions)
  },
  sonnerToast
) as ToastFunction

export function useToast() {
  return {
    toast,
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    toastPromise,
  }
}

const toastClassName =
  "group pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 py-1.5 px-3.5 sm:px-4 font-sans text-slate-800 dark:text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] select-none transition-all duration-300"

export function ToastProvider({
  position = "top-center",
  theme = "light",
  richColors = false,
  expand = false,
  duration = 4000,
  children,
}: ToastProviderProps = {}) {
  return (
    <>
      {children}
      <SonnerToaster
        position={position}
        theme={theme}
        richColors={richColors}
        expand={expand}
        duration={duration}
        offset={16}
        gap={10}
        icons={toastIcons}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: toastClassName,
            title:
              "text-xs sm:text-sm font-medium leading-normal text-slate-800 dark:text-slate-100 whitespace-nowrap",
            description: "text-xs text-muted-foreground",
            content: "flex min-w-0 items-center gap-1",
            icon: "!m-0 !size-auto shrink-0",
            actionButton:
              "!rounded-full !bg-slate-100 hover:!bg-slate-200/90 dark:!bg-zinc-800 dark:hover:!bg-zinc-700 !px-3.5 !py-2 !text-xs sm:!text-sm !font-medium !text-slate-800 dark:!text-slate-100 !transition-colors !cursor-pointer shrink-0 !border-0",
          },
        }}
      />
    </>
  )
}

export const ToastContainer = ToastProvider
export { toastIcons }
