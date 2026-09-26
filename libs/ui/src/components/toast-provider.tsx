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
}

export const toastSuccess = (message: string, description?: string) => {
  return sonnerToast.success(message, {
    description,
  })
}

export const toastError = (message: string, description?: string) => {
  return sonnerToast.error(message, {
    description,
  })
}

export const toastInfo = (message: string, description?: string) => {
  return sonnerToast.info(message, {
    description,
  })
}

export const toastWarning = (message: string, description?: string) => {
  return sonnerToast.warning(message, {
    description,
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
      const { title, description, variant } = messageOrOptions
      const text = title || description || ""
      const opts = title && description ? { description } : undefined
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

const baseClassName =
  "group pointer-events-auto flex !w-fit min-w-[300px] max-w-[min(420px,calc(100vw-2rem))] items-center gap-3 rounded-full border-0 px-3 py-2.5 font-sans text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] select-none transition-all duration-300"

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
            toast: baseClassName,
            success: "bg-[#455a44]",
            error: "bg-[#5a3434]",
            warning: "bg-[#5a4834]",
            info: "bg-[#344a5a]",
            title: "text-sm font-medium leading-snug text-white",
            description: "text-xs leading-relaxed text-white/85",
            content: "flex min-w-0 flex-col gap-0.5",
            icon: "!m-0 !size-auto shrink-0",
          },
        }}
      />
    </>
  )
}

export const ToastContainer = ToastProvider
export { toastIcons }
