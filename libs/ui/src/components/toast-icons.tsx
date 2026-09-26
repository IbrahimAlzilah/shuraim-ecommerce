import type { ReactNode, SVGProps } from "react"

type ToastIconVariant = "success" | "error" | "warning" | "info"

const ICON_BG: Record<ToastIconVariant, string> = {
  success: "bg-[#76c013]",
  error: "bg-[#ef4444]",
  warning: "bg-[#f59e0b]",
  info: "bg-[#3b82f6]",
}

function ToastGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  )
}

function ToastStatusIcon({
  variant,
  children,
}: {
  variant: ToastIconVariant
  children: ReactNode
}) {
  return (
    <span
      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-white ${ICON_BG[variant]}`}
    >
      {children}
    </span>
  )
}

export const toastIcons = {
  success: (
    <ToastStatusIcon variant="success">
      <ToastGlyph className="size-3.5">
        <path d="M5 12.5 9.5 17 19 7.5" />
      </ToastGlyph>
    </ToastStatusIcon>
  ),
  error: (
    <ToastStatusIcon variant="error">
      <ToastGlyph className="size-3.5">
        <path d="M8 8l8 8M16 8l-8 8" />
      </ToastGlyph>
    </ToastStatusIcon>
  ),
  warning: (
    <ToastStatusIcon variant="warning">
      <ToastGlyph className="size-3.5">
        <path d="M12 8v4M12 16h.01" />
      </ToastGlyph>
    </ToastStatusIcon>
  ),
  info: (
    <ToastStatusIcon variant="info">
      <ToastGlyph className="size-3.5">
        <path d="M12 11v5M12 8h.01" />
      </ToastGlyph>
    </ToastStatusIcon>
  ),
  loading: (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20">
      <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
    </span>
  ),
}
