import { toast as sonnerToast } from "sonner"

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

export const toastPromise = <T>(
  promise: Promise<T>,
  {
    loading,
    success,
    error,
  }: {
    loading: string
    success: string | ((data: T) => string)
    error: string | ((error: unknown) => string)
  }
) => {
  return sonnerToast.promise(promise, {
    loading,
    success,
    error,
  })
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
