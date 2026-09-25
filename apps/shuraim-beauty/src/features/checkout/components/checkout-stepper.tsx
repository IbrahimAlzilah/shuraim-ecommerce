"use client"

import { useTranslations } from "next-intl"

import { cn } from "@rawnaq/ui/lib/utils"

import type { CheckoutStep } from "../types/checkout-flow"

const STEPS = ["address", "shipping", "payment"] as const satisfies readonly Exclude<
  CheckoutStep,
  "success"
>[]

export function CheckoutStepper({
  step,
}: {
  step: Exclude<CheckoutStep, "success">
}) {
  const t = useTranslations("Checkout")
  const currentIndex = STEPS.indexOf(step)

  return (
    <ol className="flex items-center justify-between sm:justify-start gap-1 sm:gap-2 text-xs sm:text-sm">
      {STEPS.map((s, index) => (
        <li key={s} className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
              index <= currentIndex
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </span>
          <span
            className={cn(
              "whitespace-nowrap text-xs sm:text-sm",
              index === currentIndex ? "font-bold text-foreground" : "text-muted-foreground"
            )}
          >
            {t(`steps.${s}`)}
          </span>
          {index < STEPS.length - 1 && (
            <span className="bg-border mx-1 sm:mx-2 h-px w-4 sm:w-8" />
          )}
        </li>
      ))}
    </ol>
  )
}
