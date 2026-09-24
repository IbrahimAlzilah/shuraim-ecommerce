import * as React from "react"
import { cn } from "cn"
import { Eye, EyeOff } from "lucide-react"

function PasswordInput({
  className,
  showLabel = "Show password",
  hideLabel = "Hide password",
  ...props
}: Omit<React.ComponentProps<"input">, "type"> & {
  showLabel?: string
  hideLabel?: string
}) {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <div className="relative">
      <input
        type={isVisible ? "text" : "password"}
        data-slot="input"
        className={cn(
          "border-border bg-background flex h-8 w-full min-w-0 rounded-lg border px-2.5 pe-8 text-sm outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          className
        )}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label={isVisible ? hideLabel : showLabel}
        onClick={() => setIsVisible((value) => !value)}
        className="text-muted-foreground hover:text-foreground absolute end-2 top-1/2 -translate-y-1/2"
      >
        {isVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  )
}

export { PasswordInput }
