import * as React from "react"
import { cn } from "cn"

function PhoneNumberInput({
  className,
  countryCode,
  countryFlag,
  ...props
}: Omit<React.ComponentProps<"input">, "type" | "dir"> & {
  countryCode: string
  countryFlag: React.ReactNode
}) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-s-2.5 top-1/2 flex -translate-y-1/2 items-center gap-1.5 text-sm text-foreground"
        dir="ltr"
      >
        <span className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] [&>svg]:h-full [&>svg]:w-full [&>svg]:rounded-[3px] [&>svg]:object-cover">
          {countryFlag}
        </span>
        <span className="text-muted-foreground">{countryCode}</span>
        <span className="h-4 w-px bg-border" />
      </span>
      <input
        type="tel"
        dir="ltr"
        data-slot="input"
        className={cn(
          "border-border bg-background flex h-8 w-full min-w-0 rounded-lg border ps-[4.75rem] pe-2.5 text-sm outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { PhoneNumberInput }
