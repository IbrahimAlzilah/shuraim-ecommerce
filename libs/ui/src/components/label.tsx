import * as React from "react"
import { cn } from "cn"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-1.5 text-sm leading-none font-medium select-none peer-disabled:pointer-events-none peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
