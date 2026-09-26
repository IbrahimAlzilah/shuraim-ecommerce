import type { ReactNode } from "react"

export const toastIcons: Record<string, ReactNode> = {
  success: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10b981"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  error: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ef4444"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
  warning: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f59e0b"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
  info: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3b82f6"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  loading: (
    <span className="flex size-5 shrink-0 items-center justify-center">
      <span className="size-4 animate-spin rounded-full border-2 border-emerald-500/20 border-t-emerald-500" />
    </span>
  ),
}
