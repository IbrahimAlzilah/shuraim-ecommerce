"use client"

import * as React from "react"
import { Loader2, Minus, Plus, Trash2 } from "lucide-react"
import { cn } from "cn"

export interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void | Promise<void>
  max?: number
  className?: string
  disabled?: boolean
  loading?: boolean
}

export function QuantityStepper({
  value,
  onChange,
  max = 99,
  className,
  disabled = false,
  loading: externalLoading,
}: QuantityStepperProps) {
  const isFullWidth = className?.includes("w-full")
  const [isMutating, setIsMutating] = React.useState(false)
  const [isRemoving, setIsRemoving] = React.useState(false)

  const isLoading = disabled || isMutating || Boolean(externalLoading)

  const handleDecrement = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isLoading) return

    const removing = value === 1
    if (removing) {
      setIsRemoving(true)
    }
    setIsMutating(true)

    try {
      if (removing) {
        // Show the removal spinner first so the user sees clear feedback that the item is being removed
        await new Promise((r) => setTimeout(r, 450))
      }
      await Promise.resolve(onChange(value - 1))
      if (!removing) {
        await new Promise((r) => setTimeout(r, 180))
      }
    } finally {
      setIsMutating(false)
      setIsRemoving(false)
    }
  }

  const handleIncrement = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isLoading || value >= max) return

    setIsMutating(true)
    try {
      await Promise.resolve(onChange(value + 1))
      await new Promise((r) => setTimeout(r, 180))
    } finally {
      setIsMutating(false)
    }
  }

  return (
    <div
      className={cn(
        "inline-flex items-center bg-slate-100/60 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-full p-0.5 gap-0.5 shrink-0",
        className
      )}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <button
        type="button"
        disabled={isLoading}
        className={cn(
          "rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200/30 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-100 transition-all shadow-xs cursor-pointer",
          isFullWidth ? "h-7 w-7 sm:h-8 sm:w-8" : "h-6 w-6",
          isLoading && "cursor-not-allowed"
        )}
        onClick={handleDecrement}
        aria-label={value === 1 ? "Remove item" : "Decrease quantity"}
      >
        {isRemoving ? (
          <Loader2
            className={cn(
              "animate-spin text-red-500/90 dark:text-red-400",
              isFullWidth ? "size-3.5 sm:size-4" : "size-3.5"
            )}
          />
        ) : value === 1 ? (
          <Trash2
            className={cn(
              "text-red-500/80 dark:text-red-400 transition-colors",
              isFullWidth ? "size-3.5 sm:size-4 stroke-[2]" : "size-3.5"
            )}
          />
        ) : (
          <Minus className={isFullWidth ? "size-3.5" : "size-3"} />
        )}
      </button>
      <span
        className={cn(
          "text-center font-bold text-slate-800 dark:text-white select-none",
          isFullWidth ? "text-xs sm:text-sm w-8" : "text-xs w-6"
        )}
      >
        {value}
      </span>
      <button
        type="button"
        className={cn(
          "rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200/30 dark:border-slate-800 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-900/80 disabled:cursor-not-allowed disabled:opacity-100 transition-all shadow-xs cursor-pointer",
          isFullWidth ? "h-7 w-7 sm:h-8 sm:w-8" : "h-6 w-6",
          isLoading && "cursor-not-allowed"
        )}
        onClick={handleIncrement}
        disabled={isLoading || value >= max}
        aria-label="Increase quantity"
      >
        <Plus className={isFullWidth ? "size-3.5" : "size-3"} />
      </button>
    </div>
  )
}
